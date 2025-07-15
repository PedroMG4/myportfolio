const track = document.getElementById("carouselTrack");
let speed = 2; // 🔥 velocidad (px por frame)
let position = 0;

// ✅ Clonamos automáticamente hasta llenar el ancho 2 veces
const originalWidth = track.scrollWidth;
while (track.scrollWidth < originalWidth * 2) {
  track.innerHTML += track.innerHTML;
}

function animate() {
  position -= speed;
  
  // 🔥 Cuando se desplaza todo el ancho original, SOLO movemos el track sin resetearlo
  if (Math.abs(position) >= originalWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
