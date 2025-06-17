import Navbar from "./Navbar"
import Footer from "@/components/Footer.tsx";
import { Outlet } from 'react-router-dom';
//{ children }: { children: React.ReactNode }
const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />


        <main className="flex-grow">
        <Outlet />
        </main>
        <footer className="w-full h-24 bg-black text-white text-center py-4">
          © 2025 StrikeStat
        </footer>

      </div>



    </>

  )
}

export default Layout