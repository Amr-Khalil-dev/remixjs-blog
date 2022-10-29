import { useParams, useOutletContext, useLoaderData } from "@remix-run/react";

export const loader = async (request, params) => {
	const data = await fetch()
	// `https://blog-demo1-default-rtdb.firebaseio.com/posts/${params.postid}.json`
	// `https://blog-demo1-default-rtdb.firebaseio.com/posts/-ND-uWBNpRp5l07s5oeg.json`
		.then((response) => response.json())
		.then((json) => json);
	return data;
};

// export const meta = (ctx) => {
// 	const data = ctx.data;
// 	return {
// 		charset: "utf-8",
// 		title: data.title,
// 		viewport: "width=device-width,initial-scale=1",
// 	};
// };

const Post = () => {
	const data = useLoaderData();
	console.log(data);
	// const data = useOutletContext();
	// const paramsid = useParams().postid;
	// console.log(paramsid);
	// const post = data.find((obj) => {
	// 	return obj.id == paramsid;
	// });
	// document.title = post.title
	return (
		<>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		</>
	);
};
export default Post;
