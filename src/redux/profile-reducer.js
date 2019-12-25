const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, how are you?', likeCount: 15},
        {id: '2', message: 'It\'s my first post', likeCount: 20},
        {id: '3', message: 'It\'s my first post', likeCount: 20},
    ],
    newPostText: 'samurai.ru'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case ADD_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addPostTextActionCreator = (text) => ({type: ADD_POST_TEXT, newText: text});

export default profileReducer;