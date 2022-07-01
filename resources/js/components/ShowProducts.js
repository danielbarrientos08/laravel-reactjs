
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const baseUrl = location.origin+'/api';

const ShowProducts = () => {

    const[ products, setProducts] = useState( [] )

    useEffect (()=> {
        getAllProducts()
    },[])

    const getAllProducts = async () => {
        const response = await axios.get(`${baseUrl}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        axios.delete(`${baseUrl}/products/${id}`)

        getAllProducts();

    }

    return (
        <div>
            <div className='d-grid gap-2' >
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <br/>
            <table className='table table-striped table-bordered'>
                <thead >
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning mx-2'>Edit</Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={ ()=>deleteProduct(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts
