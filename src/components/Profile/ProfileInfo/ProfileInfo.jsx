import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-male.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="" className={classes.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected} />}

                {editMode
                    ? <ProfileDataForm onSubmit={onSubmit} profile={profile} initialValues={profile}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                <h4>{profile.aboutMe}</h4>
                <p>
                    <b>Профиль vk: </b> {profile.contacts.vk}
                </p>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <b>Full name</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            { profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}  contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;