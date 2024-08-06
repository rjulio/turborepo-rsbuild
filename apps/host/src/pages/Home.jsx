import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout app="Host">
			<h1>Página principal</h1>

			<div className="navigation">
				<h3>Host App</h3>
				<Button href="/page1">Page 1</Button>
				<Button href="/page2">Page 2</Button>
				<hr />
				<h3>Remote 1</h3>
				<Button href="/remote1-2">Page 1 - remote 1</Button>
				<Button href="/remote1-2">Page 2 - remote 1</Button>
				<hr />
				<h3>Remote 2</h3>
				<Button href="/remote2-1">Page 1 - remote 2</Button>
				<Button href="/remote2-2">Page 2 - remote 2</Button>
			</div>
		</Layout>
	);
}
