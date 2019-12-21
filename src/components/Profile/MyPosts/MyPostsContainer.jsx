import React from 'react';
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                        let state = store.getState();
                        let addPost = () => {
                            store.dispatch(addPostActionCreator());
                        };

                        let onPostChange = (text) => {
                            let action = addPostTextActionCreator(text);
                            store.dispatch(action);
                        }

                    return ( <MyPosts addPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;