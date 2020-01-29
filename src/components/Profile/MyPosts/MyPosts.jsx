import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    );
}

const AddNewPostReduxForm = reduxForm({form: "addNewPostForm"})(AddNewPostForm);

export default MyPosts;