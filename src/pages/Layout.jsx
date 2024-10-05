import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import StarsCanvas from "../Components/Stars";
import { Load, Navbar } from "../Components";
import { Preload } from "@react-three/drei";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<Load />}>
        <StarsCanvas />
        <main className="px-7 py-8">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
