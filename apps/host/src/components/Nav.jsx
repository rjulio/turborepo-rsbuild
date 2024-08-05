import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">Pagina Host 1</Link>
				</li>
				<li>
					<Link to="/about">Pagina Host 2</Link>
				</li>
				<li>
					<Link to="/remote1">Pagina remota 1</Link>
				</li>
				<li>
					<Link to="/remote2">Pagina remota 2</Link>
				</li>
			</ul>
		</nav>
	);
}
