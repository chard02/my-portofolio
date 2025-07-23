import { useState } from 'react'
import { Typography, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Chip } from "@material-tailwind/react"
import ProjectCard from "../components/ui/ProjectCard"
import { XMarkIcon } from "@heroicons/react/24/solid"

// Data proyek dengan konten tambahan untuk popup
const PROJECTS = [
  {
    img: "/src/assets/projects/project-1.png",
    title: "Aplikasi Mobile RestoFinder",
    description: "Aplikasi mobile yang dirancang untuk membantu pengguna menemukan dan menjelajahi restoran lokal dan masakan favorit.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    link: "#",
    fullDescription: `
      <p>RestoFinder adalah solusi mobile lengkap yang membantu pengguna menemukan restoran terdekat berdasarkan preferensi makanan mereka. Aplikasi ini menggunakan geolokasi real-time dan algoritma penyaringan cerdas untuk menampilkan rekomendasi personal.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Pencarian restoran berdasarkan lokasi, jenis masakan, dan harga</li>
        <li>Filter khusus untuk preferensi diet (vegan, gluten-free, dll)</li>
        <li>Rating dan review dari pengguna</li>
        <li>Bookmark restoran favorit</li>
        <li>Navigasi langsung ke restoran pilihan</li>
        <li>Rekomendasi menu populer di setiap restoran</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Aplikasi ini dibangun menggunakan React Native untuk pengembangan cross-platform, Firebase untuk backend dan autentikasi, serta Google Maps API untuk fitur lokasi dan navigasi. Arsitektur aplikasi mengikuti pola Redux untuk manajemen state yang efisien.</p>
      
      <h3>Tantangan dan Solusi:</h3>
      <p>Tantangan utama dalam proyek ini adalah mengoptimalkan permintaan API Maps untuk meminimalkan penggunaan data pengguna sambil tetap memberikan pengalaman real-time. Solusinya adalah implementasi sistem caching cerdas dan batching request untuk mengurangi panggilan API berlebihan.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
  {
    img: "/src/assets/projects/project-1.png",
    title: "Landing Page FitLife",
    description: "Landing page promosi untuk kampanye musim panas situs web kebugaran. Termasuk pengembangan formulir konversi.",
    category: "Landing Page",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    fullDescription: `
      <p>FitLife adalah landing page yang dirancang untuk mengkonversi pengunjung menjadi pendaftar program kebugaran musim panas. Proyek ini fokus pada desain yang menarik dan optimasi konversi.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Hero section animasi dengan CTA yang mencolok</li>
        <li>Testimoni pengguna dengan slider interaktif</li>
        <li>Formulir pendaftaran dengan validasi real-time</li>
        <li>Countdown timer untuk menciptakan urgensi</li>
        <li>Integrasi dengan sistem pembayaran</li>
        <li>Desain responsif untuk semua perangkat</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Landing page ini dibangun dengan React untuk manajemen komponen, Tailwind CSS untuk styling yang efisien, dan Framer Motion untuk animasi halus. Penggunaan teknik lazy loading meningkatkan kecepatan dan performa situs.</p>
      
      <h3>Hasil:</h3>
      <p>Setelah diluncurkan, landing page ini mencapai tingkat konversi 15% lebih tinggi dibandingkan versi sebelumnya, dengan bounce rate yang berkurang hingga 30% berkat pengalaman pengguna yang ditingkatkan.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
  {
    img: "/src/assets/projects/project-1.png",
    title: "Aplikasi Mobile FinTrack",
    description: "Aplikasi pelacakan keuangan pribadi dengan visualisasi data dan fitur penganggaran yang intuitif.",
    category: "Mobile",
    technologies: ["Flutter", "Node.js", "Chart.js"],
    link: "#",
    fullDescription: `
      <p>FinTrack adalah aplikasi manajemen keuangan pribadi yang membantu pengguna melacak pengeluaran, membuat anggaran, dan mencapai tujuan keuangan mereka melalui analisis data yang kuat dan visualisasi yang intuitif.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Pelacakan pengeluaran otomatis dengan kategorisasi cerdas</li>
        <li>Dashboard visualisasi data interaktif</li>
        <li>Pengaturan anggaran dengan notifikasi</li>
        <li>Perencanaan tabungan untuk tujuan jangka pendek dan panjang</li>
        <li>Laporan keuangan bulanan dan tahunan</li>
        <li>Sinkronisasi multi-perangkat melalui cloud</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Aplikasi ini dibangun dengan Flutter untuk antarmuka pengguna yang mulus di iOS dan Android, backend Node.js untuk API dan logika bisnis, serta Chart.js untuk visualisasi data yang interaktif dan informatif.</p>
      
      <h3>Tantangan dan Solusi:</h3>
      <p>Tantangan utama adalah menyeimbangkan keamanan data keuangan sensitif dengan pengalaman pengguna yang lancar. Solusinya adalah implementasi enkripsi end-to-end dan autentikasi biometrik tanpa mengorbankan kecepatan aplikasi.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
  {
    img: "/src/assets/projects/project-1.png",
    title: "E-commerce GadgetHub",
    description: "Platform e-commerce yang menawarkan akses ke gadget dan aksesori terbaru dengan sistem keranjang dan checkout yang aman.",
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    link: "#",
    fullDescription: `
      <p>GadgetHub adalah platform e-commerce komprehensif yang menawarkan produk elektronik dan aksesori terbaru dengan fokus pada pengalaman berbelanja yang cepat dan aman.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Katalog produk yang lengkap dengan filter dan pencarian lanjutan</li>
        <li>Sistem keranjang belanja yang responsif</li>
        <li>Proses checkout yang dioptimalkan dengan berbagai opsi pembayaran</li>
        <li>Sistem manajemen inventaris real-time</li>
        <li>Halaman detail produk dengan galeri gambar dan video</li>
        <li>Integrasi dengan program loyalitas pelanggan</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Platform ini dibangun dengan Next.js untuk rendering sisi server yang optimal, Stripe untuk pemrosesan pembayaran yang aman, dan MongoDB untuk database yang skalabel. Implementasi API GraphQL memungkinkan pengambilan data yang efisien.</p>
      
      <h3>Hasil:</h3>
      <p>Setelah peluncuran, platform ini mencatat peningkatan 40% dalam nilai rata-rata pesanan dan penurunan 25% dalam tingkat abandonment keranjang berkat pengalaman checkout yang ditingkatkan.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
  {
    img: "/src/assets/projects/project-1.png",
    title: "Dashboard Admin CloudSync",
    description: "Dashboard admin komprehensif untuk layanan SaaS dengan analitik dan manajemen pengguna terintegrasi.",
    category: "Web",
    technologies: ["React", "Redux", "Material UI"],
    link: "#",
    fullDescription: `
      <p>CloudSync Dashboard adalah antarmuka administrasi yang kuat untuk platform SaaS, menyediakan analitik komprehensif, manajemen pengguna, dan alat pemantauan sistem dalam satu panel yang terpadu.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Dasbor analitik real-time dengan metrik kunci bisnis</li>
        <li>Manajemen pengguna dan kontrol akses berbasis peran</li>
        <li>Pemantauan kinerja sistem dan pemberitahuan</li>
        <li>Laporan yang dapat disesuaikan dengan ekspor data</li>
        <li>Integrasi dengan layanan pihak ketiga</li>
        <li>Tema yang dapat disesuaikan dan tata letak yang fleksibel</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Dashboard ini dibangun dengan React untuk antarmuka yang responsif, Redux untuk manajemen state terpusat, dan Material UI untuk komponen yang konsisten dan dapat diakses. WebSocket digunakan untuk pembaruan data real-time.</p>
      
      <h3>Tantangan dan Solusi:</h3>
      <p>Tantangan utama adalah menyajikan jumlah data yang besar tanpa mengorbankan kinerja UI. Solusinya adalah implementasi teknik virtualisasi dan pagination efisien serta strategi caching yang optimial.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
  {
    img: "/src/assets/projects/project-1.png",
    title: "Landing Page TechConf",
    description: "Landing page untuk konferensi teknologi tahunan dengan sistem pendaftaran terintegrasi dan jadwal dinamis.",
    category: "Landing Page",
    technologies: ["HTML/CSS", "JavaScript", "PHP"],
    link: "#",
    fullDescription: `
      <p>TechConf adalah landing page yang komprehensif untuk konferensi teknologi tahunan, menampilkan jadwal acara, profil pembicara, dan sistem pendaftaran yang terintegrasi dalam desain yang imersif.</p>
      
      <h3>Fitur Utama:</h3>
      <ul>
        <li>Jadwal acara interaktif dengan filter dan mode kalender</li>
        <li>Profil pembicara dengan informasi biografi dan sesi</li>
        <li>Sistem pendaftaran multi-langkah dengan berbagai paket tiket</li>
        <li>Integrasi dengan sosial media untuk berbagi dan engagement</li>
        <li>Galeri dari acara sebelumnya</li>
        <li>FAQ interaktif dan chatbot bantuan</li>
      </ul>
      
      <h3>Teknologi yang Digunakan:</h3>
      <p>Situs ini menggunakan HTML/CSS dengan teknik modern dan JavaScript vanilla untuk antarmuka yang interaktif. Backend PHP menangani pendaftaran dan manajemen konten yang mudah dikelola oleh tim konferensi.</p>
      
      <h3>Hasil:</h3>
      <p>Landing page ini membantu meningkatkan pendaftaran awal sebesar 60% dibandingkan tahun sebelumnya, dengan pengurangan waktu yang dihabiskan dalam proses pendaftaran dari rata-rata 8 menit menjadi hanya 3 menit.</p>
    `,
    screenshots: [
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png",
      "/src/assets/projects/project-1.png"
    ]
  },
]

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <section id="projects" className="py-24 px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-70"></div>
      
      <div className="container mx-auto mb-16 text-center animate-on-scroll relative z-10">
        <div className="inline-block mb-3">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold">
            Portfolio
          </span>
        </div>
        <Typography variant="h2" color="blue-gray" className="mb-4 text-3xl lg:text-4xl font-bold">
          Proyek Terbaru Saya
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-600 lg:w-6/12 leading-relaxed"
        >
          Berikut adalah sampel dari proyek-proyek yang telah saya kerjakan. Entah Anda memiliki ide aplikasi mobile
          atau website yang membutuhkan pembaruan, saya siap mengubah impian digital Anda menjadi kenyataan.
        </Typography>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
            <ProjectCard 
              {...project} 
              onViewDetails={() => handleOpenDialog(project)}
            />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto mt-20 text-center animate-on-scroll">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group"
        >
          <span className="flex items-center">
            <i className="fab fa-github mr-2 transform transition-transform duration-300 group-hover:rotate-12"></i>
            Lihat Semua Proyek di GitHub
          </span>
        </a>
      </div>
      
      {/* Dialog untuk detail proyek */}
      <Dialog open={open} handler={handleCloseDialog} size="xl" className="bg-white overflow-auto">
        {selectedProject && (
          <>
            <DialogHeader className="flex items-center justify-between border-b border-gray-200 pb-4">
              <Typography variant="h4" color="blue-gray" className="font-bold">
                {selectedProject.title}
              </Typography>
              <button
                onClick={handleCloseDialog}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </DialogHeader>
            <DialogBody className="overflow-auto py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-8 overflow-hidden rounded-xl border border-gray-100">
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">
                    Tentang Proyek
                  </Typography>
                  
                  <div 
                    className="prose max-w-none text-gray-600 mb-8"
                    dangerouslySetInnerHTML={{ __html: selectedProject.fullDescription }}
                  />
                  
                  <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">
                    Screenshot
                  </Typography>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <img 
                          src={screenshot} 
                          alt={`Screenshot ${index + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="sticky top-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <Typography variant="h6" color="blue-gray" className="font-semibold mb-4">
                      Informasi Proyek
                    </Typography>
                    
                    <div className="mb-4">
                      <Typography variant="small" className="font-medium text-gray-700 mb-1">
                        Kategori
                      </Typography>
                      <Chip
                        value={selectedProject.category}
                        size="sm"
                        variant="filled"
                        color="blue"
                        className="text-xs font-medium rounded-full"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Typography variant="small" className="font-medium text-gray-700 mb-2">
                        Teknologi
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            value={tech}
                            size="sm"
                            variant="outlined"
                            color="gray"
                            className="text-xs font-normal"
                          />
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      fullWidth
                      color="blue"
                      className="mt-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      onClick={() => window.open(selectedProject.link, '_blank')}
                    >
                      Lihat Proyek Live
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogBody>
            <DialogFooter className="border-t border-gray-200 pt-4">
              <Button
                variant="outlined"
                color="blue"
                onClick={handleCloseDialog}
                className="mr-2"
              >
                Tutup
              </Button>
              <Button
                color="blue"
                onClick={() => window.open(selectedProject.link, '_blank')}
                className="shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                Lihat Proyek
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </section>
  )
}

export default Projects