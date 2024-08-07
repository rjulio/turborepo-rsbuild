import "./Button.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
};

export default function Button({ children, href }) {
	return (
		<Link className="button" to={href}>
			{children}
		</Link>
	);
}
