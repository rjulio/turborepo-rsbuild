import "./Page1.css";
import Button from "../components/Button";

export default function Page1() {
	return (
		<div className="page1">
			<h1>Host Page 1</h1>

			<div className="navigation">
				<Button href="/">Host 1</Button>
				<Button href="/host2">Host 2</Button>
				<Button href="/remote1-2">Remote 1-1</Button>
				<Button href="/remote1-2">Remote 1-2</Button>
			</div>
		</div>
	);
}
