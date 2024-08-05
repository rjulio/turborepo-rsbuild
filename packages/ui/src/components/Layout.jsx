export default function Layout({ chilren }) {
	return (
		<>
			<header>Header</header>
			<div className="content">{children}</div>
			<div className="footer">Footer</div>
		</>
	);
}
