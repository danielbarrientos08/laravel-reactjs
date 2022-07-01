import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseUrl = location.origin+'/api';

const CreateProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(`${baseUrl}/products`,{description:description,price:price,stock:stock})
        navigate('/')
    }

    return (
        <div>
            <h3>Create product</h3>
            <form onSubmit={store}>
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

export default CreateProduct
