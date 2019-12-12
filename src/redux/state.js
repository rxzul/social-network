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
            ]
        }
    },
    getState() {
      debugger;
      return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;