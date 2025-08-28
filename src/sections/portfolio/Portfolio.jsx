// PortfolioSection.jsx
import { ExternalLink, Github, Youtube, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioSectionData/portfolioData";

// Reusable components
const SectionHeading = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    ) : null}
  </motion.div>
);

const SubHeading = ({ title, desc }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
      {title}
    </h3>
    {desc && (
      <p className="text-neutral-600 dark:text-neutral-400 mt-1">{desc}</p>
    )}
  </div>
);

export default function PortfolioSection() {
  // Variants untuk animasi kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="portfolio" className="py-16">
      {/* Top heading */}
      <SectionHeading
        title="Portfolio Saya"
        subtitle="Berikut beberapa proyek yang mencerminkan keahlian saya dalam Frontend Development, Foto, dan Video Editing."
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Website Projects */}
        <SubHeading
          title="Website"
          desc="Beberapa website yang saya kembangkan menggunakan React, Next.js, dan teknologi modern lainnya."
        />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {portfolioData.website.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-5 rounded-2xl shadow bg-white dark:bg-neutral-900 hover:shadow-lg transition"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-xl">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 dark:bg-neutral-800 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  className="flex items-center gap-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Projects */}
        <SubHeading
          title="Video"
          desc="Proyek editing video untuk berbagai platform seperti YouTube dan Instagram."
        />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {portfolioData.video.map((p, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl shadow bg-white dark:bg-neutral-900"
            >
              <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>

              <h4 className="font-semibold text-xl">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <Youtube size={16} /> Lihat di {p.platform}
              </a>
            </div>
          ))}
        </div>

        {/* Photo Projects */}
        <SubHeading
          title="Foto"
          desc="Karya fotografi yang menggabungkan kreativitas dengan teknik pencahayaan."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.photo.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-5 rounded-2xl shadow bg-white dark:bg-neutral-900 hover:shadow-lg transition"
            >
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-xl">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
              >
                <ImageIcon size={16} /> Lihat Foto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
