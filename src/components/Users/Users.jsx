import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-male.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });

        // props.setUsers([
        //     {
        //         id: '1', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
        //         followed: false, fullName: 'Dmitry', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: '2', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
        //         followed: true, fullName: 'Sasha', status: 'I am boss too', location: {city: 'Moscow', country: 'Russia'}
        //     },
        // ]);
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={ user.photos.small != null ? user.photos.small : userPhoto} alt="" className={classes.photo}/>
                        </div>
                        <div>
                            {
                                user.followed ?
                                    <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            {/*<div>{user.location.country}</div>*/}
                            {/*<div>{user.location.city}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

};

export default Users;