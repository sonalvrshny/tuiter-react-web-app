const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">${post.topic}</div>
                    <span>
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="text-secondary">${post.time}</span>
                    </span>
                    <div class="fw-bold">${post.title}
                    </div>
                </div>
                <div class="col-2">
                    <img class="img-fluid rounded" src=${post.image}>
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryListItem