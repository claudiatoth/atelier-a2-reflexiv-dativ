// ============================================
// FLASHCARDS - Atelier A2: Reflexivpronomen im Dativ
// Claudia Toth · 32 carduri: concept Dativ + verbe sich etwas... + Körperteile + fraze
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (4) ===
    { de: "Reflexiv im Dativ (mir/dir)", ro: "când mai e un obiect direct", audio: "audio/letters/konzept-dativ.wav" },
    { de: "mich (fără obiect) / mir (cu obiect)", ro: "Ich wasche mich → Ich wasche mir die Hände", audio: "audio/letters/konzept-mich-mir.wav" },
    { de: "sich etwas tun", ro: "reflexiv (Dativ) + obiect (Akkusativ)", audio: "audio/letters/konzept-etwas.wav" },
    { de: "mir die Zähne (articol!)", ro: "cu părțile corpului: articol (die), nu posesiv meine", audio: "audio/letters/konzept-koerper.wav" },

    // === Verbe (8) ===
    { de: "sich etwas kaufen", ro: "a-și cumpăra (Ich kaufe mir...)", audio: "audio/letters/v-kaufen.wav" },
    { de: "sich etwas wünschen", ro: "a-și dori", audio: "audio/letters/v-wuenschen.wav" },
    { de: "sich etwas merken", ro: "a memora (Merk dir das!)", audio: "audio/letters/v-merken.wav" },
    { de: "sich etwas vorstellen", ro: "a-și imagina (Dativ: mir)", audio: "audio/letters/v-vorstellen.wav" },
    { de: "sich etwas ansehen", ro: "a (se) uita la (separabil)", audio: "audio/letters/v-ansehen.wav" },
    { de: "sich etwas bestellen", ro: "a-și comanda", audio: "audio/letters/v-bestellen.wav" },
    { de: "sich etwas leisten", ro: "a-și permite (financiar)", audio: "audio/letters/v-leisten.wav" },
    { de: "sich etwas gönnen", ro: "a se răsfăța cu", audio: "audio/letters/v-goennen.wav" },

    // === Körperteile (4) ===
    { de: "sich die Hände waschen", ro: "a-și spăla mâinile", audio: "audio/letters/k-haende.wav" },
    { de: "sich die Zähne putzen", ro: "a-și peria/spăla dinții", audio: "audio/letters/k-zaehne.wav" },
    { de: "sich die Haare kämmen", ro: "a se pieptăna", audio: "audio/letters/k-haare.wav" },
    { de: "die Zähne / die Hände / die Haare", ro: "dinții / mâinile / părul (cu articol)", audio: "audio/letters/k-artikel.wav" },

    // === Fraze model (16) ===
    { de: "Ich kaufe mir ein Eis.", ro: "Îmi cumpăr o înghețată.", audio: "audio/letters/s-kaufen.wav" },
    { de: "Ich wünsche mir ein Fahrrad.", ro: "Îmi doresc o bicicletă.", audio: "audio/letters/s-wuenschen.wav" },
    { de: "Ich merke mir die Adresse.", ro: "Memorez adresa.", audio: "audio/letters/s-merken.wav" },
    { de: "Ich putze mir die Zähne.", ro: "Îmi periez dinții.", audio: "audio/letters/s-zaehne.wav" },
    { de: "Ich wasche mir die Hände.", ro: "Îmi spăl mâinile.", audio: "audio/letters/s-haende.wav" },
    { de: "Ich bestelle mir eine Pizza.", ro: "Îmi comand o pizza.", audio: "audio/letters/s-pizza.wav" },
    { de: "Ich kann mir das nicht leisten.", ro: "Nu îmi pot permite asta.", audio: "audio/letters/s-leisten.wav" },
    { de: "Ich sehe mir den Film an.", ro: "Mă uit la film.", audio: "audio/letters/s-film.wav" },
    { de: "Was wünschst du dir?", ro: "Ce-ți dorești?", audio: "audio/letters/s-wuenschst.wav" },
    { de: "Merk dir das!", ro: "Ține minte asta!", audio: "audio/letters/s-merk.wav" },
    { de: "Ich gönne mir etwas.", ro: "Mă răsfăț cu ceva.", audio: "audio/letters/s-goennen.wav" },
    { de: "Ich wasche mir die Haare.", ro: "Îmi spăl părul.", audio: "audio/letters/s-haare.wav" },
    { de: "Ich stelle mir das vor.", ro: "Îmi imaginez asta.", audio: "audio/letters/s-vorstellen.wav" },
    { de: "Kannst du dir das vorstellen?", ro: "Îți poți imagina asta?", audio: "audio/letters/s-vorstellen-du.wav" },
    { de: "Ich kaufe mir einen Kaffee.", ro: "Îmi cumpăr o cafea.", audio: "audio/letters/s-kaffee.wav" },
    { de: "Putz dir die Zähne!", ro: "Spală-ți dinții!", audio: "audio/letters/s-putz.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
