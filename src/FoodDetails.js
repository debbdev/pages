import React, {useState, useEffect} from 'react';
import './FoodDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { detailsFood } from './actions/foodActions';
import { useHistory, useParams } from 'react-router-dom';
import Barcode from 'react-barcode';
import BarcodeScanner from "./BarcodeScanner";
import { addToCart } from './actions/cartActions';

function FoodDetails(props) {
    const [ data, setData ] = useState('Not Found');
    const config = {
        background: "#f5f5f5",
        marginTop: "20px",
        marginBottom: "20px",
        fontOptions: "italic",
        width: 2,
        displayValue: false
    };
    const [scanning, setScanning] = useState(false);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(1);
    const foodDetails = useSelector((state) => state.foodDetails)
    const { food, loading, error } = foodDetails;
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const { id } = useParams('/food/:id');
    
    useEffect(() => {
        if (id)
        dispatch(addToCart(id));
    }, []);
   
    console.log(id)
    useEffect(() => {
        dispatch(detailsFood(id));
    }, []);

      const history = useHistory();
       const handleAddToCart = () => {
         history.push('/cart/' + id + '?qty=' + qty + '?size=' + size);
    };
    return (
        <div>
            {loading ? <div>Loading...</div> :
            error? <div>{error}</div>:     <div className='adsDetails'>
                    <div className='adsDetailsImageContainer'>
                        <img src={food.image} alt="food" className='adsDetailsImage' />
                        <Barcode value={food.name + food.price} {...config}></Barcode>
                        <div className='scanButton'>
                        <button className='headerSigninA' onClick={(e) => { setScanning(true) }}>{scanning ? 'Stop Scanning' : 'Start Scanning'}</button>
                        <button className='headerSigninB' onClick={(e) => dispatch(addToCart(food._id, setScanning(false), handleAddToCart(), setQty(1)))}>Stop Scanning</button>
                        </div>
                        </div>
                    <div>
               {scanning ? <BarcodeScanner onDetected={props._onDetected} /> : null}
                    </div>
            <div className='adsDetailsDescription'>
                <h3>{food.name}</h3>
                <p>{food.category}</p>
                <p>{food.description}</p>
                <p>N {food.price}</p>
            </div>
            <div className='adsDetailsActions'>
                <div className='qty'>
                    <select className='qtySelect' value={qty} onChange={(e)=>{setQty(e.target.value)}}>
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
                <button className='sizebutton' onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>}
        
        </div>
    )
}

export default FoodDetails;
