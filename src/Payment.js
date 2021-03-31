import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { savePayment } from './actions/cartActions';
import CheckoutSteps from './CheckoutSteps';
import './Payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();
    const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-container">
            <div><h2>Payment</h2></div>
            
              <div className="formContainerInput">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label htmlFor="paymentMethod" className="formContainerLabel">Paypal</label>
              </div>
            

            <div>
              <button type="submit" className="button primary">
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Payment;