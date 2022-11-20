import React from "react";
import postsArray from '../data/posts-home.json'
import {useSelector} from "react-redux";
import PostHomeListItem from "./post-home-list-item";

const PostHomeList = () => {
    const postsArray = useSelector(state => state.homeTuits)

    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostHomeListItem
                        key={post._id} post={post}/>)
            }
        </ul>

    );
};

export default PostHomeList;