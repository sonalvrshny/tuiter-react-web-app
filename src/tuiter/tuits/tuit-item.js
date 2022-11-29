import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/home-tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunk";


const TuitItem = ({
    tuit
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id))
    }

    return (
        <li className="list-group-item bg-transparent">
            <div className="row">
                <div className="col-1 g-0">
                    <img className="img-fluid rounded-circle" src={`/images/${tuit.avatarIcon}`} alt=""/>
                </div>
                <div className="col-11">
                    <span>
                        <span className="fw-bold">{tuit.username} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> @{tuit.handle}  </span>
                        <span className="text-secondary">
                            <i className="bi bi-dot"></i>{tuit.time}
                        </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </span>
                    <div>{tuit.tuit}</div>
                </div>
            </div>
            <ul className="nav mt-2 nav-justified text-secondary">
                <li className="nav-item">
                    <i className="bi bi-chat fa-sm me-2"></i>{tuit.replies}
                </li>
                <li className="nav-item">
                    <i className="bi bi-repeat fa-sm me-2"></i>{tuit.retuits}
                </li>

                <li className="nav-item">
                    {!tuit.liked &&
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                }))} className="bi bi-heart fa-sm me-2"></i>}
                    {tuit.liked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes - 1,
                            liked: false
                        }))} className="bi bi-heart-fill fa-sm me-2" style={{'color': 'red'}}></i>}
                    {tuit.likes}
                </li>

                <li className="nav-item">
                    {!tuit.unliked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            unlikes: tuit.unlikes + 1,
                            unliked: true
                        }))} className="bi bi-hand-thumbs-down fa-sm me-2"></i>}
                    {tuit.unliked &&
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            unlikes: tuit.unlikes - 1,
                            unliked: false
                        }))} className="bi bi-hand-thumbs-down-fill fa-sm me-2" style={{'color': 'blue'}}></i>}
                    {tuit.unlikes}
                </li>

                <li className="nav-item">
                    <i className="bi bi-share fa-sm me-2"></i>
                </li>
            </ul>
        </li>
    );
};

export default TuitItem;