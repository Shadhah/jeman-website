import "./globals.css";
import Link from "next/link";
import ChatWidget from "../components/ChatWidget";

export const metadata = {
  title: "Jeman Holdings",
  description: "Official Website - Jeman Holdings Limited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-indigo-600">Jeman Holdings</h1>
            <ul className="flex space-x-6 font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main className="container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center p-4 mt-12">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Jeman Holdings. All rights reserved.
          </p>
        </footer>
         <ChatWidget /> {/* 👈 Sticky AI Chat */}
      </body>
    </html>
  );
}
