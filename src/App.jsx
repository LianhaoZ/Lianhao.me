import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './pages/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const Blog = lazy(() => import('./pages/blog'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/blog' element={<Blog />} />
            {/* <Route path='*' element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
