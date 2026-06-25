// ============================================
// EXERCIȚII - Atelier A2: Reflexivpronomen im Dativ
// Claudia Toth · 5 exerciții cu rezolvări complete
// reflexivul Dativ (mir/dir) · Akk vs Dativ · verbe sich etwas... · Körperteile · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        // ü→u, ö→o, ä→a (vocală simplă, NU ue/oe/ae): accept-urile sunt scrise fără umlaut
        // și astfel acceptăm și tastarea pe mobil fără umlaut. NU schimba în ue/oe/ae fără a rescrie accept-urile!
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Reflexivul la Dativ (mir/dir/sich/uns/euch) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Ich kaufe ____ ein Eis.', hint: 'eu (sich etwas kaufen → Dativ)', correct: 'mir', accept: ['mir'] },
    { id: 'b', prompt: 'Wünschst du ____ etwas?', hint: 'tu (sich wünschen → Dativ)', correct: 'dir', accept: ['dir'] },
    { id: 'c', prompt: 'Er merkt ____ die Adresse.', hint: 'el (sich merken)', correct: 'sich', accept: ['sich'] },
    { id: 'd', prompt: 'Wir bestellen ____ eine Pizza.', hint: 'noi (sich bestellen)', correct: 'uns', accept: ['uns'] },
    { id: 'e', prompt: 'Ich putze ____ die Zähne.', hint: 'eu (sich die Zähne putzen → Dativ)', correct: 'mir', accept: ['mir'] },
    { id: 'f', prompt: 'Was wünscht ihr ____?', hint: 'voi (sich wünschen)', correct: 'euch', accept: ['euch'] },
    { id: 'g', prompt: 'Sie kauft ____ ein Auto.', hint: 'ea (sich kaufen)', correct: 'sich', accept: ['sich'] },
    { id: 'h', prompt: 'Ich sehe ____ den Film an.', hint: 'eu (sich etwas ansehen → Dativ)', correct: 'mir', accept: ['mir'] },
    { id: 'i', prompt: 'Kannst du ____ das leisten?', hint: 'tu (sich etwas leisten → Dativ)', correct: 'dir', accept: ['dir'] },
    { id: 'j', prompt: 'Ich wasche ____ die Hände.', hint: 'eu (sich die Hände waschen → Dativ)', correct: 'mir', accept: ['mir'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează cu reflexivul la Dativ (mai e un obiect direct!).</strong><br>
        ich → mir · du → dir · er/sie/es → sich · wir → uns · ihr → euch · sie/Sie → sich.
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="mir / dir / sich / uns / euch">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Akkusativ (mich) sau Dativ (mir)? (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ich wasche ____. (fără alt obiect)', a: 'mich (Akkusativ)', b: 'mir (Dativ)', correct: 'mich (Akkusativ)', expl: 'Fără obiect → Akkusativ → mich.' },
    { id: 'b', text: 'Ich wasche ____ die Hände. (cu obiect)', a: 'mir (Dativ)', b: 'mich (Akkusativ)', correct: 'mir (Dativ)', expl: 'Apare „die Hände" → reflexivul la Dativ → mir.' },
    { id: 'c', text: 'Reflexivul e la Dativ atunci când:', a: 'mai e un obiect direct', b: 'nu e niciun obiect', correct: 'mai e un obiect direct', expl: 'Două obiecte → reflexivul devine Dativ.' },
    { id: 'd', text: 'Ich kaufe ____ ein Buch.', a: 'mir (Dativ)', b: 'mich (Akkusativ)', correct: 'mir (Dativ)', expl: '„ein Buch" e obiectul → reflexiv Dativ → mir.' },
    { id: 'e', text: 'Ich ziehe ____ an. (fără alt obiect)', a: 'mich (Akkusativ)', b: 'mir (Dativ)', correct: 'mich (Akkusativ)', expl: 'Fără obiect → Akkusativ → mich.' },
    { id: 'f', text: 'Ich ziehe ____ die Jacke an. (cu obiect)', a: 'mir (Dativ)', b: 'mich (Akkusativ)', correct: 'mir (Dativ)', expl: '„die Jacke" e obiectul → reflexiv Dativ → mir.' },
    { id: 'g', text: 'La „sich etwas wünschen" reflexivul este:', a: 'Dativ', b: 'Akkusativ', correct: 'Dativ', expl: 'sich (Dat) etwas wünschen — reflexivul e Dativ.' },
    { id: 'h', text: 'Cu părțile corpului (die Zähne) folosim:', a: 'reflexiv Dativ + articol', b: 'pronume posesiv (meine)', correct: 'reflexiv Dativ + articol', expl: 'Ich putze mir die Zähne (NU meine Zähne).' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>⚖️ mich (Akkusativ) sau mir (Dativ)?</strong> Decide după prezența unui obiect direct.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex2-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex2-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Completează verbul (sich etwas...) (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Ich ____ mir ein Eis.', hint: 'a-și cumpăra (sich kaufen, forma ich)', correct: 'kaufe', accept: ['kaufe'] },
    { id: 'b', prompt: 'Ich ____ mir ein Fahrrad.', hint: 'a-și dori (sich wünschen, forma ich)', correct: 'wünsche', accept: ['wünsche'] },
    { id: 'c', prompt: 'Ich ____ mir die PIN.', hint: 'a memora (sich merken, forma ich)', correct: 'merke', accept: ['merke'] },
    { id: 'd', prompt: 'Ich ____ mir eine Pizza.', hint: 'a-și comanda (sich bestellen, forma ich)', correct: 'bestelle', accept: ['bestelle'] },
    { id: 'e', prompt: 'Ich ____ mir die Zähne.', hint: 'a peria/spăla dinții (sich putzen, forma ich)', correct: 'putze', accept: ['putze'] },
    { id: 'f', prompt: 'Ich ____ mir den Film an.', hint: 'a se uita la (sich ansehen, forma ich — „an" la final)', correct: 'sehe', accept: ['sehe'] },
    { id: 'g', prompt: 'Ich kann mir das nicht ____.', hint: 'a-și permite (sich leisten, infinitiv după kann)', correct: 'leisten', accept: ['leisten'] },
    { id: 'h', prompt: 'Ich ____ mir ein Haus vor.', hint: 'a-și imagina (sich vorstellen, forma ich — „vor" la final)', correct: 'stelle', accept: ['stelle'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🛍️ Completează verbul (schema sich + mir + obiect).</strong>
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="verb...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Körperteile — articolul corect (NU posesiv!) (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: 'Ich putze mir ____ Zähne.', hint: 'die Zähne (plural) — articol, nu „meine"!', correct: 'die', accept: ['die'] },
    { id: 'b', prompt: 'Ich wasche mir ____ Hände.', hint: 'die Hände (plural)', correct: 'die', accept: ['die'] },
    { id: 'c', prompt: 'Ich kämme mir ____ Haare.', hint: 'die Haare (plural)', correct: 'die', accept: ['die'] },
    { id: 'd', prompt: 'Ich wasche mir ____ Gesicht.', hint: 'das Gesicht (neutru)', correct: 'das', accept: ['das'] },
    { id: 'e', prompt: 'Ich trockne mir ____ Haare.', hint: 'die Haare (plural)', correct: 'die', accept: ['die'] },
    { id: 'f', prompt: 'Er putzt sich ____ Nase.', hint: 'die Nase (feminin)', correct: 'die', accept: ['die'] },
    { id: 'g', prompt: 'Ich wasche mir ____ Füße.', hint: 'die Füße (plural)', correct: 'die', accept: ['die'] },
    { id: 'h', prompt: 'Sie schminkt sich ____ Augen.', hint: 'die Augen (plural)', correct: 'die', accept: ['die'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🪥 Completează cu articolul hotărât (NU posesiv „mein/meine"!).</strong><br>
        Reflexivul (mir/sich) arată deja că e corpul tău → folosești articolul (die/das).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="die / das">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Îmi cumpăr o înghețată.', correct: 'Ich kaufe mir ein Eis.', accept: ['ich kaufe mir ein eis'] },
    { id: 'b', ro: 'Îmi doresc o bicicletă.', correct: 'Ich wünsche mir ein Fahrrad.', accept: ['ich wünsche mir ein fahrrad'] },
    { id: 'c', ro: 'Îmi periez dinții.', correct: 'Ich putze mir die Zähne.', accept: ['ich putze mir die zähne'] },
    { id: 'd', ro: 'Îmi spăl mâinile.', correct: 'Ich wasche mir die Hände.', accept: ['ich wasche mir die hände'] },
    { id: 'e', ro: 'Îmi comand o pizza.', correct: 'Ich bestelle mir eine Pizza.', accept: ['ich bestelle mir eine pizza'] },
    { id: 'f', ro: 'Nu îmi pot permite asta.', correct: 'Ich kann mir das nicht leisten.', accept: ['ich kann mir das nicht leisten'] },
    { id: 'g', ro: 'Mă uit la film.', correct: 'Ich sehe mir den Film an.', accept: ['ich sehe mir den film an'] },
    { id: 'h', ro: 'Ce-ți dorești?', correct: 'Was wünschst du dir?', accept: ['was wünschst du dir'] },
    { id: 'i', ro: 'Îmi spăl părul.', correct: 'Ich wasche mir die Haare.', accept: ['ich wasche mir die haare'] },
    { id: 'j', ro: 'Ține minte asta!', correct: 'Merk dir das!', accept: ['merk dir das', 'merke dir das'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană.</strong> Reflexivul e la Dativ (mir/dir) — mai e un obiect direct!
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
