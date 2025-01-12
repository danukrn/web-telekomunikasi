'use client'
import Image from "next/image";
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {

  const imageList = ["gerbang-itera.jpg", "gerbang-itera.jpg", "gerbang-itera.jpg"]

  return (
    <div className="grid">

      {/* Hero Section */}
      <section>

        <Carousel infiniteLoop={true} swipeable={true} swipeScrollTolerance={5} interval={5000} autoPlay={true} showThumbs={false}>
          {imageList.map((value, index) => (
            <div key={index} className="relative w-full h-72">
              <Image
                src={`/images/${value}`}
                alt="Telecom Tower"
                fill={true}
                className="object-cover"
              />
            </div>
          ))}
        </Carousel>

      </section>

      {/* Content Section */}
      <section className="grid grid-cols-3 justify-around bg-gray-100 py-8 px-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="m-4 shadow-sm border px-0 pt-0 overflow-hidden"
          >

            <div className="relative w-full h-44">
              <Image
                src="/images/nsatu2.jpg"
                alt="Telecom Tower"
                fill={true}
                className="object-cover"
              />
              <section className="bg-yellow-500 w-24 skew-x-[-30deg] overflow-hidden relative -left-2 top-0" >
                <h4 className="text-lg font-semibold pl-2 text-white ml-3 skew-x-[30deg]" >Berita</h4>
              </section>
            </div>

            <p className="text-gray-700 text-sm mt-2 px-2">
              dolor, id blandit elit nunc semper arcu. Vivamus id iaculis elit, vitae pretium odio. Pellentesque non
              bibendum elit. Morbi porta hendrerit neque id euismod. Integer venenatis pretium mi, et lobortis arcu
              placerat id.
            </p>
          </div>
        ))}
      </section>

    </div>
  );
}
