import React from "react";
// import postsArray from '../data/posts.json'
import {useSelector} from "react-redux";
import PostSummaryListItem from "./post-summary-list-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuitsData)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryListItem
                        key={post._id} post={post}/>)
            }
        </ul>
    );
};

export default PostSummaryList;