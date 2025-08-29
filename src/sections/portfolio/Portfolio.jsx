// PortfolioSection.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Youtube,
  Instagram,
  ImageIcon,
  Play,
} from "lucide-react";
import portfolioData from "@/data/portfolioSectionData/portfolioData";

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("website");

  const tabs = [
    { key: "website", label: "Website" },
    { key: "photo", label: "Foto" },
    { key: "video", label: "Video" }, // 🔥 Tambahan tab Video
    { key: "reels", label: "Reels" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const renderContent = () => {
    if (activeTab === "website") {
      return (
        <div id="portfolio" className="grid md:grid-cols-2 gap-6">
          {portfolioData.website.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="rounded-2xl bg-white dark:bg-neutral-900 shadow hover:shadow-xl transition overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h4 className="font-semibold text-xl">{p.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={p.live}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === "reels") {
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioData.reels.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative rounded-2xl overflow-hidden shadow-lg 
                   bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md 
                   border border-neutral-200/50 dark:border-neutral-800/50
                   group hover:shadow-2xl transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="aspect-[9/16] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-4 z-10">
                <h4 className="text-white font-semibold text-lg drop-shadow-lg">
                  {p.title}
                </h4>
                <p className="text-sm text-gray-200 line-clamp-2 mt-1 drop-shadow">
                  {p.desc}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white 
                       bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1.5 rounded-full 
                       shadow-md hover:scale-105 transition-transform"
                >
                  <Play size={16} /> Lihat Reels
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === "video") {
      return (
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.video.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative rounded-2xl overflow-hidden shadow-lg 
                   bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md 
                   border border-neutral-200/50 dark:border-neutral-800/50
                   group hover:shadow-2xl transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-5 z-10">
                <h4 className="font-semibold text-white text-lg drop-shadow-md">
                  {p.title}
                </h4>
                <p className="text-sm text-gray-200 line-clamp-2 mt-1 drop-shadow">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white 
                       bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 rounded-full 
                       shadow-md hover:scale-105 transition-transform"
                >
                  <Youtube size={16} /> Lihat di YouTube
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (activeTab === "photo") {
      return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 perspective-1000">
          {portfolioData.photo.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-neutral-900/10 backdrop-blur-lg"
            >
              {/* Image */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5">
                <h4 className="text-white font-bold text-lg tracking-wide drop-shadow-lg">
                  {p.title}
                </h4>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2 leading-relaxed">
                  {p.desc}
                </p>

                {/* Action button */}
                <motion.a
                  href={p.link}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white text-sm font-semibold shadow-lg hover:shadow-green-500/40 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  <ImageIcon size={16} /> Lihat Foto
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Portfolio Saya"
          subtitle="Kumpulan proyek kreatif mulai dari Website, Reels, Video, hingga Fotografi."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-6 border-b border-neutral-200 dark:border-neutral-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 px-2 font-medium transition relative ${
                  activeTab === tab.key
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-blue-600 dark:bg-blue-400 rounded"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </section>
  );
}
