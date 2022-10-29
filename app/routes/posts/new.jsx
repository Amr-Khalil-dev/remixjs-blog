import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import axios from "axios";

export function ErrorBoundary() {
	return (
		<div className="page-header">
			error
			<Link to="/posts/new" className="btn btn-reverse">
				Back
			</Link>
		</div>
	);
}

export const action = async ({ request }) => {
	const form = await request.formData();
	const id = new Date().valueOf();
	const title = form.get("title");
	const body = form.get("body");
	const post = { id, title, body };
	if (title === "") {
		throw Error;
	} else {
		axios
			.post("https://blog-demo1-default-rtdb.firebaseio.com/posts.json", post)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				throw Error;
			});
	}
	return redirect("/posts");
};

const newpost = () => {
	return (
		<>
			<div className="page-header">
				<h1>New Post</h1>
				<Link to="/posts" className="btn btn-reverse">
					Back
				</Link>
			</div>
			<div className="form-control">
				<form method="POST">
					<div className="page-content">
						<label>Title</label>
						<input type="text" name="title" id="title" />
					</div>
					<div className="page-content">
						<label>body</label>
						<textarea type="text" name="body" id="body" />
						<button type="submit" className="btn btn-block">
							Add Post
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default newpost;
