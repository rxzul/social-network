import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-male.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="" className={classes.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                <h4>{profile.aboutMe}</h4>
                <p>
                    <b>Профиль vk: </b> {profile.contacts.vk}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;