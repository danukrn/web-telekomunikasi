import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="bg-blue-800 text-white flex items-center py-4 px-8">
        <nav className="flex items-center w-full">
          {/* Left Section: Logo and Title */}
          <div className="flex items-center space-x-2">
            <img 
              src="/telkom.ico" // Adjust path if needed
              alt="logo"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-lg font-bold text-yellow-400">Teknik Telekomunikasi</h1>
              <p className="text-sm">Institut Teknologi Sumatera</p>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="ml-auto font-semibold flex space-x-4">
            <a href="#profile" className="">Profil</a>
            <a href="#academic" className="">Akademik</a>
            <a href="#internship" className="">Kerja Praktek</a>
            <a href="#student-services" className="">Layanan Mahasiswa</a>
            <a href="#final-project" className="">Tugas Akhir</a>
          </div>
        </nav>
      </header>


      {/* Hero Section */}
      <section className="relative">
        <img
          src="/hehe"
          alt="Telecom Tower"
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex justify-around flex-grow bg-gray-100 py-8 px-4">
        <div className="bg-white w-full max-w-xs p-4 shadow-lg">
          <h2 className="bg-yellow-500 text-white px-2 py-1 font-semibold text-lg">Topik</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus
            gravida sodales. Morbi egestas quam ante, vitae molestie massa lobortis et...
          </p>
        </div>
        <div className="bg-white w-full max-w-xs p-4 shadow-lg">
          <h2 className="bg-yellow-500 text-white px-2 py-1 font-semibold text-lg">Topik</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus
            gravida sodales. Morbi egestas quam ante, vitae molestie massa lobortis et...
          </p>
        </div>
        <div className="bg-white w-full max-w-xs p-4 shadow-lg">
          <h2 className="bg-yellow-500 text-white px-2 py-1 font-semibold text-lg">Topik</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus
            gravida sodales. Morbi egestas quam ante, vitae molestie massa lobortis et...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white">
        <div className="bg-yellow-500 h-1"></div> {/* Yellow line */}
        <div className="flex flex-col items-center py-4 px-8">
          <p className="text-sm">&copy; 2024 Teknik Telekomunikasi, Institut Teknologi Sumatera</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
