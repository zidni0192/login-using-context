import React, {useContext} from 'react';
import {UserContext} from "../context/user.context";
import welcomeStyle from "./welcome.module.css"
const Welcome = () => {
    const {user} = useContext(UserContext)
    return (
        <div className={welcomeStyle.container}>
            <div className={welcomeStyle.wrapper}>
                <div className={welcomeStyle.header} >
                    <h1 className={welcomeStyle.headerTitle}>
                        OBS REACTJS TEST
                    </h1>
                </div>
                <div className={welcomeStyle.wrapperMain}>
                    <div className={welcomeStyle.sidebar}>
                        <button className={welcomeStyle.menu}>
                            HOME
                        </button>
                    </div>
                    <div className={welcomeStyle.content} >
                        <h2 className={welcomeStyle.welcomeMessage}>Welcome {user.user_id}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
