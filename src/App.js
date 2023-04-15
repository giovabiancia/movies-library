import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MovieListPage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
