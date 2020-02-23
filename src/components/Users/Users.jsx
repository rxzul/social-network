import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, followingInProgress, unfollow, follow, ...props}) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage}/>
            {
                users.map(user => <User key={user.id} user={user} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow} />)
            }
        </div>
    )
}

export default Users;