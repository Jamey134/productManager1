import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const ViewOne = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])

    const fetchOneProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }

    useEffect(fetchOneProduct, [])

    return (
        <div>
            <p>{products.title} </p>
            <p>Price: {products.price} </p>
            <p>Description: {products.description} </p>

        </div>

    )



}

export default ViewOne
