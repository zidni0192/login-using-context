import React, {useContext} from 'react';
import {UserContext} from "../context/user.context";

const Welcome = () => {
    const {user} = useContext(UserContext)
    return (
        <div style={{padding: '10px'}}>
            <div style={{border: '1px solid #4472C4', height: 'calc(100vh - 25px)'}}>
                <div className={'header'}
                     style={{padding: "30px", overflow: 'hidden', borderBottom: '1px solid #4472C4',}}>
                    <h1 className={'header-title'} style={{margin: '0', marginBottom: '-30px',}}>OBS
                        REACTJS TEST</h1>
                </div>
                <div style={{display: 'flex', height: 'calc(100% - 60px - 38px)'}}>
                    <div className={'sidebar'} style={{width: '200px', borderRight: '1px solid #4472C4'}}>
                        <button style={{
                            width:'100%',
                            border:0,
                            background:"linear-gradient(#6083CB,#3E70CA,#2E61BA)",
                            color:'#fff',
                            fontSize:'15pt',
                            padding:'10px',
                        }}>HOME</button>
                    </div>
                    <div className={'content'} style={{
                        width: 'calc(100% - 200px)',
                        height: '100%',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h2 style={{
                            fontWeight: '400',
                            fontSize: "100pt",
                            color: "#4472C4",
                            textShadow: '2pt 2pt 3pt #6E747A89',
                        }}>Welcome {user.user_id}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
