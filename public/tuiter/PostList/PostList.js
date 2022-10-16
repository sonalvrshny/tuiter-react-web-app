import posts from "../PostList/posts.js";
import PostItem from "../PostList/PostItem.js";

const PostList = () => {
    return(`
        <ul class="list-group">
            ${
        posts.map(post => {
            return(PostItem(post))
        }).join('')
    }
        </ul>
    `)
}

export default PostList