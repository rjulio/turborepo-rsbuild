import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Layout from "./components/Layout";

const Remote1Page1 = lazy(() => import("remote1/Page1"));
const Remote1Page2 = lazy(() => import("remote1/Page2"));

const Remote2Page1 = lazy(() => import("remote2/Page1"));
const Remote2Page2 = lazy(() => import("remote2/Page2"));

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Page1 />} />
					<Route path="/host2" element={<Page2 />} />
					<Route
						path="/remote1-1"
						element={
							<Suspense fallback={"...loading"}>
								<Remote1Page1 />
							</Suspense>
						}
					/>
					<Route
						path="/remote1-2"
						element={
							<Suspense fallback={"...loading"}>
								<Remote1Page2 />
							</Suspense>
						}
					/>
					<Route
						path="/remote2-1"
						element={
							<Suspense fallback={"...loading"}>
								<Remote2Page1 />
							</Suspense>
						}
					/>
					<Route
						path="/remote2-2"
						element={
							<Suspense fallback={"...loading"}>
								<Remote2Page2 />
							</Suspense>
						}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
