import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
return(`
        <div class="row">
            <div class="col-11">
            <span class="wd-search">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control rounded-5" placeholder="Search Twitter">
            </span>
            </div>
            <div class="col-1"><i class="fa fa-cog fa-lg mt-3" style="color: #2a9fd6"></i></div>
        </div>
        <ul class="nav mb-2 mt-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-lg-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="card">
            <img class="card-img-top" src="../../images/starship.jpg">
            <div class="card-img-overlay card-inverse d-flex flex-column justify-content-end">
                <h4 class="text-white text-bold">
                    SpaceX's Starship
                </h4>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}

export default ExploreComponent