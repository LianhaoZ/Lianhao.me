import { Suspense, useEffect } from 'react' 
import { Outlet, useLocation } from 'react-router-dom' 

import { Load, Navbar} from '../Components';  

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
        </main>
      </Suspense>
    </>
  )
}

export default Layout;