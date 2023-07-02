import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "pages/RootLayout/RootLayout";
import NotFound from "pages/NotFound/NotFound";
import Home from "pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
