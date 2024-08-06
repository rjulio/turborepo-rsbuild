import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Loading from "./components/Loading";
// host
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
// remote 1
const R1Page1 = lazy(() => import("remote1/Page1"));
const R1Page2 = lazy(() => import("remote1/Page2"));
// remote 2
const R2Page1 = lazy(() => import("remote2/Page1"));
const R2Page2 = lazy(() => import("remote2/Page2"));

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page1" element={<Page1 />} />
				<Route path="/page2" element={<Page2 />} />
				<Route
					path="/remote1-1"
					element={
						<Suspense fallback={<Loading />}>
							<R1Page1 />
						</Suspense>
					}
				/>
				<Route
					path="/remote1-2"
					element={
						<Suspense fallback={<Loading />}>
							<R1Page2 />
						</Suspense>
					}
				/>
				<Route
					path="/remote2-1"
					element={
						<Suspense fallback={<Loading />}>
							<R2Page1 />
						</Suspense>
					}
				/>
				<Route
					path="/remote2-2"
					element={
						<Suspense fallback={<Loading />}>
							<R2Page2 />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
