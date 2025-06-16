import Footer from "./Footer"
import Navbar from "./Navbar"
//{ children }: { children: React.ReactNode }
const Layout = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Footer />
    </div>
  )
}

export default Layout