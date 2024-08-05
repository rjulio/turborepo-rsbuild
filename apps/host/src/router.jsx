import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Layout from "./components/Layout";

import Remote1Page1 from "remote1/Page1";
import Remote1Page2 from "remote1/Page2";

import Remote2Page1 from "remote2/Page1";
import Remote2Page2 from "remote2/Page2";

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/host2" element={<Page2 />} />
					<Route path="/remote1-1" element={<Remote1Page1 />} />
					<Route path="/remote1-2" element={<Remote1Page2 />} />
					<Route path="/remote2-1" element={<Remote2Page1 />} />
					<Route path="/remote2-2" element={<Remote2Page2 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
