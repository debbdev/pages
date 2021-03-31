import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { useHistory} from 'react-router';
import { saveShipping } from './actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './Shipping.css';

function Shipping() {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(saveShipping(address, city, postalCode, country));
        history.push('/payment')
    }
    return (
        <div>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <div className="regformContainer">
             <div className="form">
                                    <h4>Shipping </h4>
                                    <form onSubmit={submitHandler}>
                                     <div className="formAddress">  
                                        <input type="address" placeholder="Address" name="address" id="address" onChange={(event)=>setAddress(event.target.value)}></input>
                                        </div>
                                      <div className="formCity">  
                                        <input type="text" placeholder="City" name="city" id="city" onChange={(event)=>setCity(event.target.value)}></input>
                                        </div>
                                         <div className="formPostalCode">  
                                        <input type="postalCode" placeholder="PostalCode" name="postalCode" id="postalCode" onChange={(event)=>setPostalCode(event.target.value)}></input>
                                        </div>
                                        <div className="formCountry">  
                                        <input type="text" placeholder="Country" name="country" id="country" onChange={(event)=>setCountry(event.target.value)}></input>
                                        </div>
                                            <button type="submit" className="button">Proceed To Payment</button>
                                        
                                        </form>
                </div>
            </div>
        </div>
    )
}

export default Shipping;
