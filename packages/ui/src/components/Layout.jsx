import "./Layout.css";

export default function Layout({ children, app }) {
	return (
		<>
			<header className="header">Header - {app}</header>
			<main className="main">{children}</main>
			<footer className="footer">Footer &copy;</footer>
		</>
	);
}
