import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Is Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          </Route>

          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </>
  );
};
