import React from "react";
import PostHomeList from "../post-home-list/post-home-list";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuit-list";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;