import React from "react";

const PostSummaryListItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla-icon.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <span>
                        <span className="text-secondary">{post.userName}</span>
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="text-secondary"> - {post.time}</span>
                    </span>
                    <div className="fw-bold">{post.topic}</div>
                    <div className="text-secondary">{post.title}
                    </div>
                </div>
                <div className="col-2">
                    <img width={70} className="img-fluid rounded" src={`/images/${post.image}`} alt=""/>
                </div>
            </div>
        </li>
    );
};

export default PostSummaryListItem;