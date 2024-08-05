import { BrowserRouter, Routes, Route } from "react-router-dom";

import HostHome from "./pages/HostHome";
import HostAbout from "./pages/HostAbout";

import Remote1Home from "remote1/Remote1Home";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HostHome />} />
				<Route path="/about" element={<HostAbout />} />
				<Route path="/remote1" element={<Remote1Home />} />
			</Routes>
		</BrowserRouter>
	);
}
