import { BrowserRouter, Routes, Route } from "react-router-dom";

import HostHome from "./pages/Page1";
import HostAbout from "./pages/Page1";
import Layout from "./components/Layout";

import RemotePage1 from "remote1/Page1";
import RemotePage2 from "remote1/Page2";

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HostHome />} />
					<Route path="/about" element={<HostAbout />} />
					<Route path="/remote1" element={<RemotePage1 />} />
					<Route path="/remote2" element={<RemotePage2 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
