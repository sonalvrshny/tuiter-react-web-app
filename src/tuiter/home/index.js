import React from "react";
import PostHomeList from "../post-home-list/post-home-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <PostHomeList/>
        </>
    );
};
export default HomeComponent;