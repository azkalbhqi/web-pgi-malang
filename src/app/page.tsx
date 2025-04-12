import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-100">
        <div className="absolute inset-0">
          <Image alt="background" src='/asset/bg-utama.png' fill className="object-cover"/>
          <div className="w-full h-full bg-gray-300" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
            Persatuan Golf Indonesia Malang
          </h1>
          <p className="text-lg text-white md:text-xl mb-6 max-w-2xl mx-auto">
            Mewujudkan semangat sportivitas dan prestasi dalam olahraga golf di kota Malang.
          </p>
          <Link href='#tentang-kami' className="text-white border border-red-200 hover:border-red-900 shadow-lg hover:bg-opacity hover:text-black px-6 py-3 rounded-full text-lg transition-colors duration-300">
            Lihat Lebih Lanjut
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang-kami" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Tentang Kami</h2>
        <p className="text-lg max-w-2xl mx-auto">
          PGI Malang adalah organisasi resmi yang mewadahi para pegolf di Malang Raya.
          Kami berkomitmen untuk memajukan olahraga golf melalui kompetisi, pelatihan,
          dan komunitas yang inklusif.
        </p>
      </section>

      {/* Gallery / Empty Photo Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Galeri Kegiatan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-64 bg-gray-300 rounded-xl" />
          ))}
        </div>
      </section>
    </main>
  );
}
