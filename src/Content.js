import React, { useEffect, useState } from 'react';
import './Content.css';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import f11 from './Assets/f11.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Cookie from 'js-cookie';
import { addToCart } from './actions/cartActions';
import { detailsFood, listFood } from './actions/foodActions';

function Content() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(1);
  const [local, setLocal] = useState("");
  const [foreign, setForeign] = useState("");
  const [confectionaries, setConfectionaries] = useState("");
  const [inCart, setInCart] = useState(false);
  const foodList = useSelector(state => state.foodList);
  const { foods, loading, error } = foodList;
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;
    const dispatch = useDispatch();
    const { id } = useParams('/food/:id');
    
    useEffect(() => {
        if (id)
        dispatch(addToCart(id));
    }, []);

  useEffect(() => {
    dispatch(listFood())
  }, []);
     const history = useHistory();
    const handleAddToCart = () => {
        setInCart(true);
        Cookie.get({ cart: { cartItems } });
      Cookie.set("cartItems", JSON.stringify(cartItems), { path: '/cart/' });
      history.push('/cart/' + id + '?qty=' + qty + '?size=' + size);
   };
    return (
        <div className="content">
            <div className="contentHero">
            <img src={f11} className='contentImage' alt="dish" />
            </div>
            <div className="fadeBottom">
              <div className="fadeBottom__check">
                <CheckCircleTwoToneIcon style={{ fontSize: '3rem', color: 'red' }} />
                <div className="check">
                  <span className="check1">CHECK</span>
                  <span className="check2">FOOD MENU</span>
                </div>
          </div>
                <div className="options">
                  <div className="foreign dishes" >
                    <select className='option' value={foreign} onChange={(e) => setForeign(e.target.value)}>
                     <option >Foreign Dishes</option>
                <option >Food A La Carte</option>
                <option >La Pagna</option>
                <option >Finis</option>
                <option >Bonjour</option>
                    </select>
                  </div>
                  <div className="foreign dishes" >
                    <select className='option' value={local} onChange={(e) => setLocal(e.target.value)}>
                      <option>Local Dishes</option>
                      <option >Celebration of Life</option>
                <option >Come Dine with</option>
                <option >Finis</option>
                <option >Bon Apetite</option>
                    </select>
                  </div>
                  <div className="foreign dishes" >
                    <select className='option' value={confectionaries} onChange={(e) => setConfectionaries(e.target.value)}>
                    <option   >confectionaries</option>
                      <option >Pasties</option>
                      <option >Bread</option>
                      <option >PanCakes</option>
                      <option >Cakes</option>
                    </select>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Content
