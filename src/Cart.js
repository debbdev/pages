import React, {useState, useEffect} from 'react';
import './Cart.css';
import { addToCart, removeFromCart } from './actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Barcode from 'react-barcode';

function Cart() {
    const config = {
        background: "#f5f5f5",
        marginTop: "20px",
        marginBottom: "20px",
        fontOptions: "italic",
        width: 2,
        displayValue: false
    };
   
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(1);
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const { id } = useParams('/food/:id');
    console.log(id)
    useEffect(() => {
        if (id)
        dispatch(addToCart(id,qty));
    }, []);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    
      const history = useHistory();
       const checkoutHandler = () => {
         history.push('/signin?redirect=shipping');
      };
    return (
        <div>
            {cartItems.length === 0 ? <div> Cart is Empty </div> :
                cartItems.map((dish) => <div className='adsDetails'>
                <div className='adsDetailsImageContainer'>
                    <img src={dish.image} alt="food" className='adsDetailsImage' />
                    <Barcode value= {dish.name + dish.price} {...config}></Barcode>
        </div>
        <div className='adsDetailsDescription'>
            <h3>{dish.name}</h3>
            <p>{dish.category}</p>
            <p>{dish.description}</p>
            <p>N {dish.price}</p>
        </div>
        <div className='adsDetailsActions'>
            <div className='qty'>
                <select className='qtySelect' value={qty} onChange={(e)=> dispatch(addToCart(dish.food, e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className='size'>
                <select className='sizeSelect'  value={size} onChange={(e)=>{setSize(e.target.value)}}>
                    <option value="1">Medium Size</option>
                    <option value="3">Family Size</option>
                    <option value="5">Large Family Size</option>
                </select>
            </div>
            <button onClick={()=>removeFromCartHandler(dish.food)} className="sizebutton" disabled={cartItems.length === 0}>Remove from Cart</button>
                    </div>
    </div>)}            
        <div className='cartActions'>        
            <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + Number(c.qty), 0)} dishes)
        :
         N {cartItems.reduce((a, c) => a + c.price * c.qty , 0)}
      </h3>
      <button onClick={checkoutHandler} className="sizebutton checkoutbutton" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>
            </div> 
        
        </div>
    )
}

export default Cart;
