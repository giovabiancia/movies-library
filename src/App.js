import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import "./index.css";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MovieListPage />}></Route>
            <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
