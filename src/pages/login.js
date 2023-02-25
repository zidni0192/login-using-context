import React, {useCallback, useContext} from 'react';
import {UserContext} from "../context/user.context";

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
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <h1 className={'header-title'}>OBS REACTJS TEST</h1>
                <input
                    type={'text'}
                    name={'user_id'}
                    placeholder={"User ID"}
                    style={{
                        textAlign: 'center',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid #4472C4'
                    }}
                    required
                />
                <input
                    type={'password'}
                    name={'password'}
                    placeholder={"Password"}
                    style={{
                        textAlign: 'center',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid #4472C4'
                    }}
                    required
                />
                <button type={"submit"} style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(#9DC3E6,#609ED6,#2A69A2)',
                    color: "#FFF",
                    borderRadius: "8px",
                    border: "0px",
                    fontWeight: '700',
                    cursor: "pointer",
                    marginTop: "25px"
                }}>Sign In
                </button>
                <a href={"#"}>Forgot My Password</a>
            </div>
        </form>
    );
}

export default Login;
