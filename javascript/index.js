const etenKnop = document.querySelector("#eten"); // Selecteert de knop voor 'eten'
const slapenKnop = document.querySelector("#slapen"); // Selecteert de knop voor 'slapen'
const douchenKnop = document.querySelector("#douchen"); // Selecteert de knop voor 'douchen'
const aaienKnop = document.querySelector("#aaien"); // Selecteert de knop voor 'aaien'
const hamsterAfbeelding = document.querySelector(".hamster"); // Selecteert de afbeelding van de hamster
const gegevenOpdracht = document.querySelector(".opdracht-tekst"); // Selecteert het tekstvak waar opdrachten getoond worden
const maxBlijheid = 100; // Maximale waarde voor blijheid
const winGeluid = new Audio("sounds/win_muziek.mp3"); // Laadt het winnend muziekje - Bron: https://pixabay.com/music/acoustic-group-funny-background-music-no-copyright-happy-song-circus-swing-325382/
let blijheid = 50; // Startwaarde voor blijheid
const blijheidInProcenten = document.querySelector(".blijheid-waarde"); // Selecteert het element waar de blijheidswaarde getoond wordt
const blijheidMeter = document.querySelector(".blijheid-meter"); // Selecteert de visuele balk voor blijheid
const opdrachten = ["eten", "slapen", "douchen", "aaien"]; // Mogelijke opdrachten
let opdracht = opdrachten[Math.floor(Math.random() * 4)]; // Kies een willekeurige opdracht

function toonNormaleOfWinHamster() {
  if (blijheid === 100) {
    hamsterAfbeelding.src = "gif/hamster_rennend.gif"; // Toont rennende hamster bij maximale blijheid - Bron: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW50b3l1Nmdsa2pjMnQxanVsM2o0dWJ1eHZmdXZ2OWtxZmgxY3Z1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yaUG0KDAcIcWA/giphy.gif
    gegevenOpdracht.textContent = "WOW een epic win! Sannie zit bomvol energie!" // Toont win-boodschap
    winGeluid.play(); // Speelt win-geluid af - Bron: https://youtu.be/3xlws5og44U?si=Yn1skif37N4nyVr-
  } else {
    hamsterAfbeelding.src = "images/hamster.png"; // Zet de afbeelding terug naar de normale hamster
  }
}

function randomOpdracht() {
  opdracht = opdrachten[Math.floor(Math.random() * 4)]; // Kies een nieuwe willekeurige opdracht
  toonOpdracht(); // Laat de opdracht zien
}

function toonOpdracht() {
  if (opdracht === "eten") {
    gegevenOpdracht.textContent = "Geef de hamster eten"; // Tekst voor opdracht 'eten'
  } else if (opdracht === "slapen") {
    gegevenOpdracht.textContent = "De hamster is moe"; // Tekst voor opdracht 'slapen'
  } else if (opdracht === "douchen") {
    gegevenOpdracht.textContent = "Geef de hamster een douche"; // Tekst voor opdracht 'douchen'
  } else if (opdracht === "aaien") {
    gegevenOpdracht.textContent = "Aai de hamster"; // Tekst voor opdracht 'aaien'
  }
}

function blijheidBalk(){
  blijheidMeter.style.width = blijheid + "%"; // Past de breedte van de blijheidsbalk aan - Bron: https://www.w3schools.com/howto/howto_js_progressbar.asp
  if (blijheid < 40) {
    blijheidMeter.style.backgroundColor = "red"; // Kleurt de balk rood bij lage blijheid - Bron: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
  } else if (blijheid < 60) {
    blijheidMeter.style.backgroundColor = "orange"; // Kleurt de balk oranje bij gemiddelde blijheid
  } else {
    blijheidMeter.style.backgroundColor = "green"; // Kleurt de balk groen bij hoge blijheid
  }
}

function activiteit(activiteit) {
  if (opdracht === activiteit) {
    blijheid += 10; // Verhoogt blijheid bij juiste actie - Bron: https://www.w3schools.com/js/js_operators.asp
  } else {
    blijheid -= 10; // Verlaagt blijheid bij foute actie
  }
  maxEnMinScore(); // Zorgt dat blijheid binnen grenzen blijft
  blijheidInProcenten.textContent = blijheid; // Update de getoonde blijheidswaarde
  blijheidBalk(); // Update de visuele balk

  if (opdracht === activiteit) {
    gegevenOpdracht.textContent = "De hamster is blij! Zijn blijheid is gestegen naar " + blijheid + "%"; // Positieve feedback
  } else{
    gegevenOpdracht.textContent = "dit is niet de juiste knop... De blijheid van Sannie is gedaald naar " + blijheid + "%"; // Negatieve feedback
  }

  setTimeout(randomOpdracht, 3000); // Na 3 seconden komt er een nieuwe opdracht
}

function maxEnMinScore(){
  if (blijheid > maxBlijheid) {
    blijheid = maxBlijheid; // Zet blijheid terug naar max als deze te hoog is
  } else if (blijheid < 0) {
    blijheid = 0; // Zet blijheid op 0 als deze negatief is
  }
}

randomOpdracht(); // Start met een willekeurige opdracht

aaienKnop.addEventListener("click", () => {
  activiteit("aaien"); // Voert activiteit 'aaien' uit
  hamsterAfbeelding.src = "images/hamster_petting.png"; // Toont hamster die geaaid wordt - Bron: AI generated (prompt staat in mijn bronnenlijst doc)
  setTimeout(toonNormaleOfWinHamster, 3000); // Zet afbeelding na 3 seconden terug
});
douchenKnop.addEventListener("click", () => {
  activiteit("douchen"); // Voert activiteit 'douchen' uit
  hamsterAfbeelding.src = "images/hamster_showering.png"; // Toont hamster die doucht - Bron: AI generated (prompt staat in mijn bronnenlijst doc)
  setTimeout(toonNormaleOfWinHamster, 3000); // Zet afbeelding na 3 seconden terug
});
slapenKnop.addEventListener("click", () => {
  activiteit("slapen"); // Voert activiteit 'slapen' uit
  hamsterAfbeelding.src = "images/hamster_sleeping.png"; // Toont slapende hamster - Bron: AI generated (prompt staat in mijn bronnenlijst doc)
  setTimeout(toonNormaleOfWinHamster, 3000); // Zet afbeelding na 3 seconden terug
});
etenKnop.addEventListener("click", () => {
  activiteit("eten"); // Voert activiteit 'eten' uit
  hamsterAfbeelding.src = "images/hamster_eating.png"; // Toont hamster die eet - Bron: AI generated (prompt staat in mijn bronnenlijst doc)
  setTimeout(toonNormaleOfWinHamster, 3000); // Zet afbeelding na 3 seconden terug
});