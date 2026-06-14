// ============================================
// VERB-KONJUGATION - Atelier A2: Reflexivpronomen im Dativ
// 6 verbe (sich + Dativ + obiect): sich kaufen · sich wünschen · sich merken · sich putzen · sich ansehen · sich bestellen
// ============================================

const verbsData = [
    {
        inf: 'sich etwas kaufen', ro: 'a-și cumpăra (Dativ)', typ: 'regulat / Dativ', aux: 'haben', part: 'gekauft',
        praes: [
            ['ich','kaufe mir','îmi cumpăr'],['du','kaufst dir','îți cumperi'],['er/sie/es','kauft sich','își cumpără'],
            ['wir','kaufen uns','ne cumpărăm'],['ihr','kauft euch','vă cumpărați'],['sie/Sie','kaufen sich','își cumpără / cumpărați']
        ],
        praet: [
            ['ich','kaufte mir','îmi cumpăram'],['du','kauftest dir','îți cumpărai'],['er/sie/es','kaufte sich','își cumpăra'],
            ['wir','kauften uns','ne cumpăram'],['ihr','kauftet euch','vă cumpărați'],['sie/Sie','kauften sich','își cumpărau']
        ],
        perf: [
            ['ich','habe mir gekauft','mi-am cumpărat'],['du','hast dir gekauft','ți-ai cumpărat'],['er/sie/es','hat sich gekauft','și-a cumpărat'],
            ['wir','haben uns gekauft','ne-am cumpărat'],['ihr','habt euch gekauft','v-ați cumpărat'],['sie/Sie','haben sich gekauft','și-au cumpărat']
        ],
        note: '🚨 DATIV reflexiv (mir/dir) — pentru că mai e un obiect (ein Eis): Ich kaufe <strong>mir</strong> ein Eis. Reflexivul = pentru cine, obiectul = ce.'
    },
    {
        inf: 'sich etwas wünschen', ro: 'a-și dori (Dativ)', typ: 'regulat / Dativ', aux: 'haben', part: 'gewünscht',
        praes: [
            ['ich','wünsche mir','îmi doresc'],['du','wünschst dir','îți dorești'],['er/sie/es','wünscht sich','își dorește'],
            ['wir','wünschen uns','ne dorim'],['ihr','wünscht euch','vă doriți'],['sie/Sie','wünschen sich','își doresc / doriți']
        ],
        praet: [
            ['ich','wünschte mir','îmi doream'],['du','wünschtest dir','îți doreai'],['er/sie/es','wünschte sich','își dorea'],
            ['wir','wünschten uns','ne doream'],['ihr','wünschtet euch','vă doreați'],['sie/Sie','wünschten sich','își doreau']
        ],
        perf: [
            ['ich','habe mir gewünscht','mi-am dorit'],['du','hast dir gewünscht','ți-ai dorit'],['er/sie/es','hat sich gewünscht','și-a dorit'],
            ['wir','haben uns gewünscht','ne-am dorit'],['ihr','habt euch gewünscht','v-ați dorit'],['sie/Sie','haben sich gewünscht','și-au dorit']
        ],
        note: '🚨 DATIV reflexiv. Was wünschst du <strong>dir</strong> zum Geburtstag? = Ce-ți dorești de ziua ta?'
    },
    {
        inf: 'sich etwas merken', ro: 'a memora (Dativ)', typ: 'regulat / Dativ', aux: 'haben', part: 'gemerkt',
        praes: [
            ['ich','merke mir','memorez'],['du','merkst dir','memorezi'],['er/sie/es','merkt sich','memorează'],
            ['wir','merken uns','memorăm'],['ihr','merkt euch','memorați'],['sie/Sie','merken sich','memorează / memorați']
        ],
        praet: [
            ['ich','merkte mir','memoram'],['du','merktest dir','memorai'],['er/sie/es','merkte sich','memora'],
            ['wir','merkten uns','memoram'],['ihr','merktet euch','memorați'],['sie/Sie','merkten sich','memorau']
        ],
        perf: [
            ['ich','habe mir gemerkt','am memorat'],['du','hast dir gemerkt','ai memorat'],['er/sie/es','hat sich gemerkt','a memorat'],
            ['wir','haben uns gemerkt','am memorat'],['ihr','habt euch gemerkt','ați memorat'],['sie/Sie','haben sich gemerkt','au memorat']
        ],
        note: '🚨 DATIV reflexiv (a-și întipări în minte). Imperativ: <strong>Merk dir</strong> das! = Ține minte asta! Atenție: sich merken ≠ merken (a observa) — vezi Lecția 11.'
    },
    {
        inf: 'sich etwas putzen', ro: 'a-și spăla/peria (Dativ)', typ: 'regulat / Dativ', aux: 'haben', part: 'geputzt',
        praes: [
            ['ich','putze mir','îmi spăl'],['du','putzt dir','îți speli'],['er/sie/es','putzt sich','își spală'],
            ['wir','putzen uns','ne spălăm'],['ihr','putzt euch','vă spălați'],['sie/Sie','putzen sich','își spală / spălați']
        ],
        praet: [
            ['ich','putzte mir','îmi spălam'],['du','putztest dir','îți spălai'],['er/sie/es','putzte sich','își spăla'],
            ['wir','putzten uns','ne spălam'],['ihr','putztet euch','vă spălați'],['sie/Sie','putzten sich','își spălau']
        ],
        perf: [
            ['ich','habe mir geputzt','mi-am spălat'],['du','hast dir geputzt','ți-ai spălat'],['er/sie/es','hat sich geputzt','și-a spălat'],
            ['wir','haben uns geputzt','ne-am spălat'],['ihr','habt euch geputzt','v-ați spălat'],['sie/Sie','haben sich geputzt','și-au spălat']
        ],
        note: '🚨 DATIV reflexiv + articol la Körperteile: Ich putze <strong>mir die</strong> Zähne (NU „meine Zähne"!).'
    },
    {
        inf: 'sich etwas ansehen', ro: 'a (se) uita la (Dativ)', typ: 'tare / TRENNBAR', aux: 'haben', part: 'angesehen',
        praes: [
            ['ich','sehe mir an','mă uit la'],['du','siehst dir an','te uiți la'],['er/sie/es','sieht sich an','se uită la'],
            ['wir','sehen uns an','ne uităm la'],['ihr','seht euch an','vă uitați la'],['sie/Sie','sehen sich an','se uită / vă uitați']
        ],
        praet: [
            ['ich','sah mir an','mă uitam la'],['du','sahst dir an','te uitai la'],['er/sie/es','sah sich an','se uita la'],
            ['wir','sahen uns an','ne uitam la'],['ihr','saht euch an','vă uitați la'],['sie/Sie','sahen sich an','se uitau la']
        ],
        perf: [
            ['ich','habe mir angesehen','m-am uitat la'],['du','hast dir angesehen','te-ai uitat la'],['er/sie/es','hat sich angesehen','s-a uitat la'],
            ['wir','haben uns angesehen','ne-am uitat la'],['ihr','habt euch angesehen','v-ați uitat la'],['sie/Sie','haben sich angesehen','s-au uitat la']
        ],
        note: '🚨 TARE (e→ie: du siehst, er sieht) + TRENNBAR (an-) + DATIV reflexiv. Ich sehe <strong>mir</strong> den Film <strong>an</strong> = mă uit la film (cu interes).'
    },
    {
        inf: 'sich etwas bestellen', ro: 'a-și comanda (Dativ)', typ: 'regulat / Dativ', aux: 'haben', part: 'bestellt',
        praes: [
            ['ich','bestelle mir','îmi comand'],['du','bestellst dir','îți comanzi'],['er/sie/es','bestellt sich','își comandă'],
            ['wir','bestellen uns','ne comandăm'],['ihr','bestellt euch','vă comandați'],['sie/Sie','bestellen sich','își comandă / comandați']
        ],
        praet: [
            ['ich','bestellte mir','îmi comandam'],['du','bestelltest dir','îți comandai'],['er/sie/es','bestellte sich','își comanda'],
            ['wir','bestellten uns','ne comandam'],['ihr','bestelltet euch','vă comandați'],['sie/Sie','bestellten sich','își comandau']
        ],
        perf: [
            ['ich','habe mir bestellt','mi-am comandat'],['du','hast dir bestellt','ți-ai comandat'],['er/sie/es','hat sich bestellt','și-a comandat'],
            ['wir','haben uns bestellt','ne-am comandat'],['ihr','habt euch bestellt','v-ați comandat'],['sie/Sie','haben sich bestellt','și-au comandat']
        ],
        note: '🚨 DATIV reflexiv. Prefix NESEPARABIL be- → FĂRĂ ge- (bestellt). Ich bestelle <strong>mir</strong> eine Pizza.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe cu reflexiv la Dativ</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb. Toate au schema <strong>sich (mir/dir) + obiect (Akk)</strong>: Ich kaufe <strong>mir</strong> ein Eis.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate fac Perfekt cu <strong>haben + sich (mir) </strong>+ Partizip II: habe <strong>mir</strong> gekauft/gewünscht. Doar la ich/du se vede Dativul (mir/dir); restul = sich/uns/euch. Iar ansehen e TARE (du siehst) + separabil! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
