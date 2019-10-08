import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likeCount} likes</span>
            </div>
        </div>
    )
}

export default Post;