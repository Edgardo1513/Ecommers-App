
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsThunk} from '../store/slices/carts.slice';


const CartsSideBar = ({ show, handleClose }) => {
   const dispatch = useDispatch()
   const carts = useSelector( state => state.carts )

   useEffect( () => {
    dispatch( getCartsThunk())
   }, [])

    return (
        <div>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CartsSideBar;