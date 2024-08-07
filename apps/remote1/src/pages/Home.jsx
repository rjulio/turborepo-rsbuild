import { Button, Layout } from "@repo/ui/index";

export default function Home() {
	return (
		<Layout app="Remote 1">
			<h1>Página principal</h1>
			<div className="navigation">
				<Button href="/page1">Page 1</Button>
				<Button href="/page2">Page 2</Button>

				<hr />
				<h3>Remote 2</h3>
				<Button href="/remote2/page1">Page 1</Button>
				<Button href="/remote2/page2">Page 2</Button>
			</div>
		</Layout>
	);
}
