// /src/components/Footer.tsx
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        <div className="flex space-x-4">
          
          <a href="#" aria-label="GitHub" className="hover:text-purple-500 transition">
            <FaGithub size={20} />
          </a>
        </div>

        <small>© {new Date().getFullYear()} Strike Stat</small>
      </div>
    </footer>
  );
}
