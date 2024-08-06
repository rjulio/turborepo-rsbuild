import Button from "host/Button";
import Layout from "host/Layout";

export default function Home() {
	return (
		<Layout app="Remote 1">
			<h1>Página principal</h1>
			<div className="navigation">
				<Button href="/page1">Page 1</Button>
				<Button href="/page2">Page 2</Button>
			</div>
		</Layout>
	);
}
