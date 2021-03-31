import React,{useEffect} from 'react';
import FastfoodTwoToneIcon from '@material-ui/icons/FastfoodTwoTone';
import { Link } from 'react-router-dom';
import './Header.css';
import PhoneIcon from '@material-ui/icons/Phone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector,useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logout } from './actions/userActions';

function Header() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    return (
        <div>
            <div className='headerHelpline'>
                <h4>Need help placing an Order? Call: 00011122 </h4>
                <PhoneIcon style={{color: 'red', fontSize: '3rem'}}/>
            </div>
            <div className='header'>
                <div className='headerImage'>
                    <Link to='/'><FastfoodTwoToneIcon style={{color: 'red', fontSize: '3rem'}}/></Link>
                    <h3>ChowPages</h3>
                </div>
                <div className='headerCart headerLinks'>
                    <Link to='/cart'><ShoppingCartIcon style={{color: 'red', fontSize: '2.2rem', paddingTop: '10px'}}/></Link>
                    <h4>Cart</h4>
                </div>
                {userInfo? (<div className='headerProfile'><Link to="/profile">{userInfo.name}</Link><Link to='/'><button className='headerSigninA' onClick={(e)=>dispatch(logout(userInfo))}>LogOut</button></Link></div>) : (<div className='headerSignin'>
                    <Link to='/signin'><button className='headerSigninA'>SignIn</button></Link>
                    <Link to ='/register'><button className='headerSigninB'>Register </button></Link>
                </div>)}
                
            </div>
        </div>
    )
}

export default Header
