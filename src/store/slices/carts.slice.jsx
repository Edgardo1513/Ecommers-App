import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        setCarts: (state, action ) => {
            return action.payload
        }
    }
})

export const { setCarts } = cartsSlice.actions;

export default cartsSlice.reducer;

export const getCartsThunk = () => dispatch => {
    dispatch( setIsLoading(true))

    axios
    .get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
    .then(resp => {
        console.log(resp.data)   
        dispatch( setCarts(resp.data) )    
     })
    .catch( error => console.error(error))
    .finally( () => dispatch( setIsLoading(false)))

}