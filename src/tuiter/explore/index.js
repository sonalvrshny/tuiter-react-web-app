import React from "react";
import PostSummaryList from "../post-summary-list/post-summary-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute wd-nudge-up position-relative"></i>
                </div>
                <div className="col-1"><i className="bi bi-gear-fill text-primary fs-4 mt-3"></i></div>
            </div>
            <ul className="nav mb-2 mt-2 nav-tabs">
                <li className="nav-item">
                    <a href = "/" className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a href = "/" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href = "/" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href = "/" className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item d-none d-lg-block">
                    <a href = "/" className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="card">
                <img className="card-img-top" src="/images/starship.jpg" alt=""/>
                <div className="card-img-overlay card-inverse d-flex flex-column justify-content-end">
                    <h4 className="text-white text-bold">
                        SpaceX's Starship
                    </h4>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;