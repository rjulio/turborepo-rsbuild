import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

import { Loading } from "@repo/ui/index";

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
					path="/remote2/page1"
					element={
						<Suspense fallback={<Loading />}>
							<R2Page1 />
						</Suspense>
					}
				/>

				<Route
					path="/remote2/page2"
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
