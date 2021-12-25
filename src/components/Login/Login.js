import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	// const {signInUsingGoogle} = useFirebase();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/shop'
	
	const handleGoogleLogIn = () =>{
		signInUsingGoogle()
		.then(result =>{
			history.push(redirect_uri);			

		})

	}

	return (
		<div className='login-form'>
			<div>
				<h2>Please Login</h2>
				<form>
					<input type="email" name="" id="" placeholder="Your email"/>
					<br/>
					<input type="password" name="" id=""/>
					<br/>
					<input type="submit" value="Submit" />
				</form>
				<p>New to ema-john-simple-module-59? <Link to="/register">Create Account</Link> </p>
				<div>----------Or----------</div>
				<button className='btn-regular' onClick={handleGoogleLogIn}>Google Sign In</button>
			</div>
		</div>
	);
};

export default Login;