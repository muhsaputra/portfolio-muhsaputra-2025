"use client";

import { motion } from "framer-motion";
import Lanyard from "@/components/Lanyard/Lanyard.jsx";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_vo7o1fs", // Service ID
        "template_rgf5lqj", // Template ID
        formRef.current,
        "NCJZm8NuoN09xdw-E" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 text-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base font-semibold text-gray-500 mb-4 tracking-wide uppercase">
            Hubungi Saya
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Mari Bekerja Sama
          </h2>
          <p className="text-lg text-gray-600 mb-14 leading-relaxed max-w-xl">
            Kami senang mendengar ide dan pertanyaan Anda.{" "}
            <span className="font-semibold">24 jam kerja</span>.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
            {/* Nama */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Masukkan nama Anda"
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="nama@email.com"
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3">
                Pesan
              </label>
              <textarea
                name="message"
                placeholder="Tulis pesan Anda di sini..."
                rows={6}
                required
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition resize-none"
              />
            </div>

            {/* Tombol */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-4 rounded-2xl text-lg md:text-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {/* Notifikasi */}
            {success === true && (
              <p className="text-green-600 font-medium mt-3">
                ✅ Pesan berhasil terkirim!
              </p>
            )}
            {success === false && (
              <p className="text-red-600 font-medium mt-3">
                ❌ Gagal mengirim pesan. Coba lagi.
              </p>
            )}
          </form>
        </motion.div>

        {/* Right: Lanyard 3D Model (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block w-full h-[500px] lg:h-[600px] absolute top-5 left-[320px]"
        >
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} fov={20} />
        </motion.div>

        {/* Lanyard di kiri (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block md:hidden w-full h-[350px] mt-10"
        >
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} fov={25} />
        </motion.div>
      </div>
    </section>
  );
}
