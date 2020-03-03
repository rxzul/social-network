import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form action="" onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input )}
            {createField("Password", "password", [required], Input, {type: 'password'} )}
            {createField(null, "rememberMe", [], Input, {type: 'checkbox'},  "Remember me")}
            { error && <div className={styles.formSummaryError}>
                {error}
            </div> }
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField("Symbols for image", "captcha", [required], Input)}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, {login})(Login);