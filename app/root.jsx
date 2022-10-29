import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import globalStylesheetUrl from "./global-styles.css";

export const meta = () => {
	return {
		charset: "utf-8",
		title: "Remix Blog",
		viewport: "width=device-width,initial-scale=1",
	};
};

export const links = () => {
	return [{ rel: "stylesheet", href: globalStylesheetUrl }];
};

export const Layout = (props) => {
	return (
		<>
			<nav className="navbar">
				<Link to="/" className="logo">
					Remix
				</Link>
				<ul className="nav">
					<li>
						<Link to="/posts" className="">
							Posts
						</Link>
					</li>
				</ul>
			</nav>
			<div className="container">{props.children}</div>
		</>
	);
};



export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Layout>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</Layout>
			</body>
		</html>
	);
}
