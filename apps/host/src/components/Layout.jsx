import "./Layout.css";
import Nav from "./Nav";

export default function Layout({ children }) {
	return (
		<>
			<header className="header">Header...</header>
			<main className="main">
				<Nav />
				<div className="container">{children}</div>
			</main>
			<footer className="footer">Footer &copy;</footer>
		</>
	);
}
