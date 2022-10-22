import React from "react";

const WhoToFollowListItem = (
    {
        who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-icon.png'}
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row flex-nowrap">
                <div className="col-2">
                    <img className="rounded-circle" height={48}  src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-7">
                    <span className="text-dark fw-bold">{who.userName}</span>
                    <i className="fa-solid fa-circle-check"></i>
                    <div className="text-dark">@{who.handle}</div>
                </div>
                <div className="col-3">
                    <div className="row mt-1">
                        <button className="btn btn-primary btn-block rounded-pill float-end">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;