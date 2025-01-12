import localFont from "next/font/local";
import Link from 'next/link'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Telekomunikasi",
  description: "create by danukrn & ryuumaks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="bg-blue-800 text-white flex items-center py-4 px-8 ">
          <nav className="flex items-center w-full">
            {/* Left Section: Logo and Title */}
            <div className="flex items-center space-x-2">
              <img
                src="/images/telkom.ico" // Adjust path if needed
                alt="logo"
                className="w-11 h-10"
              />
              <div>
                <Link href="/" className="">
                  <h1 className="text-lg font-bold text-yellow-400">Teknik Telekomunikasi</h1>
                </Link>
                <p className="text-sm">Institut Teknologi Sumatera</p>
              </div>
            </div>

            {/* Right Section: Navigation Links */}
            <div className="ml-auto font-semibold flex space-x-4">
              <Link href="/profile" className="">Profil</Link>
              <Link href="/academic" className="">Akademik</Link>
              <Link href="#internship" className="">Kerja Praktek</Link>
              <Link href="#student-services" className="">Layanan Mahasiswa</Link>
              <Link href="#final-project" className="">Tugas Akhir</Link>
            </div>
          </nav>
        </header>
        <div className="bg-yellow-500 h-1"></div> {/* Yellow line */}
        {children}
        {/* Footer */}
        <footer className="bg-blue-800 text-white">
          <div className="bg-yellow-500 h-1"></div> {/* Yellow line */}
          <div className="flex flex-col items-center py-4 px-8">
            <p className="text-sm">&copy; 2024 Teknik Telekomunikasi, Institut Teknologi Sumatera</p>
            <p className="text-sm">All rights reserved.</p>
          </div>
        </footer>
      </body>

    </html>
  );
}
