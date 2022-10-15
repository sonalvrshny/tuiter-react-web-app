const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-house"></i></div>
                    <div class="col d-none d-lg-block">Home</div>
                </div>
            </a>
            <a class="list-group-item active" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-hashtag fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Explore</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-bell fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Notifications</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-envelope fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Messages</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-bookmark fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Bookmarks</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-list fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Lists</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-user fa-1x"></i></div>
                    <div class="col d-none d-lg-block">Profile</div>
                </div>
            </a>
            <a class="list-group-item" href="/">
                <div class="row">
                    <div class="col-1"><i class="fa fa-ellipsis-h fa-1x"></i></div>
                    <div class="col d-none d-lg-block">More</div>
                </div>
            </a>
        </div>
        <div class="d-grid mt-2">
         <a href="tweet.html"class="btn btn-primary btn-block rounded-pill">
            Tweet
         </a>
        </div>

    `);
}

export default NavigationSidebar;
