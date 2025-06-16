import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex-1">
      </main>

    <Footer />

    </div>
  );
}

export default App;
