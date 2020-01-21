import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderComponent/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer /> }/>
                    {/*? - означает, что параметр не обязательный*/}
                    <Route path="/profile/:userId?" render={ () => <ProfileContainer/> }/>
                    <Route path="/users" render={() => <UsersContainer /> } />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/login" component={LoginPage} />

                </div>
            </div>
    );
}

export default App;