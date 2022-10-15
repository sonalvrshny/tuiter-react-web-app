const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row flex-nowrap">
                <div class="col-2">
                    <img class="img-fluid rounded-circle" src=${who.avatarIcon}>
                </div>
                <div class="col-7">
                    <span class="text-dark">${who.userName}</span>
                    <i class="fa-solid fa-circle-check"></i>
                    <div class="text-dark">@${who.handle}</div>
                </div>
                <div class="col-3">
                    <div class="row mt-1">
                        <button class="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;