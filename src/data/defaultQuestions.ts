import { Question } from '../types';

import ekosistemImg from '../assets/images/ipas_ekosistem_rantai_makanan_1795060228095.jpg';
import cahayaImg from '../assets/images/ipas_cahaya_pembiasan_1795060228606.jpg';
import bunyiImg from '../assets/images/ipas_bunyi_telepon_benang_1795060229108.jpg';
import pernapasanImg from '../assets/images/ipas_sistem_pernapasan_1795060229829.jpg';
import pencernaanImg from '../assets/images/ipas_sistem_pencernaan_1795060229986.jpg';

/**
 * Bank Soal Standar IPAS Kelas V SD N 3 Pendem (Kurikulum Merdeka Fase C)
 * Lingkup Materi: Bunyi, Cahaya, Ekosistem, Sistem Pernafasan, Sistem Pencernaan
 * Total: 30 Soal
 * - 18 Pilihan Ganda (No. 1 - 18, masing-masing 4 opsi)
 * - 3 Pilihan Ganda Kompleks (No. 19 - 21, masing-masing 3 opsi, >1 jawaban benar)
 * - 9 Pilihan Ganda Kompleks Kategori (No. 22 - 30, masing-masing 3 pernyataan Benar/Salah)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================================
  // PILIHAN GANDA (18 SOAL: ID 1 - 18)
  // ==========================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Pada saat upacara bendera, suara bel sekolah dan suara pembina upacara terdengar sampai ke barisan siswa di lapangan. Sumber bunyi berasal dari benda yang ...',
    options: [
      { id: 'A', text: 'bergetar' },
      { id: 'B', text: 'memantulkan cahaya' },
      { id: 'C', text: 'berubah wujud' },
      { id: 'D', text: 'diam tanpa gerakan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Semua bunyi dihasilkan oleh benda yang bergetar. Getaran tersebut merambat melalui medium (seperti udara) hingga sampai ke telinga pendengar.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Mudah',
    levelKognitif: 'L2',
    imageUrl: bunyiImg,
    imageCaption: 'Percobaan telepon mainan menggunakan dua gelas plastik dan benang yang direntangkan',
    text: 'Perhatikan gambar percobaan dua siswa yang bermain telepon benang di atas! Ketika siswa sebelah kiri berbicara pelan melalui gelas plastik dan benang direntangkan dengan kencang, siswa sebelah kanan dapat mendengar suaranya dengan jelas. Percobaan ini membuktikan bahwa bunyi dapat merambat melalui ...',
    options: [
      { id: 'A', text: 'ruang hampa udara' },
      { id: 'B', text: 'benda padat (benang dan gelas)' },
      { id: 'C', text: 'cahaya matahari' },
      { id: 'D', text: 'benda cair di dalam gelas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Getaran suara merambat dari dasar gelas plastik menuju benang yang tegang (benda padat), lalu menggetarkan gelas plastik penerima sehingga terdengar oleh telinga teman.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Di dalam gedung bioskop atau studio musik, bagian dindingnya sering dilapisi dengan bahan berpori seperti busa, karpet, atau kain wol. Tujuan utama pemasangan bahan-bahan tersebut adalah untuk ...',
    options: [
      { id: 'A', text: 'mempercepat perambatan bunyi ke luar ruangan' },
      { id: 'B', text: 'memperbesar gaung agar suara terasa berulang' },
      { id: 'C', text: 'menyerap bunyi sehingga tidak terjadi gaung atau gema yang mengganggu' },
      { id: 'D', text: 'memantulkan seluruh gelombang suara ke langit-langit' },
    ],
    correctAnswer: 'C',
    explanation:
      'Benda berpermukaan lunak dan berpori (busa, karpet, wol, gabus) berfungsi sebagai peredam bunyi agar pantulan bunyi (gaung/kerdam) tidak merusak kejelasan suara di dalam ruangan.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Saat pagi hari yang cerah, berkas sinar matahari yang masuk melalui celah jendela ruang kelas terlihat membentuk garis-garis cahaya yang lurus. Peristiwa tersebut menunjukkan sifat cahaya yaitu ...',
    options: [
      { id: 'A', text: 'cahaya dapat diuraikan' },
      { id: 'B', text: 'cahaya merambat lurus' },
      { id: 'C', text: 'cahaya dapat dibiaskan' },
      { id: 'D', text: 'cahaya dapat dipantulkan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berkas cahaya matahari yang masuk melalui celah sempit atau jendela tampak berupa garis lurus yang membuktikan sifat cahaya merambat lurus.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    imageUrl: cahayaImg,
    imageCaption: 'Pensil yang dimasukkan ke dalam gelas bening berisi air',
    text: 'Perhatikan gambar di atas! Sebuah pensil utuh yang dimasukkan ke dalam gelas berisi air jernih terlihat seolah-olah patah atau bengkok pada batas permukaan air. Peristiwa tersebut terjadi karena adanya sifat cahaya yaitu ...',
    options: [
      { id: 'A', text: 'cahaya dapat diserap oleh air' },
      { id: 'B', text: 'cahaya menembus benda gelap' },
      { id: 'C', text: 'cahaya dapat dibiaskan (dibelokkan) saat melewati dua medium berbeda' },
      { id: 'D', text: 'cahaya diuraikan menjadi tujuh warna pelangi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pembiasan (refraksi) adalah pembelokan arah rambat cahaya ketika melewati dua medium dengan kerapatan berbeda, yaitu dari udara ke air, sehingga pensil tampak bengkok atau patah.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Pada kendaraan bermotor, kaca spion dibuat menggunakan cermin cembung. Alasan pemilihan cermin cembung sebagai kaca spion adalah karena sifat bayangannya yang ...',
    options: [
      { id: 'A', text: 'maya, tegak, dan diperkecil sehingga jangkauan pandang lebih luas' },
      { id: 'B', text: 'nyata, terbalik, dan diperbesar agar kendaraan di belakang tampak raksasa' },
      { id: 'C', text: 'maya, tegak, dan sama besar seperti di cermin datar' },
      { id: 'D', text: 'nyata, tegak, dan berjarak sangat dekat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cermin cembung menghasilkan bayangan yang selalu maya, tegak, dan diperkecil sehingga mampu menangkap area pandang jalan di belakang kendaraan secara lebih luas.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Sukar',
    levelKognitif: 'L3',
    text: 'Bagian mata manusia yang berfungsi mengatur banyaknya cahaya yang masuk ke dalam bola mata agar kita tidak silau di tempat terang dan tetap dapat melihat di tempat redup adalah ...',
    options: [
      { id: 'A', text: 'retina' },
      { id: 'B', text: 'kornea' },
      { id: 'C', text: 'pupil dan iris' },
      { id: 'D', text: 'saraf optik' },
    ],
    correctAnswer: 'C',
    explanation:
      'Iris mengatur ukuran besar kecilnya pupil (celah tempat masuknya cahaya). Saat cahaya terang pupil mengecil, sedangkan di tempat gelap pupil membesar untuk menerima cahaya lebih banyak.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Mudah',
    levelKognitif: 'L2',
    imageUrl: ekosistemImg,
    imageCaption: 'Skema rantai makanan pada ekosistem sawah',
    text: 'Perhatikan gambar rantai makanan pada ekosistem sawah di atas! Pada gambar tersebut, peran tanaman padi dan katak secara berturut-turut adalah sebagai ...',
    options: [
      { id: 'A', text: 'produsen dan konsumen tingkat I' },
      { id: 'B', text: 'produsen dan konsumen tingkat II' },
      { id: 'C', text: 'konsumen tingkat I dan konsumen tingkat II' },
      { id: 'D', text: 'konsumen puncak dan pengurai' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada rantai makanan sawah di gambar: Padi = produsen, Belalang = konsumen tingkat I, Katak = konsumen tingkat II, Ular = konsumen tingkat III, dan Elang = konsumen puncak.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Dalam suatu ekosistem kolam terdapat komponen berupa air, cahaya matahari, batu, ikan koi, teratai, dan suhu udara. Komponen yang termasuk komponen biotik adalah ...',
    options: [
      { id: 'A', text: 'air dan batu' },
      { id: 'B', text: 'ikan koi dan teratai' },
      { id: 'C', text: 'cahaya matahari dan air' },
      { id: 'D', text: 'suhu udara dan batu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Komponen biotik adalah komponen makhluk hidup dalam ekosistem (seperti ikan koi dan tumbuhan teratai), sedangkan air, batu, cahaya matahari, dan suhu udara merupakan komponen abiotik.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Seekor kerbau di padang rumput sering dihinggapi burung jalak di punggungnya. Burung jalak memakan kutu yang ada di tubuh kerbau, sementara kerbau merasa nyaman karena tubuhnya bersih dari kutu. Hubungan kedua makhluk hidup tersebut disebut simbiosis ...',
    options: [
      { id: 'A', text: 'parasitisme' },
      { id: 'B', text: 'komensalisme' },
      { id: 'C', text: 'mutualisme' },
      { id: 'D', text: 'predasi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Simbiosis mutualisme adalah hubungan timbal balik antara dua makhluk hidup yang saling menguntungkan: burung jalak mendapat makanan (kutu), sedangkan kerbau terbebas dari rasa gatal akibat kutu.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sukar',
    levelKognitif: 'L3',
    text: 'Di suatu ekosistem kebun terdapat rantai makanan: Tanaman sawi → Ulat → Burung pipit → Ular. Apabila populasi burung pipit menurun drastis karena perburuan liar, dampak jangka pendek yang paling mungkin terjadi pada ekosistem tersebut adalah ...',
    options: [
      { id: 'A', text: 'populasi ulat meningkat tajam sehingga banyak tanaman sawi rusak' },
      { id: 'B', text: 'populasi tanaman sawi tumbuh makin subur karena dimakan ulat' },
      { id: 'C', text: 'populasi ular meningkat pesat karena makanan melimpah' },
      { id: 'D', text: 'populasi ulat langsung punah dalam waktu singkat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jika burung pipit berkurang, pemangsa ulat berkurang sehingga populasi ulat meledak dan merusak tanaman sawi. Sementara itu, populasi ular juga akan menurun karena kekurangan mangsa (burung pipit).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    imageUrl: pernapasanImg,
    imageCaption: 'Diagram organ-organ pada sistem pernafasan manusia',
    text: 'Perhatikan gambar sistem pernafasan manusia di atas! Di bagian bawah kedua paru-paru terdapat otot melengkung berwarna jingga yang memisahkan rongga dada dengan rongga perut. Saat otot tersebut berkontraksi (mendatar), rongga dada membesar dan udara masuk ke paru-paru. Nama otot tersebut adalah ...',
    options: [
      { id: 'A', text: 'trakea' },
      { id: 'B', text: 'bronkus' },
      { id: 'C', text: 'diafragma' },
      { id: 'D', text: 'alveolus' },
    ],
    correctAnswer: 'C',
    explanation:
      'Otot melengkung di bawah paru-paru yang memisahkan rongga dada dan rongga perut adalah diafragma. Kontraksi diafragma memperbesar volume rongga dada sehingga udara terhirup masuk (inspirasi).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Urutan jalur masuknya udara saat manusia bernapas dari luar tubuh menuju paru-paru yang benar adalah ...',
    options: [
      { id: 'A', text: 'hidung → kerongkongan → lambung → paru-paru' },
      { id: 'B', text: 'hidung → faring/laring → trakea → bronkus → paru-paru (alveolus)' },
      { id: 'C', text: 'mulut → trakea → kerongkongan → alveolus' },
      { id: 'D', text: 'hidung → bronkus → trakea → alveolus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Udara masuk melalui rongga hidung, melewati faring dan laring, turun melalui trakea (batang tenggorokan), bercabang ke bronkus dan bronkiolus, hingga sampai di alveolus di dalam paru-paru.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Pertukaran gas oksigen (O₂) dari udara yang dihirup dengan gas karbon dioksida (CO₂) dari dalam darah terjadi pada bagian ujung paru-paru yang berbentuk gelembung-gelembung halus berdinding tipis. Bagian tersebut dinamakan ...',
    options: [
      { id: 'A', text: 'laring' },
      { id: 'B', text: 'trakea' },
      { id: 'C', text: 'alveolus' },
      { id: 'D', text: 'selaput lendir hidung' },
    ],
    correctAnswer: 'C',
    explanation:
      'Alveolus adalah kantung udara kecil di ujung bronkiolus yang dikelilingi pembuluh kapiler darah, tempat berlangsungnya pertukaran oksigen dan karbon dioksida.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Di dalam rongga mulut, makanan mengalami pencernaan secara mekanis dan kimiawi. Pencernaan secara mekanis dilakukan oleh gigi dan lidah, sedangkan pencernaan secara kimiawi dibantu oleh enzim amilase (ptialin) yang terdapat pada air liur untuk mengubah ...',
    options: [
      { id: 'A', text: 'protein menjadi asam amino' },
      { id: 'B', text: 'lemak menjadi asam lemak' },
      { id: 'C', text: 'zat tepung (karbohidrat) menjadi zat gula' },
      { id: 'D', text: 'vitamin menjadi mineral' },
    ],
    correctAnswer: 'C',
    explanation:
      'Enzim amilase (ptialin) dalam air liur di mulut berfungsi memecah zat tepung (amilum/karbohidrat kompleks) menjadi gula sederhana (maltosa).',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    imageUrl: pencernaanImg,
    imageCaption: 'Diagram organ-organ pada sistem pencernaan manusia',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Setelah makanan melewati saluran panjang kerongkongan, makanan masuk ke organ berbentuk seperti kantong huruf "J" (berwarna krem/oranye pada gambar). Fungsi utama organ tersebut adalah ...',
    options: [
      { id: 'A', text: 'menyerap seluruh air dan membentuk feses' },
      { id: 'B', text: 'mengaduk makanan dan membunuh kuman dengan asam klorida (HCl) serta enzim pencernaan' },
      { id: 'C', text: 'menyerap sari-sari makanan untuk diedarkan ke seluruh tubuh' },
      { id: 'D', text: 'menghasilkan gas oksigen untuk peredaran darah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Organ berbentuk huruf "J" tersebut adalah lambung. Lambung mencerna makanan secara mekanis (gerak meremas) dan kimiawi menggunakan asam klorida (HCl) untuk membunuh kuman serta enzim pepsin dan renin.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Proses penyerapan sari-sari makanan hasil pencernaan untuk diedarkan ke seluruh tubuh oleh darah berlangsung paling utama di dalam organ ...',
    options: [
      { id: 'A', text: 'kerongkongan' },
      { id: 'B', text: 'lambung' },
      { id: 'C', text: 'usus halus' },
      { id: 'D', text: 'usus besar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Usus halus memiliki dinding berlipat-lipat dengan jonjot usus (vili) yang berfungsi menyerap sari-sari makanan (glukosa, asam amino, asam lemak, vitamin, dan mineral) ke dalam aliran darah.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Sukar',
    levelKognitif: 'L3',
    text: 'Seseorang sering mengeluh sulit buang air besar (sembelit/konstipasi) karena feses menjadi keras dan kering. Kebiasaan pola makan yang paling tepat untuk mencegah gangguan sistem pencernaan tersebut adalah ...',
    options: [
      { id: 'A', text: 'mengonsumsi banyak makanan berserat dari sayur serta buah dan cukup minum air putih' },
      { id: 'B', text: 'mengurangi konsumsi air putih dan memperbanyak makanan cepat saji' },
      { id: 'C', text: 'selalu makan makanan yang sangat pedas sebelum tidur' },
      { id: 'D', text: 'menahan buang air besar selama beberapa hari berturut-turut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sembelit terjadi ketika usus besar menyerap terlalu banyak air dari sisa makanan karena kurang serat dan kurang cairan. Mengonsumsi sayur, buah kaya serat, dan cukup air putih melancarkan kerja usus besar.',
  },

  // ==========================================================
  // PILIHAN GANDA KOMPLEKS / PGK (3 SOAL: ID 19 - 21)
  // Ketentuan: Setiap soal memiliki 3 pilihan jawaban, >1 benar
  // ==========================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Alat musik tradisional maupun modern menghasilkan bunyi melalui getaran pada bagian tertentu. Pilihlah seluruh pernyataan yang BENAR mengenai cara benda menghasilkan bunyi dan pemanfaatan bunyi pantul:',
    options: [
      { id: 'A', text: 'Senar gitar dan sasando menghasilkan bunyi karena senarnya dipetik sehingga bergetar.' },
      { id: 'B', text: 'Bunyi dapat merambat paling cepat melalui ruang hampa udara di luar angkasa.' },
      { id: 'C', text: 'Kelelawar dan lumba-lumba memanfaatkan pemantulan gelombang bunyi (ekolokasi) untuk mendeteksi mangsa dan arah.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• Pernyataan A BENAR: Senar yang dipetik bergetar dan menghasilkan bunyi.\n• Pernyataan B SALAH: Bunyi membutuhkan medium perantara dan TIDAK dapat merambat di ruang hampa udara.\n• Pernyataan C BENAR: Kelelawar dan lumba-lumba menggunakan sistem sonar/ekolokasi berbasis pemantulan bunyi.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sukar',
    levelKognitif: 'L3',
    imageUrl: ekosistemImg,
    imageCaption: 'Rantai makanan pada ekosistem sawah: Padi → Belalang → Katak → Ular → Elang',
    text: 'Amati kembali gambar rantai makanan pada ekosistem sawah di atas! Pilihlah seluruh kesimpulan yang BENAR berdasarkan hubungan antarmakhluk hidup pada gambar tersebut:',
    options: [
      { id: 'A', text: 'Tanaman padi berperan sebagai produsen karena mampu membuat makanannya sendiri melalui fotosintesis.' },
      { id: 'B', text: 'Katak dan ular sama-sama berperan sebagai hewan pemakan tumbuhan (herbivora).' },
      { id: 'C', text: 'Jika seluruh ular di sawah diburu hingga habis, populasi katak berpotensi meningkat sementara populasi elang dapat menurun.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '• Pernyataan A BENAR: Padi adalah tumbuhan hijau penghasil makanan sendiri (produsen).\n• Pernyataan B SALAH: Katak (pemakan belalang) dan ular (pemakan katak) adalah karnivora, bukan herbivora.\n• Pernyataan C BENAR: Hilangnya ular membuat pemangsa katak berkurang (katak naik) dan sumber makanan elang berkurang (elang turun).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Menjaga kesehatan organ pernafasan sangat penting agar tubuh mendapatkan oksigen secara optimal. Pilihlah seluruh kebiasaan yang BENAR untuk memelihara kesehatan sistem pernafasan manusia:',
    options: [
      { id: 'A', text: 'Menghindari asap rokok dan memakai masker saat berada di lingkungan berdebu atau berpolusi.' },
      { id: 'B', text: 'Rutin berolahraga dan menanam tanaman hijau di sekitar rumah untuk menjaga kualitas udara.' },
      { id: 'C', text: 'Membiasakan bernapas melalui mulut secara terus-menerus agar debu langsung masuk ke paru-paru.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Pernyataan A BENAR: Menghindari asap rokok dan memakai masker melindungi saluran pernafasan dari zat beracun dan partikel debu.\n• Pernyataan B BENAR: Olahraga melatih kapasitas paru-paru dan tanaman menghasilkan oksigen.\n• Pernyataan C SALAH: Bernapas sebaiknya lewat hidung karena hidung memiliki rambut halus dan selaput lendir penyaring debu serta penghangat udara.',
  },

  // ==========================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: ID 22 - 30)
  // Ketentuan: Setiap soal memiliki 3 deskripsi (Benar / Salah)
  // ==========================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Saat mendengar suara musik atau suara guru di kelas, organ telinga manusia bekerja menangkap gelombang bunyi dan meneruskannya ke otak. Tentukan Benar atau Salah untuk setiap pernyataan mengenai bagian telinga berikut:',
    statements: [
      {
        id: 's1',
        text: 'Daun telinga berfungsi menangkap dan mengumpulkan gelombang bunyi dari luar untuk diteruskan ke lubang telinga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gendang telinga akan bergetar ketika terkena gelombang bunyi yang masuk melalui saluran telinga.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Saluran Eustachius berfungsi menghasilkan suara keras di dalam kepala.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Daun telinga mengumpulkan gelombang bunyi (BENAR).\n2. Gendang telinga bergetar saat menerima bunyi dan meneruskannya ke tulang pendengaran (BENAR).\n3. Saluran Eustachius berfungsi menyeimbangkan tekanan udara antara telinga tengah dan rongga mulut/faring, bukan menghasilkan suara (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Bunyi',
    elemen: 'Bunyi',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Rani melakukan percobaan memukul garpu tala lalu mencelupkannya ke air, serta mendengarkan suara ketukan meja dengan menempelkan telinga langsung ke permukaan meja kayu. Tentukan Benar atau Salah dari pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Air yang beriak saat disentuh garpu tala membuktikan bahwa benda yang berbunyi sedang bergetar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Suara ketukan meja terdengar lebih jelas saat telinga menempel di meja karena bunyi merambat lebih baik melalui benda padat daripada udara.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tinggi rendahnya nada suatu bunyi ditentukan oleh kuat lemahnya amplitudo, bukan oleh frekuensi getaran.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Riak air membuktikan garpu tala bergetar saat berbunyi (BENAR).\n2. Kecepatan rambat bunyi pada benda padat lebih cepat dan jelas dibanding gas/udara (BENAR).\n3. Tinggi rendah nada ditentukan oleh frekuensi (banyak getaran per detik), sedangkan kuat lemah bunyi ditentukan oleh amplitudo (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Edo menyorotkan lampu senter ke arah cermin datar, gelas kaca bening, dan buku tebal yang diletakkan di atas meja. Tentukan Benar atau Salah dari setiap pernyataan sifat cahaya berikut:',
    statements: [
      {
        id: 's1',
        text: 'Cahaya senter yang mengenai cermin datar akan dipantulkan kembali sehingga dapat diarahkan ke dinding.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Cahaya senter dapat menembus buku tebal dengan sempurna tanpa membentuk bayangan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Cahaya senter dapat menembus gelas kaca bening karena kaca termasuk benda bening (transparan).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Cermin datar memantulkan cahaya secara teratur (BENAR).\n2. Buku tebal adalah benda gelap (opak) yang menghalangi cahaya sehingga membentuk bayangan di belakangnya (SALAH).\n3. Gelas kaca bening meneruskan cahaya karena bersifat transparan (BENAR).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Cahaya',
    elemen: 'Cahaya',
    difficulty: 'Sedang',
    levelKognitif: 'L3',
    text: 'Setelah hujan reda pada sore hari, sering terlihat pelangi berwarna-warni di langit saat matahari masih bersinar. Tentukan Benar atau Salah dari pernyataan mengenai fenomena cahaya dan penglihatan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Terbentuknya pelangi membuktikan bahwa cahaya putih matahari dapat diuraikan menjadi berbagai warna (dispersi cahaya) oleh titik-titik air hujan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kita dapat melihat benda di sekitar karena cahaya yang mengenai benda dipantulkan ke dalam mata kita.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Mata manusia tetap dapat melihat warna benda dengan jelas di ruangan yang gelap gulita tanpa ada sumber cahaya sedikit pun.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pelangi terjadi akibat pembiasan dan penguraian (dispersi) cahaya matahari oleh butiran air di udara (BENAR).\n2. Syarat mata melihat benda adalah adanya cahaya yang memantul dari benda masuk ke mata (BENAR).\n3. Tanpa cahaya sama sekali, tidak ada cahaya yang dipantulkan ke mata sehingga benda tidak terlihat (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    text: 'Di halaman sekolah terdapat sebuah taman kecil yang dihuni oleh rumput, pohon mangga, kupu-kupu, belalang, burung kutilang, jamur, tanah, dan sinar matahari. Tentukan Benar atau Salah untuk pernyataan tentang ekosistem taman tersebut:',
    statements: [
      {
        id: 's1',
        text: 'Rumput dan pohon mangga berperan sebagai produsen karena menghasilkan energi makanan menggunakan bantuan sinar matahari.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jamur dan bakteri tanah berperan sebagai pengurai (dekomposer) yang menguraikan sisa makhluk hidup menjadi zat hara penyubur tanah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kupu-kupu yang mengisap nektar bunga sambil membantu penyerbukan bunga merupakan contoh simbiosis parasitisme.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Rumput dan pohon mangga berfotosintesis menghasilkan makanan sehingga merupakan produsen (BENAR).\n2. Jamur dan bakteri adalah dekomposer yang menguraikan bangkai/serasah daun menjadi nutrisi tanah (BENAR).\n3. Kupu-kupu mendapat nektar dan bunga terbantu penyerbukannya, sehingga keduanya untung — ini simbiosis mutualisme, bukan parasitisme (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    imageUrl: pernapasanImg,
    imageCaption: 'Diagram anatomi organ sistem pernafasan manusia',
    text: 'Perhatikan gambar organ sistem pernafasan manusia di atas! Evaluasi dan tentukan Benar atau Salah untuk setiap pernyataan berikut mengenai proses bernapas manusia:',
    statements: [
      {
        id: 's1',
        text: 'Saluran panjang berbentuk pipa bercincin tulang rawan di bagian leher yang menghubungkan tenggorokan ke cabang paru-paru disebut trakea.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat kita menghembuskan napas (ekspirasi), otot diafragma kembali melengkung ke atas dan rongga dada mengecil.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Udara yang dihembuskan keluar oleh paru-paru mengandung lebih banyak oksigen murni dibandingkan udara yang dihirup masuk.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pipa bercincin tulang rawan di bawah laring adalah trakea (batang tenggorokan) (BENAR).\n2. Saat ekspirasi, otot diafragma relaksasi (melengkung naik), rongga dada mengecil, dan udara terdorong keluar (BENAR).\n3. Udara yang dihembuskan kaya akan karbon dioksida (CO₂) dan uap air, bukan lebih banyak oksigen (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Sistem Pernafasan',
    elemen: 'Sistem Pernafasan',
    difficulty: 'Sukar',
    levelKognitif: 'L3',
    text: 'Gangguan pada sistem pernafasan dapat disebabkan oleh kuman penyakit, alergi, maupun pencemaran udara. Tentukan Benar atau Salah untuk setiap pernyataan mengenai gangguan pernafasan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Asma merupakan gangguan penyempitan saluran pernafasan yang sering dipicu oleh alergi debu, udara dingin, atau bulu hewan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penyakit tuberkulosis (TBC) disebabkan oleh infeksi bakteri yang menyerang organ paru-paru.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menghirup asap pembakaran sampah plastik setiap hari dapat membuat jaringan alveolus paru-paru menjadi semakin kuat dan sehat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Asma menyebabkan penyempitan bronkus/saluran napas akibat reaksi alergi atau iritasi (BENAR).\n2. TBC disebabkan oleh bakteri Mycobacterium tuberculosis yang menyerang paru-paru (BENAR).\n3. Asap pembakaran plastik mengandung zat beracun berbahaya yang merusak paru-paru (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Sedang',
    levelKognitif: 'L2',
    imageUrl: pencernaanImg,
    imageCaption: 'Urutan organ pencernaan pada tubuh manusia',
    text: 'Perhatikan gambar sistem pencernaan manusia di atas! Tentukan Benar atau Salah untuk setiap pernyataan mengenai fungsi organ-organ pencernaan pada gambar tersebut:',
    statements: [
      {
        id: 's1',
        text: 'Saluran panjang yang menghubungkan rongga mulut dengan lambung dan mendorong makanan menggunakan gerak peristaltik adalah kerongkongan (esofagus).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Organ berlekuk-lekuk berwarna kuning di bagian tengah perut adalah usus halus yang berfungsi menyerap sari-sari makanan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Organ berwarna hijau yang mengelilingi bagian tengah perut berfungsi mengunyah makanan keras menjadi potongan kecil.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kerongkongan (esofagus) mendorong makanan menuju lambung dengan gerak meremas yang disebut gerak peristaltik (BENAR).\n2. Usus halus (berwarna kuning pada gambar) merupakan tempat pencernaan lanjutan dan penyerapan nutrisi makanan (BENAR).\n3. Organ berwarna hijau pada gambar adalah usus besar yang berfungsi menyerap kembali air dan garam mineral serta membusukkan sisa makanan, bukan mengunyah makanan (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Sistem Pencernaan',
    elemen: 'Sistem Pencernaan',
    difficulty: 'Mudah',
    levelKognitif: 'L1',
    text: 'Menjaga kebersihan makanan dan pola makan teratur membantu mencegah gangguan pada sistem pencernaan. Tentukan Benar atau Salah dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Mencuci tangan dengan sabun sebelum makan membantu mencegah penyakit diare akibat masuknya kuman ke saluran pencernaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Penyakit maag (tukak lambung) dapat dicegah dengan membiasakan jadwal makan yang teratur dan tidak sering menunda makan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menelan makanan tanpa dikunyah terlebih dahulu membuat kerja lambung dan usus menjadi jauh lebih ringan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Mencuci tangan sebelum makan mencegah kuman penyebab diare masuk ke sistem pencernaan (BENAR).\n2. Makan teratur menjaga asam lambung tidak mengiritasi dinding lambung sehingga mencegah maag (BENAR).\n3. Makanan yang tidak dikunyah halus di mulut justru memperberat kerja lambung dan usus dalam mencerna (SALAH).',
  },
];
