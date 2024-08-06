import { Button, Layout } from "@repo/ui/index";

export default function Home() {
	return (
		<Layout app="Remote 2">
			<h1>Página principal</h1>
			<div className="navigation">
				<Button href="/page1">Page 1</Button>
				<Button href="/page2">Page 2</Button>
			</div>
		</Layout>
	);
}
