import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        { id: '1', message: 'Hi, how are you?', likeCount: 15 },
        { id: '2', message: 'It\'s my first post', likeCount: 20 },
        { id: '3', message: 'It\'s my first post', likeCount: 20 },
    ]

    let posts = postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;