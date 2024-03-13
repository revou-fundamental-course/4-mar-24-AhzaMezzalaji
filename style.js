const jenisKelaminInput = document.getElementById("jenis_kelamin");
const beratBadanInput = document.getElementById("berat_badan");
const tinggiBadanInput = document.getElementById("tinggi_badan");
const hasilElement = document.getElementById("hasil");

function hitungBMI() {
  const jenisKelamin = jenisKelaminInput.value;
  const beratBadan = parseFloat(beratBadanInput.value);
  const tinggiBadan = parseFloat(tinggiBadanInput.value);

  if (jenisKelamin === "" || beratBadan === "" || tinggiBadan === "") {
    alert("Mohon isi semua kolom dengan benar!");
    return;
  }

  const bmi = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
  const kategoriBMI = getKategoriBMI(bmi);

  let hasilText = `
        <h2>Hasil Hitung BMI</h2>
        <p>BMI Anda adalah ${bmi.toFixed(2)}.</p>
        <p>Kategori BMI Anda adalah <strong>${kategoriBMI}</strong>.</p>
    `;

  if (kategoriBMI === "Kurus") {
    hasilText += `<p>Anda tergolong kurus. Sebaiknya Anda meningkatkan asupan makanan bergizi dan olahraga teratur untuk mencapai berat badan ideal.</p>`;
  } else if (kategoriBMI === "Normal") {
    hasilText += `<p>Anda memiliki berat badan ideal. Pertahankan pola makan sehat dan olahraga teratur untuk menjaga kesehatan Anda.</p>`;
  } else if (kategoriBMI === "Kegemukan") {
    hasilText += `<p>Anda tergolong kegemukan. Sebaiknya Anda mulai diet dan olahraga teratur untuk mencapai berat badan ideal.</p>`;
  } else {
    hasilText += `<p>Anda tergolong obesitas. Sebaiknya Anda segera berkonsultasi dengan dokter untuk mendapatkan program diet dan olahraga yang sesuai dengan kebutuhan Anda.</p>`;
  }

  hasilElement.innerHTML = hasilText;
}

function getKategoriBMI(bmi) {
  if (bmi < 18.5) {
    return "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Kegemukan";
  } else {
    return "Obesitas";
  }
}

document
  .querySelector("button[type='submit']")
  .addEventListener("click", (event) => {
    event.preventDefault();
    hitungBMI();
  });
