let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likeCount: 15},
            {id: '2', message: 'It\'s my first post', likeCount: 20},
            {id: '3', message: 'It\'s my first post', likeCount: 20},
        ]
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
};

export default state;