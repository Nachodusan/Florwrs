// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "", time: 0 },
  { text: "", time: 3 },
  { text: "", time: 8 },
  { text: "", time: 12 },
  { text: "Baby, love never felt so good", time: 16 },
  { text: "And I doubt if it ever could", time: 20 },
  { text: "Not like you hold me, hold me", time: 24 },
  { text: "Oh baby, love never felt so fine", time: 28 },
  { text: "And I doubt if it's never mine", time: 32 },
  { text: "Not like you hold me, hold me", time: 36 },
  { text: "And the night is gonna be just fine", time: 40 },
  { text: "Gotta fly, gotta see, can't believe", time: 44 },
  { text: "I can't take it, cause", time: 48 },
  { text: "Baby, every time I love you", time: 52 },
  { text: "In and out of my life, in out baby", time: 56 },
  { text: "Tell me, if you really love me", time: 60 },
  { text: "It's in and out of my life, in out baby", time: 64 },
  { text: "So baby, love never felt so good", time: 68 },
  { text: "Baby, love never felt so fine", time: 72 },
  { text: "And I doubt if it was ever mine", time: 76 },
  { text: "Not like you hold me, hold me", time: 80 },
  { text: "Oh baby, love never felt so good", time: 84 },
  { text: "And I doubt if it ever could", time: 88 },
  { text: "Not like you hold me, hold me", time: 92 },
  { text: "And the night through the thick and thin", time: 96 },
  { text: "Gotta fly, gotta see, can't believe", time: 100 },
  { text: "I can't take it cause", time: 104 },
  { text: "Baby, every time I love you", time: 108 },
  { text: "In and out of my life, in out baby", time: 112 },
  { text: "Tell me, if you really love me", time: 116 },
  { text: "It's in and out of my life, in out baby", time: 120 },
  { text: "So baby, love never felt so good", time: 124 },
  { text: "Dancing", time: 128 },
  { text: "Let me see you move, come on", time: 132 },
  { text: "Let me see you move", time: 136 },
  { text: "Dancing", time: 140 },
  { text: "Let me see you move, come on", time: 144 },
  { text: "I said let me see you move", time: 148 },
  { text: "Michael", time: 152 },
  { text: "And the night, that is good", time: 156 },
  { text: "Gotta fly, gotta see, can't believe", time: 160 },
  { text: "I can't take it cause", time: 164 },
  { text: "Baby, every time I love you", time: 168 },
  { text: "In and out of my life, in out baby", time: 172 },
  { text: "Tell me, if you really love me", time: 176 },
  { text: "It's in and out of my life, in out baby", time: 180 },
  { text: "So baby, love never felt so good", time: 184 },
  { text: "Baby, every time I love you", time: 188 },
  { text: "In and out of my life, in out baby", time: 192 },
  { text: "Tell me, if you really love me", time: 196 },
  { text: "It's in and out of my life, in out baby", time: 200 },
  { text: "So baby, love never felt so good", time: 204 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
