import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector} from 'react-redux';
import { filterCategoryThunk } from '../store/slices/products.slice';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductsDetail = () => {

    const { id } = useParams()
    const [ products, setproducts ] = useState({})
    const [ rate, setRate ] = useState(1)
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products)
    const prouctsFiltered = allProducts.filter( products => products.id != parseInt(id))

useEffect (() => {
    
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
    .then( resp => {        
        setproducts(resp.data)
        dispatch(filterCategoryThunk(resp.data.category.id))
    })

}, [])

    const decrements = () => {
        if( rate > 1 ) {
            setRate( rate - 1 )
        }
    }

    return (
        <div className='py-5'>
             <h1>{ products.title } </h1>
            <p>By: {products.brand} </p>            
            <p>{products.createdAt} </p>
           

            <div className="products-rate">
                <Button onClick={ () => decrements() }>-</Button>
                <span>{rate}</span>
                <Button onClick={ () => setRate(rate + 1)}>+</Button>

                <Button className='primary ms-3'>Agregar a Favorite</Button>
                <Row className='pt-3'>
                    <Col lg={9} >
                        { /*Products */} 
                        <img src={products.images?.[0].url} alt="" className='img-fluid mt-3 mb-3 mx-3'  />
                        <small className='mb-3 d-block'>{products.description} </small>
                        
                    </Col>
                    <Col lg={3} >                     
                    <h3>Related Products </h3>
                     <ListGroup>
                        {
                         prouctsFiltered.map( products => (
                            <ListGroup.Item key={products.id} >{products.title} </ListGroup.Item>                      

                         ))
                        }
                    </ListGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );
};



export default  ProductsDetail;