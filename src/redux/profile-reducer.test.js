import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likeCount: 15},
        {id: '2', message: 'It\'s my first post', likeCount: 20},
        {id: '3', message: 'It\'s my first post', likeCount: 20},
    ]
};

it('length of posts should be incremented ', () => {
    let action = addPostActionCreator('it.net')
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct ', () => {
    let action = addPostActionCreator('it.net')
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe("it.net");
});

it('after deleting length of messages should be decrement ', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(10000)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});