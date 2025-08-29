import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  FolderOpen,
  Target,
  Users,
  Rocket,
  Sparkles,
  Film,
  Network,
  MonitorSmartphone,
  Download,
  Mail,
} from "lucide-react";

// Data
import stats from "@/data/aboutSectionData/stats";
import skillsPrimary from "@/data/aboutSectionData/skillsPrimary";
import skillsSecondary from "@/data/aboutSectionData/skillsSecondary";
import networking from "@/data/aboutSectionData/networking";
import experiences from "@/data/aboutSectionData/experiences";
import skillsCreative from "@/data/aboutSectionData/skillsCreative";
import educationData from "@/data/aboutSectionData/educationData";

// UI Components
import Badge from "@/components/ui/Badge";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import TiltedCard from "@/components/ui/TiltedCard";

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

const StatCard = ({ icon: Icon, label, value, accent = "text-blue-600" }) => (
  <Card className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 hover:shadow-xl transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center gap-3">
        <div
          className={`p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 ${accent}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-2xl font-bold text-neutral-900 dark:text-white">
            {value}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {label}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function AboutSection() {
  // Dummy datasets

  return (
    <section
      id="about"
      className="relative w-full bg-white dark:bg-neutral-950 py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Top heading */}
      <SectionHeading
        title="Tentang Saya"
        subtitle="Profil singkat, keterampilan, pengalaman, serta tujuan karier.
"
      />

      {/* Intro + Stats Row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12"
      >
        <motion.div variants={fadeUp} className="lg:col-span-8">
          <Card className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* <img
                  src="./src/assets/images/saputra.png"
                  alt="Profile"
                  className="h-56 w-56 md:h-72 md:w-72 rounded-2xl object-cover border border-neutral-200 dark:border-neutral-800 shadow-sm"
                /> */}
                <TiltedCard
                  imageSrc="/saputra.png"
                  altText="Muhamad Tri Saputra Profile"
                  captionText="This Is me!, Muhamad Tri Saputra"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge color="blue">Frontend Developer</Badge>
                    <Badge color="green">Video Editor</Badge>
                    <Badge color="purple">IT Support</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    <span>
                      <span className="waving-hand">👋</span> Halo, Saya
                    </span>
                    <span className="font-semibold"> Muhamad Tri Saputra</span>
                  </h3>
                  <div className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed text-justifyed">
                    Saya seorang mahasiswa dengan minat di dunia teknologi dan
                    kreativitas. Fokus utama saya adalah{" "}
                    <PointerHighlight
                      rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
                      pointerClassName="text-blue-500 h-3 w-3"
                      containerClassName="inline-block mx-1"
                    >
                      {" "}
                      <span className="relative z-10">
                        Frontend Development
                      </span>
                    </PointerHighlight>
                    , membangun website modern yang interaktif dan responsif.
                  </div>
                  <div className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed text-justifyed">
                    Selain itu, saya juga memiliki pengalaman di{" "}
                    <PointerHighlight
                      rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
                      pointerClassName="text-green-500 h-3 w-3"
                      containerClassName="inline-block ml-1"
                    >
                      <span className="relative z-10">Video Editing </span>
                    </PointerHighlight>
                    , serta
                    <PointerHighlight
                      rectangleClassName="bg-purple-200 dark:bg-purple-700 border-purple-300 dark:border-purple-600 leading-loose"
                      pointerClassName="text-purple-500 h-3 w-3"
                      containerClassName="inline-block mr-1"
                    >
                      <span className="relative z-10">
                        Network Administration,
                      </span>
                    </PointerHighlight>{" "}
                    menjadikan saya terbiasa menggabungkan kemampuan teknis dan
                    visual untuk menghasilkan solusi digital yang optimal.
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#portfolio"
                      className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:opacity-90"
                    >
                      <FolderOpen className="w-4 h-4" /> Lihat Proyek
                    </a>
                    <a
                      href="/MUHAMAD TRI SAPUTRA RESUME 2025.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                      <Download className="w-4 h-4" /> Download CV
                    </a>
                    <a
                      href="https://wa.me/6281234567890"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                      <Mail className="w-4 h-4" /> Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:col-span-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 h-full">
            {stats.map((s, i) => (
              <StatCard
                key={i}
                icon={s.icon}
                label={s.label}
                value={s.value}
                accent={s.accent}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Tabs Section */}
      <Tabs defaultValue="profile">
        <div className="flex flex-col items-center">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="skills">Keahlian</TabsTrigger>
            <TabsTrigger value="education">Edukasi</TabsTrigger>
            <TabsTrigger value="experience">Pengalaman</TabsTrigger>
          </TabsList>
        </div>

        {/* PROFILE */}
        <TabsContent value="profile">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp}>
              <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Ringkas</CardTitle>
                  <CardDescription>
                    Gambaran singkat tentang fokus dan pendekatan kerja.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed text-justifyed">
                    Saya Muhamad Tri Saputra, seorang mahasiswa yang berfokus
                    pada Frontend Development (React.js, Tailwind CSS,
                    JavaScript). Di samping itu, saya juga aktif di bidang Video
                    Editing, Fotografi, dan Videografi, serta memiliki dasar
                    kuat di Network Administration.
                  </p>
                  <p className="leading-relaxed text-justifyed ">
                    Dengan perpaduan antara teknologi dan kreativitas, saya
                    berkomitmen untuk menciptakan karya yang tidak hanya
                    berfungsi optimal, tetapi juga memiliki nilai estetika dan
                    pengalaman pengguna yang kuat.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* Frontend / Development */}
                    <Badge color="blue">React Js</Badge>
                    <Badge color="green">Tailwind</Badge>
                    <Badge color="yellow">Javascript</Badge>
                    <Badge color="black">Express Js</Badge>
                    <Badge color="green">MongoDB </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {/* Creative / Editing */}
                    <Badge color="purple">Adobe Premiere Pro</Badge>
                    <Badge color="pink">Adobe After Effects</Badge>
                    <Badge color="orange">Adobe Illustrator</Badge>
                    <Badge color="indigo">Adobe Photoshop</Badge>
                    <Badge color="rose">Figma</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Nilai Kerja</CardTitle>
                  <CardDescription>
                    Prinsip yang saya pegang saat membangun produk digital.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 mt-0.5 text-blue-600" />
                      <span>
                        <strong>Kreativitas & Inovasi</strong> — selalu mencari
                        ide segar dan menggabungkan sisi teknis dengan visual
                        dalam setiap karya.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MonitorSmartphone className="w-5 h-5 mt-0.5 text-emerald-600" />
                      <span>
                        <strong>Fokus pada Pengalaman Pengguna</strong> —
                        membangun website interaktif, responsif, dan mudah
                        digunakan.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Film className="w-5 h-5 mt-0.5 text-rose-600" />
                      <span>
                        <strong>Detail & Estetika</strong> — memperhatikan
                        kualitas visual dalam editing, desain, dan presentasi
                        hasil kerja.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Network className="w-5 h-5 mt-0.5 text-indigo-600" />
                      <span>
                        <strong>Problem Solving</strong> — terbiasa menangani
                        troubleshooting jaringan dan mencari solusi teknis yang
                        efisien.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-0.5 text-fuchsia-600" />
                      <span>
                        <strong>Kolaborasi</strong> — terbuka untuk bekerja
                        dalam tim lintas bidang (developer, kreatif, maupun IT
                        support).
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* SKILLS */}
        <TabsContent value="skills">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Bagian Kiri */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              {/* Frontend */}
              <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Front-End</CardTitle>
                  <CardDescription>
                    Fokus pada Frontend Development dan UI Engineering.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsPrimary.map((s, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      color={s.color}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition"
                    >
                      {s.name}
                      <span className="ml-2 text-xs text-neutral-500"></span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              {/* Back-end */}
              <Card className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Back-end</CardTitle>
                  <CardDescription>
                    Dasar untuk integrasi full-stack.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsSecondary.map((s, idx) => (
                    <Badge
                      key={idx}
                      color={s.color}
                      variant="outline"
                      className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition"
                    >
                      {s.name}
                      <span className="ml-2 text-xs text-neutral-500"></span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              {/* Video Editing & Creative Media */}
              <Card className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Video Editing & Creative Media</CardTitle>
                  <CardDescription>
                    Keahlian dalam industri kreatif untuk mendukung konten
                    visual.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsCreative.map((s, idx) => (
                    <Badge
                      key={idx}
                      color={s.color}
                      variant="outline"
                      className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition"
                    >
                      {s.name}
                      <span className="ml-2 text-xs text-neutral-500"></span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Bagian Kanan */}
            <motion.div variants={fadeUp}>
              <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Networking</CardTitle>
                  <CardDescription>
                    Latar belakang Teknik Komputer Dan Jaringan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {networking.map((n, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition"
                    >
                      {n.name}
                      <span className="ml-2 text-xs text-neutral-500"></span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* EXPERIENCE */}
        <TabsContent value="experience">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Pengalaman
                </CardTitle>
                <CardDescription className="text-sm">
                  Jejak perjalanan profesional dan kontribusi saya.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Timeline wrapper */}
                <div className="relative pl-10 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-neutral-300 to-neutral-200 dark:from-neutral-700 dark:to-neutral-900 space-y-12">
                  {experiences.map((exp, idx) => (
                    <motion.divs
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 shadow-md ring-4 ring-white dark:ring-neutral-900"></div>

                      {/* Experience Card */}
                      <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop- -sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                            {exp.company}
                          </h3>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                            {exp.type}
                          </span>
                        </div>

                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {exp.location}
                        </div>
                        {exp.duration && (
                          <div className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                            {exp.duration}
                          </div>
                        )}

                        {/* Roles */}
                        <div className="mt-3 space-y-4">
                          {exp.roles.map((role, rIdx) => (
                            <div
                              key={rIdx}
                              className="border-l-2 pl-4 border-neutral-200 dark:border-neutral-700"
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                                  {role.title}
                                </h4>
                                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                                  {role.year}
                                </span>
                              </div>

                              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                {role.desc}
                              </p>

                              {/* Skills pakai Badge */}
                              {role.skills && role.skills.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {role.skills.map((skill, sIdx) => (
                                    <Badge
                                      key={sIdx}
                                      color={
                                        typeof skill === "string"
                                          ? "indigo"
                                          : skill.color
                                      }
                                    >
                                      {typeof skill === "string"
                                        ? skill
                                        : skill.name}
                                    </Badge>
                                  ))}
                                </div>
                              )}

                              {/* Achievement (opsional) */}
                              {role.achievement && (
                                <p className="mt-2 text-xs italic text-neutral-500 dark:text-neutral-400">
                                  🎉 {role.achievement}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.divs>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* EDUCATION */}
        <TabsContent value="education">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Pendidikan
                </CardTitle>
                <CardDescription className="text-sm">
                  Riwayat pendidikan formal dan perjalanan akademik saya.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Timeline wrapper */}
                <div className="relative pl-10 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-neutral-300 to-neutral-200 dark:from-neutral-700 dark:to-neutral-900 space-y-12">
                  {educationData.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 shadow-md ring-4 ring-white dark:ring-neutral-900"></div>

                      {/* Education Card */}
                      <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                            {edu.company}
                          </h3>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                            {edu.type}
                          </span>
                        </div>

                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {edu.location}
                        </div>
                        {edu.duration && (
                          <div className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                            {edu.duration}
                          </div>
                        )}

                        {/* Roles / Highlights */}
                        {edu.roles && edu.roles.length > 0 && (
                          <ul className="mt-3 list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                            {edu.roles.map((role, rIdx) => (
                              <li key={rIdx}>{role}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* CTA bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <Card className="rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                  Tertarik berkolaborasi?
                </h3>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                  Saya terbuka untuk freelance, remote collaboration, dan
                  project berbasis kontrak. Mari diskusi ide Anda!
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:muhsaputrabiz@gmail.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:opacity-90"
                  >
                    <Mail className="w-4 h-4" /> Email Saya
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  >
                    <FolderOpen className="w-4 h-4" /> Lihat Proyek
                  </a>
                </div>
              </div>
              <div className="relative min-h-[220px] md:min-h-full bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
                <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,_#000_2px,_transparent_0),radial-gradient(circle_at_60%_60%,_#000_2px,_transparent_0),radial-gradient(circle_at_80%_30%,_#000_2px,_transparent_0)] [background-size:24px_24px] [background-position:0_0,8px_8px,16px_16px] dark:[background-image:radial-gradient(circle_at_20%_20%,_#fff_2px,_transparent_0),radial-gradient(circle_at_60%_60%,_#fff_2px,_transparent_0),radial-gradient(circle_at_80%_30%,_#fff_2px,_transparent_0)]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

import { createContext } from "react";

const TabsContext = createContext(null);
