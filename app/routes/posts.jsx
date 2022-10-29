import { Outlet , useLoaderData} from "@remix-run/react";

export const loader = async (request) => {
	const data = await fetch(
		`https://blog-demo1-default-rtdb.firebaseio.com/posts.json`
	)
		.then((response) => response.json())
		.then((json) => json);
	return data;
};

function Posts() {
		const data = useLoaderData();
		const dataArray = Object.values(data);
		// console.log(dataArray);
	return (
		<>
			<Outlet context={dataArray} />
		</>
	);
}

export default Posts;
