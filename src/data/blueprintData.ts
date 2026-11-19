import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas V) Mata Pelajaran IPAS
 * SD N 3 Pendem
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Kelas V
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan sumber bunyi dan sifat dasar bunyi yang berasal dari getaran benda.',
    indikatorSoal:
      'Disajikan konteks bunyi bel saat upacara bendera di sekolah, peserta didik dapat menentukan asal mula terjadinya bunyi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis medium perambatan bunyi melalui benda padat, cair, dan gas.',
    indikatorSoal:
      'Disajikan gambar percobaan telepon benang dua siswa, peserta didik dapat menyimpulkan jenis medium perambatan bunyi pada percobaan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan sifat pemantulan dan penyerapan bunyi dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan ilustrasi pelapisan dinding studio musik dengan busa atau karpet, peserta didik dapat menjelaskan tujuan pemasangan bahan peredam bunyi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sifat-sifat cahaya dalam peristiwa sehari-hari.',
    indikatorSoal:
      'Disajikan narasi berkas sinar matahari yang masuk melalui celah jendela ruang kelas, peserta didik dapat menentukan sifat cahaya merambat lurus.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan peristiwa pembiasan cahaya ketika melewati dua medium berbeda.',
    indikatorSoal:
      'Disajikan gambar pensil di dalam gelas berisi air jernih, peserta didik dapat menentukan sifat cahaya yang menyebabkan pensil terlihat bengkok.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat mengaitkan sifat pemantulan cahaya pada cermin cembung dengan pemanfaatannya.',
    indikatorSoal:
      'Disajikan penggunaan cermin cembung pada kaca spion kendaraan bermotor, peserta didik dapat menjelaskan alasan pemilihannya berdasarkan sifat bayangan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis bagian-bagian mata manusia dan fungsinya dalam menerima cahaya.',
    indikatorSoal:
      'Disajikan fungsi penyesuaian intensitas cahaya di tempat terang dan redup, peserta didik dapat menentukan bagian mata yang berperan mengaturnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi peran makhluk hidup sebagai produsen, konsumen, dan pengurai pada rantai makanan.',
    indikatorSoal:
      'Disajikan gambar rantai makanan pada ekosistem sawah, peserta didik dapat menentukan peran tanaman padi dan katak secara berturut-turut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik dan abiotik penyusun ekosistem.',
    indikatorSoal:
      'Disajikan daftar komponen dalam ekosistem kolam, peserta didik dapat memilih komponen yang termasuk komponen biotik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan bentuk interaksi simbiosis antarmakhluk hidup dalam ekosistem.',
    indikatorSoal:
      'Disajikan narasi hubungan antara kerbau dan burung jalak, peserta didik dapat menentukan jenis simbiosis yang terjadi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak perubahan populasi salah satu komponen terhadap keseimbangan jaring-jaring/rantai makanan.',
    indikatorSoal:
      'Disajikan skema rantai makanan kebun dan kasus menurunnya populasi burung pipit, peserta didik dapat memprediksi dampak jangka pendek pada ekosistem.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi organ-organ pernafasan manusia dan mekanisme kerja diafragma.',
    indikatorSoal:
      'Disajikan gambar diagram organ sistem pernafasan manusia dan ciri otot di bawah paru-paru, peserta didik dapat menentukan nama organ tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan alur perjalanan udara pada sistem pernafasan manusia.',
    indikatorSoal:
      'Disajikan pilihan urutan organ pernafasan, peserta didik dapat menentukan urutan jalur masuknya udara saat inspirasi dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi organ pernafasan tempat pertukaran gas oksigen dan karbon dioksida.',
    indikatorSoal:
      'Disajikan ciri gelembung halus berdinding tipis di dalam paru-paru tempat pertukaran gas, peserta didik dapat mengidentifikasi nama bagian tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan proses pencernaan mekanis dan kimiawi beserta enzim yang bekerja.',
    indikatorSoal:
      'Disajikan proses pencernaan di rongga mulut, peserta didik dapat menjelaskan fungsi enzim amilase (ptialin) dalam air liur.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Sistem Pencernaan',
    elemen_desc: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi organ-organ utama dalam sistem pencernaan manusia.',
    indikatorSoal:
      'Disajikan gambar diagram sistem pencernaan manusia yang menyoroti organ berbentuk huruf J, peserta didik dapat menentukan fungsi utama organ lambung.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  } as BlueprintDefinition,
  17: {
    elemen: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi organ tempat berlangsungnya penyerapan sari-sari makanan.',
    indikatorSoal:
      'Disajikan deskripsi proses penyerapan sari-sari makanan ke dalam aliran darah, peserta didik dapat menentukan organ pencernaan yang berperan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis gangguan sistem pencernaan serta cara pencegahannya melalui pola hidup sehat.',
    indikatorSoal:
      'Disajikan kasus keluhan sembelit (konstipasi), peserta didik dapat menganalisis kebiasaan pola makan yang tepat untuk mencegah gangguan tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi beberapa pernyataan tentang sumber bunyi, medium perambatan, dan pemanfaatan pemantulan bunyi.',
    indikatorSoal:
      'Disajikan 3 pilihan pernyataan tentang alat musik petik, perambatan di ruang hampa, dan ekolokasi hewan, peserta didik dapat memilih lebih dari satu pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran trofik dan dampak ketidakseimbangan populasi pada rantai makanan.',
    indikatorSoal:
      'Disajikan gambar rantai makanan sawah dan 3 pilihan kesimpulan, peserta didik dapat memilih lebih dari satu kesimpulan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat menilai kebiasaan yang tepat untuk memelihara kesehatan organ pernafasan manusia.',
    indikatorSoal:
      'Disajikan 3 pilihan kebiasaan terkait kesehatan pernafasan, peserta didik dapat memilih lebih dari satu kebiasaan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi bagian-bagian telinga manusia beserta fungsinya dalam proses mendengar.',
    indikatorSoal:
      'Disajikan 3 deskripsi fungsi daun telinga, gendang telinga, dan saluran Eustachius, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bunyi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis sifat getaran, kecepatan rambat bunyi di berbagai medium, serta tinggi rendah nada.',
    indikatorSoal:
      'Disajikan narasi percobaan garpu tala dan ketukan meja kayu beserta 3 pernyataan, peserta didik dapat menentukan Benar atau Salah pada masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan interaksi cahaya dengan cermin, benda bening, dan benda gelap.',
    indikatorSoal:
      'Disajikan narasi percobaan cahaya senter terhadap cermin, buku tebal, dan gelas kaca, peserta didik dapat menentukan Benar atau Salah pada 3 pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Cahaya',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peristiwa penguraian cahaya (dispersi) dan syarat terjadinya penglihatan.',
    indikatorSoal:
      'Disajikan fenomena pelangi setelah hujan beserta 3 pernyataan tentang dispersi dan proses melihat, peserta didik dapat menentukan Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi peran produsen, dekomposer, serta jenis simbiosis dalam ekosistem taman.',
    indikatorSoal:
      'Disajikan deskripsi komponen ekosistem taman sekolah dan 3 pernyataan, peserta didik dapat menentukan Benar atau Salah untuk masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis struktur trakea, mekanisme ekspirasi, dan komposisi gas pernafasan.',
    indikatorSoal:
      'Disajikan gambar diagram sistem pernafasan manusia dan 3 pernyataan terkait trakea, diafragma saat ekspirasi, dan udara buangan, peserta didik dapat menilai kebenaran tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Sistem Pernafasan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penyebab gangguan pernafasan seperti asma, TBC, dan dampak polusi udara.',
    indikatorSoal:
      'Disajikan 3 deskripsi tentang penyakit asma, TBC, dan paparan asap plastik, peserta didik dapat menentukan Benar atau Salah untuk masing-masing pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis fungsi kerongkongan, usus halus, dan usus besar berdasarkan diagram organ pencernaan.',
    indikatorSoal:
      'Disajikan gambar diagram sistem pencernaan manusia beserta 3 pernyataan fungsi organ, peserta didik dapat menentukan Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Sistem Pencernaan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan perilaku hidup bersih dan pola makan sehat untuk menjaga organ pencernaan.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai pencegahan diare, maag, dan kebiasaan mengunyah makanan, peserta didik dapat menentukan Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} dalam pelajaran IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus permasalahan tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bunyi') || t.includes('telinga') || t.includes('suara')) {
    return 'Bunyi';
  }
  if (t.includes('cahaya') || t.includes('mata') || t.includes('cermin')) {
    return 'Cahaya';
  }
  if (t.includes('ekosistem') || t.includes('rantai') || t.includes('simbiosis')) {
    return 'Ekosistem';
  }
  if (t.includes('nafas') || t.includes('napas') || t.includes('paru')) {
    return 'Sistem Pernafasan';
  }
  if (t.includes('cerna') || t.includes('lambung') || t.includes('usus')) {
    return 'Sistem Pencernaan';
  }
  return 'Bunyi';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
