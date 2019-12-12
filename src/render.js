import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, addPostText} from "./redux/state";
import React from "react";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addPostText={addPostText}/>
        </BrowserRouter>, document.getElementById('root'));
};