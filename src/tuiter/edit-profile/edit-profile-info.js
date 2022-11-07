import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './edit-profile.css';
import {updateProfile} from "../reducers/profile-reducer";


const EditProfileInfo = () => {
    const profileArray = useSelector(state => state.profileInfo);
    const dispatch = useDispatch();
    const [editDOBBtn, setEditDOBBtn] = useState(false);
    const [profileData, setProfileData] = useState({
        name: profileArray.name,
        handle: profileArray.handle,
        profilePicture: profileArray.profilePicture,
        bannerPicture: profileArray.bannerPicture,
        bio: profileArray.bio,
        website: profileArray.website,
        location: profileArray.location,
        dateOfBirth: profileArray.dateOfBirth,
        dateJoined: profileArray.dateJoined,
        tuits: profileArray.tuits,
        followingCount: profileArray.followingCount,
        followersCount: profileArray.followersCount
    });
    const changeProfileField = event => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value
        });
    };

    const updateProfileData = () => {
        dispatch(updateProfile(profileData));
    };

    const openDOBChange = () => {
        setEditDOBBtn(!editDOBBtn);
    }

    return (
            <>
                <div className="row">
                    <div className="col-1 mt-1">
                        <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                        </Link>
                    </div>
                    <div className="col-9 mt-1">
                        <div className="fw-bold">
                            Edit Profile
                        </div>
                    </div>
                    <div className="col-2 float-end">
                        <Link to="/tuiter/profile">
                            <button
                                className="btn btn-sm btn-dark rounded-pill text-white"
                                onClick={updateProfileData}>
                                Save
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="mt-2">
                    <img src={profileData.bannerPicture} className="wd-cover-image" alt=""></img>
                </div>
                <div>
                    <img src={profileData.profilePicture} className="wd-profile-image rounded-circle ms-3" alt=""></img>
                </div>
                <div className="wd-profile-details ms-3">
                    <form id="profile-fields">
                        <div>
                            <label className="ms-2 text-secondary wd-edit-field-labels" htmlFor="name">Name</label>
                            <input id="name"
                                   name="name"
                                   defaultValue={profileData.name}
                                    className="form-control mt-4 wd-edit-field-boxes"
                                   onChange={changeProfileField}  style={{ padding: '15px 5px' }}
                            />
                        </div>
                        <div>
                            <label className="ms-2 text-secondary wd-edit-field-labels" htmlFor="bio">Bio</label>
                            <input id="bio"
                                   name="bio"
                                   defaultValue={profileData.bio}
                                   className="form-control mt-4"
                                   onChange={changeProfileField} style={{ padding: '15px 5px' }}
                            />
                        </div>
                        <div>
                            <label className="ms-2 text-secondary wd-edit-field-labels" htmlFor="location">Location</label>
                            <input id="location"
                                   name="location"
                                   defaultValue={profileData.location}
                                   className="form-control mt-4"
                                   onChange={changeProfileField} style={{ padding: '15px 5px' }}
                            />
                        </div>
                        <div>
                            <label className="ms-2 text-secondary wd-edit-field-labels" htmlFor="website">Website</label>
                            <input id="website"
                                   name="website"
                                   defaultValue={profileData.website}
                                   className="form-control mt-4"
                                   onChange={changeProfileField} style={{ padding: '15px 5px' }}
                            />
                        </div>

                        <div className="mt-4">
                            {editDOBBtn ?
                                <>
                                    <label htmlFor="dateOfBirth">
                                        Birth date
                                    </label>
                                    <input type="date"
                                           id="dateOfBirth"
                                           name="dateOfBirth"
                                           className="form-control"
                                           defaultValue={profileData.dateOfBirth}
                                            onChange={changeProfileField}/>
                                    <label className="text-primary" onClick={openDOBChange}>Done</label>
                                </>
                                :
                                <span>
                                <label htmlFor="dateOfBirth">
                                Birth date
                                </label>
                                    <i className="bi bi-dot"></i>
                                <label className="text-primary" onClick={openDOBChange}>Edit</label>
                                </span>
                            }
                            <div>{profileData.dateOfBirth}</div>
                        </div>
                    </form>
                    <div className="mt-2">
                    <span className="mr-2" >Switch to professional </span>
                        <i className="bi bi-chevron-right float-end"></i>
                    </div>
                </div>
            </>
        )
}

export default EditProfileInfo;
