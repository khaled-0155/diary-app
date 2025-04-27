import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Post from "./pages/Post";
import Diary from "./pages/Diary";
import DiaryCategoryPage from "./pages/DiaryCategoryPage";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Credits from "./pages/Credits";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Credits" element={<Credits />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/diary/nature-observations"
            element={<DiaryCategoryPage category="Nature Observations" />}
          />
          <Route
            path="/diary/animal-sightings"
            element={<DiaryCategoryPage category="Animal Sightings" />}
          />
          <Route
            path="/diary/water-habitats"
            element={<DiaryCategoryPage category="Water Habitats" />}
          />
          <Route
            path="/diary/birdwatching"
            element={<DiaryCategoryPage category="Birdwatching" />}
          />
          <Route
            path="/diary/forest-and-woodland"
            element={<DiaryCategoryPage category="Forest and Woodland" />}
          />
          <Route
            path="/diary/wildlife-conservation"
            element={<DiaryCategoryPage category="Wildlife Conservation" />}
          />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
