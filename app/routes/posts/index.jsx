import { Link, useOutletContext } from "@remix-run/react";



const PostsItems = () => {
	const data = useOutletContext();
	return (
		<>
			<div className="page-header">
				<h1>Posts</h1>
				<Link to="/posts/new" className="btn">
					New Post
				</Link>
			</div>
			<ul className="posts-list">
				{data.map((post) => (
					<li key={post.id}>
						<Link to={"/posts/" + post.id}>
							<h3>{post.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
export default PostsItems;
