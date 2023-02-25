import React, {useCallback, useContext} from 'react';
import {UserContext} from "../context/user.context";
import loginStyle from './login.module.css'

const Login = () => {
    const {setUser} = useContext(UserContext)
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        if (form.get('user_id') === "admin" && form.get('password') === "admin") {
            setUser({user_id: form.get('user_id'),})
        } else {
            alert('Invalid Credentials')
        }
    }, [])
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
                <a href={"#"}>Forgot My Password</a>
            </div>
        </form>
    );
}

export default Login;
