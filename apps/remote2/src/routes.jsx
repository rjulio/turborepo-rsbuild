import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </BrowserRouter>
    );
}
