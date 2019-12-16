const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likeCount: 15},
                {id: '2', message: 'It\'s my first post', likeCount: 20},
                {id: '3', message: 'It\'s my first post', likeCount: 20},
            ],
            newPostText: 'samurai.ru'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'}
            ],
            newMessageBody: ''
        }
    },
    getState() {
      debugger;
      return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addPostTextActionCreator = (text) => ({type: ADD_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_MESSAGE_BODY, body: body});

export default store;