const slider = document.getElementById("slider");
const gambar = slider.getElementsByTagName("img");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
let indeksGambar = 0;

function gantiGambar(arah) {
  gambar[indeksGambar].style.opacity = 0;

  if (arah == "prev") indeksGambar--;
  if (arah == "next") indeksGambar++;
  if (indeksGambar > gambar.length - 1) indeksGambar = 0;
  if (indeksGambar < 0) indeksGambar = gambar.length - 1;

  gambar[indeksGambar].style.opacity = 1;
}

btnPrev.addEventListener('click', () => gantiGambar("prev"));
btnNext.addEventListener('click', () => gantiGambar("next"));