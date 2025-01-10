import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>

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

    </div>
  );
}
