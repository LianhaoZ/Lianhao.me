import { Suspense, useEffect } from 'react' 
import { Outlet, useLocation } from 'react-router-dom' 

import { Load, Navbar} from '../Components'; 

import Footer from '../Components/footer';

const Layout = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Navbar /> 
      <Suspense fallback={<Load />}>
        <main className='px-7 py-8'>
          <Outlet />
          <div className='prose m-auto'> 
            <Footer />
          </div>
        </main>
      </Suspense>
    </>
  )
}

export default Layout;