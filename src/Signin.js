import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { signin } from './actions/userActions';
import './Signin.css';

function Signin() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : '/';
   
    const dispatch = useDispatch();
    function submitHandler(event) {
        event.preventDefault();
        dispatch(signin(email, password));
    }

    const history = useHistory();
    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
        return () => {
            //
        }
    }, [userInfo])
                   return (
                       <div>
                           <div className="formContainer">
                                   <div className="form">
                                    <h4>Sign-in </h4>
                                  
                                    <form onSubmit={submitHandler}>
                                       <div className="formEmail">  
                                       {loading && <div>Loading....</div>}
                                    {error && <div>{ error}</div>}
                                        <input type="email" placeholder="Email" name="email" id="email" onChange={(event)=>setEmail(event.target.value)}></input>
                                        </div>
                                         <div className="formPassword">  
                                        <input type="password" placeholder="Password" name="password" id="password" onChange={(event)=>setPassword(event.target.value)}></input>
                                        </div>
                                            <button type="submit" className="button">Sign in</button>
                                        <p className="full-width">New to ChowPages?</p>
                                        <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect}>
                                        <p className="full-width">Create your Account</p>
                                        </Link>
                                        </form>
                              </div>
                           </div>
                       </div>
                       
    )
}

export default Signin
