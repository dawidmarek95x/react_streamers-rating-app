import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "pages/RootLayout/RootLayout";

const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
