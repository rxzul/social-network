import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
             return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderComponent/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    {/*? - означает, что параметр не обязательный*/}
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={LoginPage}/>

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiApp;