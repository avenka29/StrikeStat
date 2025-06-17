import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
//{ children }: { children: React.ReactNode }
const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />


        <main className="flex-grow p-2">
          <Outlet />
        </main>
        <footer className="w-full bg-black text-white text-center py-4">
          © 2025 StrikeStat
        </footer>

      </div>



    </>

  )
}

export default Layout