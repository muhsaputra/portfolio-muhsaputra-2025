import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FolderOpen,
  Target,
  Users,
  Award,
  Code,
  Monitor,
  Network,
  BookOpen,
  Briefcase,
  Rocket,
  Cpu,
  Wrench,
  Sparkles,
  MessageSquare,
  Download,
  Mail,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

// Small utility components (local to this file)
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

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-1.5 text-sm font-medium shadow-sm">
    {children}
  </span>
);

const Badge = ({ children, color = "blue" }) => {
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    green:
      "bg-green-50 text-green-700 dark:bg-green-400/10 dark:text-green-300",
    purple:
      "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300",
    orange:
      "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
    pink: "bg-pink-50 text-pink-700 dark:bg-pink-400/10 dark:text-pink-300",
    gray: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${colorMap[color]}`}
    >
      {children}
    </span>
  );
};

const Progress = ({ value }) => (
  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
    <div
      className="h-2 rounded-full bg-neutral-900 dark:bg-white"
      style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
    />
  </div>
);

const TimelineItem = ({ year, title, company, desc }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />
    <div className="text-sm text-neutral-500 dark:text-neutral-400">{year}</div>
    <div className="text-lg font-semibold text-neutral-900 dark:text-white">
      {title}
    </div>
    <div className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
      {company}
    </div>
    <p className="mt-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      {desc}
    </p>
  </div>
);

const ToolBadge = ({ label }) => (
  <div className="px-3 py-1 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 bg-white/70 dark:bg-neutral-900/70">
    {label}
  </div>
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
  // Dummy datasets (replace later)
  const stats = [
    {
      icon: FolderOpen,
      label: "Proyek Selesai",
      value: "45+",
      accent: "text-blue-600",
    },
    { icon: Users, label: "Klien", value: "30+", accent: "text-emerald-600" },
    { icon: Award, label: "Sertifikasi", value: "6", accent: "text-amber-600" },
    {
      icon: Target,
      label: "Tingkat Selesai",
      value: "98%",
      accent: "text-fuchsia-600",
    },
  ];

  const skillsPrimary = [
    { name: "React.js", value: 90 },
    { name: "Tailwind CSS", value: 92 },
    { name: "JavaScript", value: 88 },
    { name: "Framer Motion", value: 80 },
  ];

  const skillsSecondary = [
    { name: "Node.js", value: 72 },
    { name: "Express", value: 70 },
    { name: "MongoDB", value: 68 },
    { name: "MySQL", value: 65 },
  ];

  const networking = [
    { name: "Routing & Switching", value: 78 },
    { name: "Mikrotik / Cisco", value: 75 },
    { name: "Subnetting / VLAN", value: 82 },
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Postman",
    "Git & GitHub",
    "Vite",
    "Zustand",
    "Axios",
    "Swiper",
    "Cloudflare",
    "Railway",
  ];

  const experiences = [
    {
      year: "2024 – Sekarang",
      title: "Frontend Developer",
      company: "Imagine House",
      desc: "Membangun website modern untuk digital agency berbasis React, Tailwind, dan animasi micro-interaction, fokus pada performa dan aksesibilitas.",
    },
    {
      year: "2023",
      title: "Network Engineer Intern",
      company: "Telkom Indonesia",
      desc: "Konfigurasi jaringan dasar-menengah, monitoring, serta troubleshooting perangkat dan topologi jaringan enterprise skala kecil-menengah.",
    },
    {
      year: "2022",
      title: "Freelance Web Developer",
      company: "Remote",
      desc: "Membangun landing page, company profile, dan web katalog untuk UMKM; kolaborasi lintas peran dengan tim kreatif media.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Kolaborasi terasa cepat dan rapi. Onboarding proyek jelas, PR dibagi rapi, dan komunikasi berjalan efektif. Hasilnya di atas ekspektasi.",
      name: "Dewi N.",
      role: "Project Manager, Imagine House",
    },
    {
      quote:
        "Website yang dibuat ringan, clean, dan mudah dikelola. Poin plus pada performa dan detail UI yang konsisten.",
      name: "Rama P.",
      role: "Founder, Local Brand",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white dark:bg-neutral-950 py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Top heading */}
      <SectionHeading
        title="Tentang Saya"
        subtitle="Profil singkat, keterampilan, pengalaman, serta tujuan karier—dirancang untuk menunjukkan kekuatan utama saya sebagai Frontend Developer dengan latar belakang jaringan dan media kreatif."
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
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <img
                  src="./src/assets/images/Final.png"
                  alt="Profile"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover border border-neutral-200 dark:border-neutral-800 shadow-sm"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Pill>
                      <span className="text-neutral-700 dark:text-neutral-200">
                        👋 Hi, I’m
                      </span>
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        Muhamad Tri Saputra
                      </span>
                    </Pill>
                    <Badge color="blue">Frontend</Badge>
                    <Badge color="green">Networking</Badge>
                    <Badge color="purple">Creative</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Frontend Developer · Network Administrator · Creative Media
                  </h3>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed">
                    Berfokus pada pembuatan antarmuka yang bersih, cepat, dan
                    mudah di-maintain. Latar belakang jaringan membantu saya
                    memahami performa & keamanan, sementara pengalaman media
                    kreatif memperkaya eksekusi visual dan storytelling produk
                    digital.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:opacity-90"
                    >
                      <FolderOpen className="w-4 h-4" /> Lihat Proyek
                    </a>
                    <a
                      href="/cv.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
                    >
                      <Download className="w-4 h-4" /> Download CV
                    </a>
                    <a
                      href="mailto:youremail@example.com"
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
            <TabsTrigger value="experience">Pengalaman</TabsTrigger>
            <TabsTrigger value="goals">Tujuan</TabsTrigger>
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
                  <p>
                    Saya senang bekerja di ekosistem React (Vite, Tailwind,
                    Zustand) dengan perhatian pada detail UI, konsistensi
                    desain, serta aksesibilitas. Saya percaya desain yang baik
                    harus terasa <em>invisible</em>— halus, responsif, dan
                    menyenangkan digunakan.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge color="blue">React</Badge>
                    <Badge color="purple">Framer Motion</Badge>
                    <Badge color="green">Tailwind</Badge>
                    <Badge color="orange">MERN Basics</Badge>
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
                        <strong>Detail matters</strong> — piksel, ritme,
                        interaksi kecil.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 mt-0.5 text-emerald-600" />
                      <span>
                        <strong>Perf first</strong> — ringan, cepat, dan stabil.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 mt-0.5 text-amber-600" />
                      <span>
                        <strong>Maintainable</strong> — code yang rapi & mudah
                        dikembangkan.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 mt-0.5 text-fuchsia-600" />
                      <span>
                        <strong>Communication</strong> — dokumentasi &
                        kolaborasi yang jelas.
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
              <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Keterampilan Utama</CardTitle>
                  <CardDescription>
                    Fokus pada frontend dan UI engineering.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsPrimary.map((s, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition"
                    >
                      {s.name}
                      <span className="ml-2 text-xs text-neutral-500"></span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Back-end & Database</CardTitle>
                  <CardDescription>
                    Dasar untuk integrasi full-stack.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillsSecondary.map((s, idx) => (
                    <Badge
                      key={idx}
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
                    Latar belakang TKJ & administrasi jaringan.
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

              <Card className="mt-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle>Highlight</CardTitle>
                  <CardDescription>Pencapaian singkat.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" /> BNSP Network
                    Support
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-600" /> 10+ UI
                    micro-interaction
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-purple-600" /> Perf score
                    90-100 (Lighthouse)
                  </div>
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
            <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <CardHeader>
                <CardTitle>Pengalaman</CardTitle>
                <CardDescription>
                  Perjalanan profesional singkat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative pl-8 before:absolute before:left-1.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800 space-y-8">
                  {experiences.map((e, idx) => (
                    <TimelineItem
                      key={idx}
                      year={e.year}
                      title={e.title}
                      company={e.company}
                      desc={e.desc}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* GOALS */}
        <TabsContent value="goals">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Produk yang Bernilai",
                desc: "Membangun UI yang tidak hanya indah, tetapi juga efektif mendorong konversi & keterlibatan.",
              },
              {
                icon: Rocket,
                title: "Skala & Stabil",
                desc: "Menjaga codebase tetap modular, dapat diuji, dan mudah ditingkatkan.",
              },
              {
                icon: Users,
                title: "Kolaborasi Baik",
                desc: "Meningkatkan komunikasi lintas tim: design, backend, hingga stakeholder bisnis.",
              },
            ].map((g, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800 h-full">
                  <CardContent className="p-7">
                    <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 w-fit mb-4">
                      <g.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xl font-semibold mb-2">{g.title}</div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {g.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* TOOLBOX */}
        <TabsContent value="toolbox">
          <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <CardHeader>
              <CardTitle>Toolbox</CardTitle>
              <CardDescription>Alat yang sering saya gunakan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {tools.map((t, idx) => (
                  <ToolBadge key={idx} label={t} />
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:opacity-90"
              >
                <Github className="w-4 h-4" /> Repositori
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <Globe className="w-4 h-4" /> Website
              </a>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* TESTIMONIALS */}
        <TabsContent value="testimonials">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <Card className="rounded-2xl border border-neutral-200 dark:border-neutral-800 h-full">
                  <CardContent className="p-7">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      “{t.quote}”
                    </p>
                    <div className="mt-5">
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {t.name}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {t.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
                    href="mailto:youremail@example.com"
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

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

const TabsContext = createContext(null);

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs components must be used inside <Tabs>");
  return ctx;
}
