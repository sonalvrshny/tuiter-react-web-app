import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const NavigationSidebar = () => {
        const {pathname} = useLocation();
        const paths = pathname.split('/')
        const active = paths[2];

        return (
            <div className="list-group">
                <a href="/tuiter/home" className="list-group-item">Tuiter</a>
                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-house-fill position-relative"></i></div>
                        <div className="col d-none d-lg-block">Home</div>
                    </div>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' || active === '' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-hash position-relative"></i></div>
                        <div className="col d-none d-lg-block">Explore</div>
                    </div>
                </Link>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
                <a href= "/" className={`list-group-item ${active === 'notifications' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-bell-fill position-relative"></i></div>
                        <div className="col d-none d-lg-block">Notifications</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'messages' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-envelope-fill position-relative"></i></div>
                        <div className="col d-none d-lg-block">Messages</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'bookmarks' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-bookmark-fill position-relative"></i></div>
                        <div className="col d-none d-lg-block">Bookmarks</div>
                    </div>
                </a>
                <a href="/" className={`list-group-item ${active === 'lists' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-list position-relative"></i></div>
                        <div className="col d-none d-lg-block">Lists</div>
                    </div>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-person-fill position-relative"></i></div>
                        <div className="col d-none d-lg-block">Profile</div>
                    </div>
                </Link>
                <a href="/" className={`list-group-item ${active === 'more' ? 'active':''}`}>
                    <div className="row">
                        <div className="col-1"><i className="bi bi-three-dots position-relative"></i></div>
                        <div className="col d-none d-lg-block">More</div>
                    </div>
                </a>
            </div>
        )
    };

export default NavigationSidebar;