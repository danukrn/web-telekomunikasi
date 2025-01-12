import Link from 'next/link'
import Image from "next/image"

export default function Profile() {
    return (
        <div className="px-6 py-8">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Content */}
                <div className="md:col-span-2 bg-white p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Akademik</h2>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus gravida sodales.
                        Morbi egestas quam ante, vitae molestie massa lobortis et. Quisque varius, orci sit amet malesuada
                        venenatis, dolor orci pharetra ligula, sit amet ultrices ligula felis eu nunc. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Fusce sed aliquam leo, id bibendum lorem. Ut lobortis dui in
                        magna fermentum gravida. Maecenas tempus, velit quis vestibulum interdum, libero augue gravida
                        dolor, id blandit elit nunc semper arcu. Vivamus id iaculis elit, vitae pretium odio. Pellentesque non
                        bibendum elit. Morbi porta hendrerit neque id euismod. Integer venenatis pretium mi, et lobortis arcu
                        placerat id.
                    </p>
                    <div className="flex mb-6">
                        <div className="relative w-48 h-48 shrink-0 mr-5">
                            <Image
                                src="/images/telkom.ico" // Replace with an appropriate image path
                                alt="Radio Wave Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="text-gray-700 grow">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus gravida sodales.
                            Morbi egestas quam ante, vitae molestie massa lobortis et. Quisque varius, orci sit amet malesuada
                            venenatis, dolor orci pharetra ligula, sit amet ultrices ligula felis eu nunc. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Fusce sed aliquam leo, id bibendum lorem. Ut lobortis dui in
                            magna fermentum gravida. Maecenas tempus, velit quis vestibulum interdum, libero augue gravida
                            dolor, id blandit elit nunc semper arcu. Vivamus id iaculis elit, vitae pretium odio. Pellentesque non
                            bibendum elit. Morbi porta hendrerit neque id euismod. Integer venenatis pretium mi, et lobortis arcu
                            placerat id.
                        </p>
                    </div>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget urna quis tellus gravida sodales.
                        Morbi egestas quam ante, vitae molestie massa lobortis et. Quisque varius, orci sit amet malesuada
                        venenatis, dolor orci pharetra ligula, sit amet ultrices ligula felis eu nunc. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Fusce sed aliquam leo, id bibendum lorem. Ut lobortis dui in
                        magna fermentum gravida. Maecenas tempus, velit quis vestibulum interdum, libero augue gravida
                        dolor, id blandit elit nunc semper arcu. Vivamus id iaculis elit, vitae pretium odio. Pellentesque non
                        bibendum elit. Morbi porta hendrerit neque id euismod. Integer venenatis pretium mi, et lobortis arcu
                        placerat id.
                    </p>
                </div>

                {/* Right Content */}
                <aside className="bg-white p-6 shadow-md">
                    <div className="space-y-4">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="p-4 shadow-sm border px-0 pt-0 overflow-hidden"
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
                    </div>
                </aside>
            </section>
        </div>
    );
}