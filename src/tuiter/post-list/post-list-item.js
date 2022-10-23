import React from "react";

const PostListItem = (
    {
        post = {
            "_id": "123",
            "avatarIcon": "../../images/elon_musk.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "caption": "Amazing show about @inspiration4x mission",
            "image": "../../images/inspiration-4.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
            "comments": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    let cardBody = null;
    if (post.title && post.content) {
        cardBody = (
            <div className="card-body">
                <div className="card-title">{post.title}</div>
                <div className="card-text">
                    <div className="text-secondary">{post.content}</div>
                </div>
            </div>
        );
    };

    return (
        <li className="list-group-item bg-transparent">
            <div className="row">
                <div className="col-1 g-0">
                    <img className="img-fluid rounded-circle" src={`/images/${post.avatarIcon}`}/>
                </div>
                <div className="col-11">
                    <span>
                        <span className="fw-bold">{post.userName} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> @{post.handle}  </span>
                        <span className="text-secondary">
                            <i className="bi bi-dot"></i>{post.time}
                        </span>
                        <i className="bi bi-three-dots float-end"></i>
                    </span>
                    <div>{post.caption}</div>
                    <div className="card border-1 bg-transparent mt-2">
                        <img src={`/images/${post.image}`}
                             className="card-img-top" alt="..."/>
                            {cardBody}
                    </div>

                    <ul className="nav mt-2 nav-fill text-secondary">
                        <li className="nav-item">
                            <i className="bi bi-chat fa-sm me-2"></i>{post.comments}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-repeat fa-sm me-2"></i>{post.retuits}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-heart fa-sm me-2"></i>{post.likes}
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-upload fa-sm me-2"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default PostListItem;