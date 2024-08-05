import { BrowserRouter, Routes, Route } from "react-router-dom";
import Remote1Home from "./pages/Remote1Home";
import Remote1About from "./pages/Remote1About";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Remote1Home />} />
				<Route path="/about1" element={<Remote1About />} />
			</Routes>
		</BrowserRouter>
	);
}
