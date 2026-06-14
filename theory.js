// ============================================
// TEORIE - Atelier A2: Reflexivpronomen im Dativ
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// Reflexivul la DATIV (mir/dir) — când mai e un obiect direct: sich (Dat) etwas tun
// Sursă: DF Lectia 11 (reflexive im Dativ) — aprofundare
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🫳 1. Când reflexivul devine Dativ (mir/dir)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Își face un cadou</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Două obiecte → reflexivul la Dativ</h4>
                <p>De obicei reflexivul e la <strong>Akkusativ</strong> (Ich wasche <strong>mich</strong>). Dar când în propoziție mai apare <strong>un obiect direct (Akkusativ)</strong>, reflexivul trece la <strong>Dativ (mir/dir)</strong> — pentru că „obiectul" e deja luat de lucrul respectiv.</p>
                <div class="example-box">
                    <p class="de">Ich wasche <strong>mich</strong>. → Ich wasche <strong>mir</strong> <span style="color:#6b7280;">die Hände</span>.</p>
                    <p class="ro">Mă spăl. → Îmi spăl mâinile.</p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în atelier</h4>
                <ul>
                    <li><strong>2.</strong> Regula de aur (2 obiecte → reflexiv Dativ) + tabelul mich/mir</li>
                    <li><strong>3.</strong> Verbele tipice: sich etwas <strong>kaufen / wünschen / merken / ansehen / bestellen</strong></li>
                    <li><strong>4.</strong> Körperteile: sich <strong>die Hände / die Zähne / die Haare</strong> waschen/putzen/kämmen</li>
                    <li><strong>5.</strong> Recap + dialog</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vestea bună: doar la <strong>ich</strong> și <strong>du</strong> se vede diferența (mich→mir, dich→dir). La er/sie/wir/ihr/sie rămâne sich/uns/euch. Deci ai de reținut doar <strong>mir</strong> și <strong>dir</strong>! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie ce-ți cumperi/dorești și ce faci dimineața, folosind cel puțin <strong>6 propoziții cu reflexivul la Dativ</strong> (Ich kaufe mir…, Ich wünsche mir…, Ich putze mir die Zähne…). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/NUZeAFb1xPNufoh96" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Regula de aur -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>⚡ 2. Regula de aur + tabelul mich/mir</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-regula.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background:#fef3c7; border-left-color:#f59e0b;">
                <h4>⚡ Regula</h4>
                <p style="margin:0;">
                ✅ Doar reflexivul → <strong>Akkusativ</strong>: Ich wasche <strong>mich</strong>.<br>
                ✅ Reflexiv + un obiect direct → <strong>Dativ</strong>: Ich wasche <strong>mir</strong> die Hände / Ich kaufe <strong>mir</strong> ein Eis.<br>
                Obiectul (die Hände, ein Eis) e la Akkusativ; reflexivul se „dă la o parte" în Dativ.</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Persoană</th><th>Akkusativ</th><th>Dativ</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td>mich</td><td><strong>mir</strong></td></tr>
                    <tr><td><strong>du</strong></td><td>dich</td><td><strong>dir</strong></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>sich</td><td>sich</td></tr>
                    <tr><td><strong>wir</strong></td><td>uns</td><td>uns</td></tr>
                    <tr><td><strong>ihr</strong></td><td>euch</td><td>euch</td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>sich</td><td>sich</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Singurele forme „noi" de reținut: <strong>mir</strong> (eu) și <strong>dir</strong> (tu). Restul e identic cu Akkusativul (sich/uns/euch). 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Verbele tipice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🛍️ 3. Verbele tipice cu Dativ (sich etwas...)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-verbe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb (sich + Dativ + Akk)</th><th>Traducere RO</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>sich etwas kaufen</strong></td><td>a-și cumpăra</td><td>Ich kaufe mir ein Eis.</td></tr>
                    <tr><td><strong>sich etwas wünschen</strong></td><td>a-și dori</td><td>Ich wünsche mir ein Fahrrad.</td></tr>
                    <tr><td><strong>sich etwas merken</strong></td><td>a memora</td><td>Ich merke mir die PIN.</td></tr>
                    <tr><td><strong>sich etwas vorstellen</strong></td><td>a-și imagina</td><td>Ich stelle mir das Haus vor.</td></tr>
                    <tr><td><strong>sich etwas ansehen</strong></td><td>a (se) uita la</td><td>Ich sehe mir den Film an.</td></tr>
                    <tr><td><strong>sich etwas bestellen</strong></td><td>a-și comanda</td><td>Ich bestelle mir eine Pizza.</td></tr>
                    <tr><td><strong>sich etwas leisten</strong></td><td>a-și permite</td><td>Ich kann mir das nicht leisten.</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Toate au schema <strong>sich (mir) + ceva (Akk)</strong>: „Ich kaufe <strong>mir</strong> <em>einen Kaffee</em>." Reflexivul = pentru cine, obiectul = ce. 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Körperteile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🪥 4. Körperteile (sich die Zähne putzen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-koerper.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <p>Cu părțile corpului, germana folosește <strong>reflexiv Dativ + articolul hotărât</strong> (NU „mein/meine"!): „Ich putze <strong>mir die</strong> Zähne" (nu „meine Zähne").</p>

            <table class="grammar-table">
                <thead>
                    <tr><th>Acțiune</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td>Ich wasche mir <strong>die Hände</strong>.</td><td>Îmi spăl mâinile.</td></tr>
                    <tr><td>Ich putze mir <strong>die Zähne</strong>.</td><td>Îmi spăl/periez dinții.</td></tr>
                    <tr><td>Ich kämme mir <strong>die Haare</strong>.</td><td>Mă pieptăn (pe păr).</td></tr>
                    <tr><td>Ich trockne mir <strong>die Haare</strong>.</td><td>Îmi usuc părul.</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 De ce articol și nu „mein"?</h4>
                <p style="margin:0;">Reflexivul (mir) arată deja că e vorba de corpul tău, deci nu mai zici „meine Hände", ci <strong>die Hände</strong>. „Ich wasche mir <strong>die</strong> Hände" = e clar că sunt mâinile mele.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Greșeala clasică a românilor: „Ich putze meine Zähne". Corect: „Ich putze <strong>mir die</strong> Zähne". Reflexivul + articol, nu posesiv! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Recap + dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li>Reflexiv + un obiect direct → <strong>Dativ (mir/dir)</strong>: Ich wasche <strong>mir</strong> die Hände.</li>
                    <li>Verbe tipice: sich etwas kaufen / wünschen / merken / ansehen / bestellen / leisten.</li>
                    <li>Cu Körperteile: reflexiv Dativ + <strong>articol</strong> (die Zähne), NU „meine Zähne".</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreea se răsfață</h4>
                <p><strong style="color:#065f46;">Annette:</strong> Was machst du heute Schönes?<br><span class="ro-translation">Ce frumos faci azi?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Ich <strong>kaufe mir</strong> ein neues Kleid und <strong>bestelle mir</strong> einen Kaffee. Ich <strong>gönne mir</strong> mal etwas!<br><span class="ro-translation">Îmi cumpăr o rochie nouă și îmi comand o cafea. Mă răsfăț puțin!</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Schön! Und am Morgen?<br><span class="ro-translation">Frumos! Și dimineața?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Erst <strong>putze ich mir</strong> die Zähne, dann <strong>wasche ich mir</strong> die Haare.<br><span class="ro-translation">Întâi îmi periez dinții, apoi îmi spăl părul.</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> Perfekt — alles im Dativ! <strong>Merk dir</strong> das: zwei Objekte → Dativ.<br><span class="ro-translation">Perfect — totul la Dativ! Ține minte: două obiecte → Dativ.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Toate frazele mele au <strong>mir</strong> + un obiect: mir ein Kleid, mir die Zähne, mir die Haare. Asta e tot secretul Dativului reflexiv! Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
