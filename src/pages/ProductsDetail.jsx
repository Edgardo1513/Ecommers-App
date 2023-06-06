import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


const ProductsDetail = () => {
const { id } = useParams()
const [ products, setproducts ] = useState({})
const [ rate, setRate ] = useState(1)

useEffect (() => {
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then( resp => {        
        setproducts(resp.data)
    })
}, [])

    const decrements = () => {
        if( rate > 1 ) {
            setRate( rate - 1 )
        }
    }
    return (
        <div>
             <h1>{ products.title } </h1>
            <p>By: {products.brand} </p>            
            <p>{products.createdAt} </p>
           

            <div className="products-rate">
                <Button onClick={ () => decrements() }>-</Button>
                <span>{rate}</span>
                <Button onClick={ () => setRate(rate + 1)}>+</Button>

                <Button className='primary mx-3'>Agregar a Favorite</Button>
            </div>
        </div>
    );
};



export default ProductsDetail;