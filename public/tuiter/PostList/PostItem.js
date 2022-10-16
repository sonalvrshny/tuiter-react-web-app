const PostItem = (post) => {
    let cardBody =``;
    if (post.title && post.content) {
        cardBody = `
            <div class="card-body">
                <div class="card-title">${post.title}</div>
                <div class="card-text">
                    <div class="text-secondary">${post.content}</div>
                    <div class="text-secondary"><i class="fa fa-link fa-sm me-2"></i>${post.link}</div>
                </div>
            </div>
        `
    };

    return(`
        <li class="list-group-item bg-transparent">
            <div class="row">
                <div class="col-1 g-0">
                    <img class="img-fluid rounded-circle" src=${post.avatarIcon}>
                </div>
                <div class="col-11">
                    <span>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary">@${post.handle} - </span>
                        <span class="text-secondary">${post.time}</span>
                    </span>
                    <div>${post.caption}</div>
                    <div class="card border-secondary bg-transparent">
                      <img src=${post.image}
                           class="card-img-top" alt="...">
                      ${cardBody}
                    </div>
                    
                    <ul class="nav mt-2 nav-fill text-secondary">
                        <li class="nav-item">
                            <i class="fa fa-comment fa-sm me-2"></i>${post.comments}
                        </li>
                        <li class="nav-item">
                            <i class="fa fa-retweet fa-sm me-2"></i>${post.retuits}
                        </li>
                        <li class="nav-item">
                            <i class="fa fa-heart fa-sm me-2"></i>${post.likes}
                        </li>
                        <li class="nav-item">
                            <i class="fa fa-upload fa-sm me-2"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    `)
}

export default PostItem