// Video
import video1 from "@/assets/portfolio/video/video1.jpg";
import video2 from "@/assets/portfolio/video/video2.jpg";

// Website
import website1 from "@/assets/portfolio/website/website1.png";
// Foto
import project1 from "@/assets/portfolio/foto/project1.jpg";
import project2 from "@/assets/portfolio/foto/project2.jpg";
import project3 from "@/assets/portfolio/foto/project3.jpg";
import project4 from "@/assets/portfolio/foto/project4.jpg";

const portfolioData = {
  website: [
    {
      title: "Imagine House Website",
      desc: "Platform Website Creative Agency Imagine House",
      tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
      live: "https://imaginehouse-client.vercel.app/",
      code: "https://github.com/muhsaputra/portfolio-muhsaputra-2025",
      img: website1,
    },
    {
      title: "Task Manager AI",
      desc: "Aplikasi task management dengan AI untuk optimasi jadwal.",
      tech: ["React", "Python", "FastAPI"],
      live: "#",
      code: "#",
      img: "/placeholder.svg",
    },
  ],
  video: [
    {
      title: "Yayasan Taka: Kreasea 2025",
      desc: "Video cinematic dengan transisi halus dan color grading.",
      platform: "YouTube",
      link: "https://youtube.com/",
      img: video1,
    },
    {
      title: "Konten Video Edukatif: Kita Berhak Sehat",
      desc: "Konten reels dengan efek motion graphic modern.",
      platform: "Instagram",
      link: "https://instagram.com/",
      img: video2,
    },
    {
      title: "Konten Video Edukatif: Kita Berhak Sehat",
      desc: "Konten reels dengan efek motion graphic modern.",
      platform: "Instagram",
      link: "https://instagram.com/",
      img: video2,
    },
  ],
  photo: [
    {
      title: "Fotoshoot Busana by Lilin Indriyani",
      desc: "Sebuah potret artistik yang memadukan budaya dan estetika—seorang model mengenakan busana tradisional Tiongkok.",
      link: "#",
      img: project2,
    },
    {
      title: "Ertiga Club Indonesia, Seruni Camping Ground",
      desc: "Ertiga Club Indonesia (ERCI) Serang Chapter menggelar acara camping seru bersama keluarga besar komunitas di Camp Ground Seruni, Bogor.",
      link: "#",
      img: project1,
    },
    {
      title: "Event Fashion Fushion Tabus SMK Negeri 1 Kota Serang ",
      desc: "Project dokumentasi foto untuk event acara Fashion Fushion Tata Busana SMK Negeri 1 Kota Serang.",
      link: "#",
      img: project3,
    },
    {
      title: "Acara Lamaran H&D",
      desc: "mengabadikan momen spesial sepasang kekasih yang melangsungkan prosesi lamaran penuh haru dan kebahagiaan.",
      link: "#",
      img: project4,
    },
  ],
};

export default portfolioData;
