import { ArrowRight, Download } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white mt-12 lg:mt-0 md:mt-0 xl:mt-0  text-black min-h-screen flex items-center justify-center">
      {/* Background */}
      <BackgroundLines className="pointer-events-none absolute inset-0" />

      {/* Konten utama */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center px-4">
        {/* Tagline Atas */}
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium shadow-sm mb-6">
          <span>
            <span className="waving-hand">👋</span> Hi, I’m
          </span>
          <span className="font-semibold">Muhamad Tri Saputra</span>
        </div>

        {/* Nama & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Frontend Developer · <br></br> IT Support · Video Editor
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Berawal dari dunia jaringan, saya kini berfokus sebagai Frontend
          Developer dengan spesialisasi JavaScript. Di luar itu, saya juga
          menekuni bidang Video Editing dan Creative Media, menggabungkan sisi
          teknis dan kreatif untuk menghasilkan karya digital yang bernilai.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="#about"
            className="px-6 py-3 rounded-md bg-black text-white font-medium shadow hover:bg-gray-800 transition flex items-center gap-2"
          >
            Tentang Saya
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer kecil */}
        <div className="flex flex-wrap justify-center gap-2 text-gray-500 text-sm">
          <span>🌍 Based in Serang Banten, Indonesia</span>
          <span>•</span>
          <a
            className="hover:underline font-medium text-black"
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me →
          </a>
        </div>
      </div>
    </section>
  );
}
