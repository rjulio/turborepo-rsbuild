import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Layout from "./components/Layout";

import RemotePage1 from "remote1/Page1";
import RemotePage2 from "remote1/Page2";

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/host2" element={<Page2 />} />
					<Route path="/remote1-1" element={<RemotePage1 />} />
					<Route path="/remote1-2" element={<RemotePage2 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
