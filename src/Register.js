import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { register } from './actions/userActions';
import './Signin.css';
function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : '/';
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(register(name, email, password));
    }

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;


    const dispatch = useDispatch();
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
            <div className="regformContainer">
             <div className="form">
                                    <h4>Create an Account </h4>
                                    <form onSubmit={submitHandler}>
                                     <div className="formName">  
                                   {loading && <div>Loading....</div>}
                                    {error && <div>{ error}</div>}
                                        <input type="name" placeholder="Name" name="name" id="name" onChange={(event)=>setName(event.target.value)}></input>
                                        </div>
                                      <div className="formEmail">  
                                        <input type="email" placeholder="Email" name="email" id="email" onChange={(event)=>setEmail(event.target.value)}></input>
                                        </div>
                                         <div className="formPassword">  
                                        <input type="password" placeholder="Password" name="password" id="password" onChange={(event)=>setPassword(event.target.value)}></input>
                                        </div>
                                        <div className="formConfirmPassword">  
                                        <input type="password" placeholder="Confirm Password" name="confirm-password" id="confirm-password" onChange={(event)=>setConfirmPassword(event.target.value)}></input>
                                        </div>
                                            <button type="submit" className="button">Create Account</button>
                                        <p className="full-width">Already have an Account?</p>
                                        <Link to={redirect === "/" ? "signin" : "register?redirect=" + redirect}>
                                        <p className="full-width">Sign in</p>
                                        </Link>
                                        </form>
                </div>
            </div>
        </div>
    )
}

export default Register
