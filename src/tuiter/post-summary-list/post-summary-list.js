import React from "react";
// import postsArray from '../data/posts.json'
import {useSelector} from "react-redux";
import PostSummaryListItem from "./post-summary-list-item";
import TuitItem from "../tuits/tuit-item";

const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map((tuit) => (
                    <div>
                        <TuitItem tuit={tuit} key={tuit._id} />
                    </div>
                ))}
        </ul>
    );
};

export default PostSummaryList;