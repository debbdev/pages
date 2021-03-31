import React, {useState, useEffect} from 'react';
import './Gallery.css';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import OutdoorGrillTwoToneIcon from '@material-ui/icons/OutdoorGrillTwoTone';
import FastfoodTwoToneIcon from '@material-ui/icons/FastfoodTwoTone';
import TouchAppTwoToneIcon from '@material-ui/icons/TouchAppTwoTone';
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { listFood } from './actions/foodActions';
import { addToCart } from './actions/cartActions';
import Cookie from 'js-cookie';

function Gallery() {
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(1);
    const [inCart, setInCart] = useState(false);
    const foodList = useSelector(state => state.foodList);
    const { foods, loading, error } = foodList;
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const { id } = useParams('/food/:id');
    
    useEffect(() => {
        if (id)
        dispatch(addToCart(id,qty));
    }, []);

     useEffect(() => {
       dispatch(listFood())
     }, [])
     const history = useHistory();
    const handleAddToCart = () => {
        setInCart(true);
        Cookie.get({ cart: { cartItems } });
      Cookie.set("cartItems", JSON.stringify(cartItems), { path: '/cart/' });
      history.push('/cart/' + id + '?qty=' + qty + '?size=' + size);
   };
    return (
        <div>
            <div className="gallerySection">
             <div className="services">
                <div className="sev">
                    <OutdoorGrillTwoToneIcon />
                    <div className="icon">
                    <span className="normal">OUTDOOR <span className="bold">SERVICES</span></span>
                    </div>
                    </div>
                <div className="sev">
                    <FastfoodTwoToneIcon />
                    <div className="icon">
                    <span className="normal">SHARE YOUR <span className="bold">MEAL</span></span>
                    </div>
                    </div>
                <div className="sev">
                    <SpeedTwoToneIcon />
                    <div className="icon">
                    <span className="normal">FAST <span className="bold">DELIVERY</span></span>
                    </div>
                    </div>
                <div className="sev">
                    <TouchAppTwoToneIcon />
                    <div className="icon">
                    <span className="bold">ONE DIAL AWAY</span>
                    </div>
                    </div>
            </div>
            <div className="foods" >
                <h1>FOODS & RATES</h1>
                <p>ChowPages Foods & Event are all tastefully cooked and decorated with every modern <br/> facet for your consumption and relaxation.</p>
                </div>
                {loading ? <div>Loading...</div> :
                error? <div>{error}</div>: (<div className="gallery ">
                {foods.map((food) => 
                    <div className="pic" key={food._id}>
                    <div>
                            <Link to={'/food' + '/' + food.category + '/' + food._id }><img src={food.image} className="image" alt='food'/></Link>
                        <h4>{food.name}</h4></div>
                    <div className="text">
                    <p>{food.description}</p>
                        <p>{food.category}</p>
                            <p>{food.price}</p>
                            
                    </div>

                </div>
                )}
                    </div>)}
        </div>
        </div>
    )
}

export default Gallery
