import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "pages/RootLayout/RootLayout";
import NotFound from "pages/NotFound/NotFound";
import HomePage from "pages/Home/HomePage";
import StreamerPage from "pages/Streamer/StreamerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="streamers">
            <Route path=":streamerId" element={<StreamerPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
