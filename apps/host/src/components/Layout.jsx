import "./Layout.css";

export default function Layout({ children }) {
	return (
		<>
			<header className="header">Header</header>
			<main className="main">{children}</main>
			<footer className="footer">Footer &copy;</footer>
		</>
	);
}
