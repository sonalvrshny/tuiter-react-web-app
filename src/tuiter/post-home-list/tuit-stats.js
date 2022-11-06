import React from "react";
import {useDispatch} from "react-redux";
import {likeToggle} from "../reducers/home-tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();

    const toggleLike = (post) => {
        dispatch(likeToggle(post))
    }
    return (
        <ul className="nav mt-2 nav-fill text-secondary">
            <li className="nav-item">
                <i className="bi bi-chat fa-sm me-2"></i>{post.comments}
            </li>
            <li className="nav-item">
                <i className="bi bi-repeat fa-sm me-2"></i>{post.retuits}
            </li>
            <li onClick={() => toggleLike(post)}
                className="nav-item">
                {
                    post.liked &&
                    <i className="bi bi-heart-fill fa-sm me-2" style={{'color': 'red'}}></i>
                }
                {
                    !post.liked &&
                    <i className="bi bi-heart fa-sm me-2"></i>
                }{post.likes}
            </li>
            <li className="nav-item">
                <i className="bi bi-share fa-sm me-2"></i>
            </li>
        </ul>
    )
}

export default TuitStats;