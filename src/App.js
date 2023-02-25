import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {UserContext, UserContextProvider} from "./context/user.context";
import Welcome from "./pages/welcome";
import Login from "./pages/login";

function App() {
    return (
        <UserContextProvider>
            <UserContext.Consumer>
                {({user}) => {
                    console.log(user)
                    return (
                        <BrowserRouter>
                            <Routes>
                                <Route path="/">
                                    <Route index element={!user.user_id ? <Navigate to={"login"}/> : <Welcome/>}/>
                                    <Route path={'login'} element={user.user_id ? <Navigate to={"/"}/> : <Login/>}/>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    )
                }}
            </UserContext.Consumer>
        </UserContextProvider>
    );
}

export default App;
