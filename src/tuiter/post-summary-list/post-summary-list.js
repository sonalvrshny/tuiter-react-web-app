import React from "react";
import postsArray from './posts.json'
import PostSummaryListItem from "./post-summary-list-item";

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

export default PostSummaryList;