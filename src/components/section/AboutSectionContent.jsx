import React from "react";
import { motion } from "framer-motion";

function AboutSectionContent() {
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
  return (
    <div>
      {/* Top heading */}
      <SectionHeading
        title="Tentang Saya"
        subtitle="Profil singkat, keterampilan, pengalaman, serta tujuan karier—dirancang untuk menunjukkan kekuatan utama saya sebagai Frontend Developer dengan latar belakang jaringan dan media kreatif.
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
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                <img
                  src="./src/assets/images/Final.png"
                  alt="Profile"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover border border-neutral-200 dark:border-neutral-800 shadow-sm"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge color="blue">Frontend</Badge>
                    <Badge color="green">Networking</Badge>
                    <Badge color="purple">Creative</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Muhamad Tri Saputra
                  </h3>
                  <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed">
                    Berawal dari dunia media kreatif, saya suka bikin sesuatu
                    yang visualnya menarik dan bercerita. Sekarang saya
                    menggabungkannya dengan passion di frontend development,
                    biar setiap desain bisa hidup di layar jadi pengalaman yang
                    interaktif, responsif, dan enak dipakai.
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
                    Saya Muhamad Tri Saputra, mahasiswa yang fokus di Media
                    Kreatif dan Frontend Development. Saya suka menggabungkan
                    kreativitas visual dengan teknologi web untuk menghadirkan
                    pengalaman digital yang menarik, simpel, dan fungsional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge color="blue">React</Badge>
                    <Badge color="purple">Framer Motion</Badge>
                    <Badge color="green">Tailwind</Badge>
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
      </Tabs>
    </div>
  );
}

export default AboutSectionContent;
