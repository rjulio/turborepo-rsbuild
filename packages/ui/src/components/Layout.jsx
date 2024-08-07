import PropTypes from "prop-types";
import "./Layout.css";

Layout.propTypes = {
	children: PropTypes.node,
	app: PropTypes.string,
};

export default function Layout({ children, app }) {
	return (
		<>
			<header className="header">Header - {app}</header>
			<main className="main">{children}</main>
			<footer className="footer">Footer &copy;</footer>
		</>
	);
}
