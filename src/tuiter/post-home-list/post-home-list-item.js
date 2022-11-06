import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/home-tuits-reducer";


const PostHomeListItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }
    return (
        <li className="list-group-item bg-transparent">
            <div className="row">
                <div className="col-1 g-0">
                    <img className="img-fluid rounded-circle" src={`/images/${post.avatarIcon}`} alt=""/>
                </div>
                <div className="col-11">
                    <span>
                        <span className="fw-bold">{post.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> {post.handle}  </span>
                        <span className="text-secondary">
                            <i className="bi bi-dot"></i>{post.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i>
                    </span>
                    <div>{post.tuit}</div>
                </div>
            </div>
            <TuitStats post={post}/>
        </li>
    );
};

export default PostHomeListItem;