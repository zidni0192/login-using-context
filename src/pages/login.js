import React, {useCallback, useContext} from 'react';
import {UserContext} from "../context/user.context";
import loginStyle from './login.module.css'
import {Link} from "react-router-dom";

const Login = () => {
    const {setUser} = useContext(UserContext)
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        if (form.get('user_id') === "admin" && form.get('password') === "admin") {
            setUser({user_id: form.get('user_id')})
        } else {
            alert('Invalid Credentials')
        }
    },[setUser])
    return (
        <form onSubmit={handleSubmit}>
            <div className={loginStyle.container}>
                <h1 className={loginStyle.headerTitle}>OBS REACTJS TEST</h1>
                <input
                    type={'text'}
                    name={'user_id'}
                    placeholder={"User ID"}
                    className={loginStyle.inputText}
                    required
                />
                <input
                    type={'password'}
                    name={'password'}
                    placeholder={"Password"}
                    className={loginStyle.inputText}
                    required
                />
                <button type={"submit"} className={loginStyle.buttonSubmit}>
                    Sign In
                </button>
                <Link to={'#'}>Forgot My Password</Link>
            </div>
        </form>
    );
}

export default Login;
