// Reels
import video1 from "@/assets/portfolio/video/video1.jpg";
import video2 from "@/assets/portfolio/video/video2.jpg";
import video3 from "@/assets/portfolio/video/video3.jpg";

// Website
import website1 from "@/assets/portfolio/website/website1.png";

// Foto
import project1 from "@/assets/portfolio/foto/project1.jpg";
import project2 from "@/assets/portfolio/foto/project2.jpg";
import project3 from "@/assets/portfolio/foto/project3.jpg";
import project4 from "@/assets/portfolio/foto/project4.jpg";

// Video
import videoyt1 from "@/assets/portfolio/videoYt/videoyt1.jpg";
import videoyt2 from "@/assets/portfolio/videoYt/videoyt2.jpg";
import videoyt3 from "@/assets/portfolio/videoYt/videoyt3.jpg";
import videoyt4 from "@/assets/portfolio/videoYt/videoyt4.jpg";

const portfolioData = {
  website: [
    {
      title: "Imagine House Website",
      desc: "Website resmi Imagine House sebagai platform creative agency modern.",
      tech: [
        "React.Js",
        "Tailwind",
        "Javascript",
        "MongoDb",
        "Express.Js",
        "Node.Js",
      ],
      live: "https://imaginehouse-client.vercel.app/",
      code: "https://github.com/muhsaputra/portfolio-muhsaputra-2025",
      img: website1,
    },
    {
      title: "Task Manager AI",
      desc: "Aplikasi task management berbasis AI untuk mengoptimalkan jadwal dan produktivitas.",
      tech: ["React", "Python", "FastAPI"],
      live: "#",
      code: "#",
      img: "/placeholder.svg",
    },
  ],
  reels: [
    {
      title: "Yayasan Taka: Kreasea 2025",
      desc: "Video reels untuk acara Kreasea 2025 Yayasan Taka dengan nuansa cinematic.",
      platform: "YouTube",
      link: "https://www.instagram.com/p/DKVhpgFBZCm/",
      img: video1,
    },
    {
      title: "Konten Video Edukatif: Kita Berhak Sehat",
      desc: "Reels edukatif tentang pentingnya menjaga kesehatan dengan visual modern.",
      platform: "Instagram",
      link: "https://www.instagram.com/p/DKHB4YqhDcK/",
      img: video2,
    },
    {
      title: "Konten Video Edukatif: Zakat",
      desc: "Video reels edukasi mengenai zakat dengan desain visual yang engaging.",
      platform: "Instagram",
      link: "https://www.instagram.com/p/DKHB4YqhDcK/",
      img: video3,
    },
  ],
  video: [
    {
      title: "After Movie SMPN 9 KOTA SERANG",
      desc: "After movie kegiatan SMPN 9 Kota Serang dengan storytelling visual.",
      platform: "Instagram",
      link: "https://www.youtube.com/watch?v=tafYiexyG1k",
      img: videoyt1,
    },
    {
      title: "Annual Concret Haifa Montessori Islamic School 2023/2024",
      desc: "Dokumentasi video annual concert Haifa Montessori dengan konsep cinematic.",
      platform: "Instagram",
      link: "https://www.youtube.com/watch?v=O8c9TPqglj0",
      img: videoyt2,
    },
    {
      title: "Short Film Jangan Matikan Lampu",
      desc: "Film pendek berjudul 'Jangan Matikan Lampu' dengan genre thriller.",
      platform: "Instagram",
      link: "https://www.youtube.com/watch?v=sdzk_Kcjs_0",
      img: videoyt3,
    },
    {
      title: "Festival Film Banten Juara 1 | Tulah Nganji",
      desc: "Film pendek 'Tulah Nganji' peraih juara 1 Festival Film Banten.",
      platform: "Instagram",
      link: "https://www.youtube.com/watch?v=tLuy90iSpUQ&t=1s",
      img: videoyt4,
    },
  ],
  photo: [
    {
      title: "Fotoshoot Busana by Lilin Indriyani",
      desc: "Pemotretan busana karya Lilin Indriyani dengan sentuhan tradisional Tiongkok.",
      link: "#",
      img: project2,
    },
    {
      title: "Ertiga Club Indonesia, Seruni Camping Ground",
      desc: "Dokumentasi acara camping Ertiga Club Indonesia (ERCI) Serang Chapter di Bogor.",
      link: "#",
      img: project1,
    },
    {
      title: "Event Fashion Fushion Tabus SMK Negeri 1 Kota Serang",
      desc: "Foto dokumentasi acara Fashion Fushion Tata Busana SMKN 1 Kota Serang.",
      link: "#",
      img: project3,
    },
    {
      title: "Acara Lamaran H&D",
      desc: "Foto dokumentasi prosesi lamaran H&D yang penuh kebahagiaan.",
      link: "#",
      img: project4,
    },
  ],
};

export default portfolioData;
