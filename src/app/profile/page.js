import Link from 'next/link'
import Image from "next/image";

export default function Profile() {
    return (
        <div className="px-6 py-8">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Content */}
                <div className="md:col-span-2 bg-white p-6 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Profil</h2>
                    <p className="text-gray-700 mb-6">
                        Teknik Telekomunikasi adalah program studi yang berfokus pengembangan teknologi pada bidang telekomunikasi. Istilah “telekomunikasi” sendiri berasal dari dua kata, tele artinya jauh dan komunikasi yang artinya penyampaian informasi.

                        Program Studi Teknik Telekomunikasi akan mempelajari semua aspek tentang bagaimana kita berkomunikasi dalam jarak jauh, mulai dari sinyal, transmisi data, jaringan komputer, radio, teknologi radar, teknologi celuller, broadcast televisi dan satelit. Saat ini yang sedang menjadi trend di Teknik Telekomunikasi adalah pengambangan 5G dan 6G pada komunikasi Celuller.  Sebenarnya Teknik Telekomunikasi lebih ke teknik, rumus, model, dan algoritma sebagai dasar ilmu perkembangan teknologi – teknologi diatas. Untuk jadi produk tetap perlu ahli Elektronika untuk bikin Chip dan sebagainya.

                        Pada awalnya, Program Studi Teknik Telekomunikasi merupakan salah satu cabang dari teknik elektro, yakni bidang arus lemah. Karena perkembangan teknologi telekomunikasi yang sedemikian pesat, ilmu yang dipelajari juga semakin banyak dan menjadi jurusan tersendiri.

                        Teknik Telekomunikasi ITERA merupakan satu-satunya Program Studi Teknik Telekomunikasi yang berada di PTN dipulau Sumatera dan menjadi yang kedua di Indonesia setelah ITB.]

                        Visi Teknik Telekomunikasi ITERA

                        Menjadi program studi yang unggul di Pulau Sumatera dan mampu merespon perkembangan teknologi dan ilmu pengetahuan untuk menghasilkan sumber daya manusia yang unggul dalam bidang Telekomunikasi pada tahun 2030.

                        Misi Teknik Telekomunikasi ITERA

                        Melaksanakan dan mengembangkan pendidikan khususnya bidang Telekomunikasi untuk menyiapkan lulusan yang siap menggunakan, mengembangkan, serta menerapkan ilmu pengetahuan dan teknologi yang berkarakter.
                        Melakukan kegiatan penelitian yang dapat menghasilkan pengembangan teknologi yang inovatif dalam bidang telekomunikasi.
                        Menyelenggarakan kegiatan pengabdian kepada masyarakat yang memanfaatkan teknologi telekomunikasi untuk mewujudkan masyarakat yang cakap teknologi.
                        Tujuan Teknik Telekomunikasi ITERA

                        Menghasilkan lulusan sarjana teknik yang mampu menggunakan kemampuan dasar keilmuan dan keterampilan teknik serta mampu berkomunikasi dan beradaptasi dengan baik dalam lingkungan sosial yang bermanfaat dalam perjalanan karirnya.
                        Memiliki lulusan yang menghasilkan luaran berupa publikasi atau produk atau kekayaan intelektual lainnya dari kegiatan penelitian dalam bidang telekomunikasi.
                        Menciptakan lulusan yang berkontribusi dalam mewujudkan masyarakat yang cakap teknologi melalui karya atau layanan yang dihasilkan darikegiatan pengabdian kepada masyarakat.
                        Sasaran
                        Program Studi Teknik Telekomunikasi bertanggungjawab untuk menyelenggaran kegiatan Tri Dharma Perguruan Tinggi yang mencakup pendidikan, penelitian dan pengabdian kepada masyarakat yang bermutu disertai peningkatan kualitas secara berkelanjutan berdasarkan outputnya
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