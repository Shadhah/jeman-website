import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Jeman Holdings Ltd</h3>
          <p className="text-gray-400">
            Empowering Africa’s digital and infrastructure future through 
            engineering, sustainability, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:info@jemanholdings.com" className="hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Jeman Holdings Ltd. All rights reserved.
      </div>
    </footer>
  );
}
