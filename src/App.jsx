import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/Homepage'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const Blog = lazy(() => import('./pages/blog'));
const NotFound = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
