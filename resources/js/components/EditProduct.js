import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const baseUrl = location.origin+'/api';

const EditProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()


    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${baseUrl}/products/${id}`,{description:description,price:price,stock:stock})
        navigate('/')
    }

    const getProductById= async () => {
        const response = await axios.get(`${baseUrl}/products/${id}`)
        setDescription(response.data.description)
        setPrice(response.data.price)
        setStock(response.data.stock)
    };

    useEffect(() => {

        getProductById()
    }, [])

    return (
        <div>
            <h3>Edit product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'> Save</button>

            </form>
        </div>
    )
}

export default EditProduct
