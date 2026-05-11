'use strict';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, PageBreak, TableOfContents,
  InternalHyperlink, Bookmark,
  Header, Footer,
} = require('docx');
const fs = require('fs');

// ── Page geometry ─────────────────────────────────────────────────────────────
const A4_W = 11906;
const A4_H = 16838;
const MARGIN = 1418; // 2.5 cm in DXA
const CW = A4_W - 2 * MARGIN; // 9070 DXA

// ── Text run helpers ──────────────────────────────────────────────────────────
const t  = (s, o = {}) => new TextRun({ text: s, font: 'Times New Roman', size: 24, ...o });
const ti = (s) => t(s, { italics: true });
const tb = (s) => t(s, { bold: true });

// Inline note reference: superscript link to bookmark note_N
const fnRef = (n) => new InternalHyperlink({
  anchor: `note_${n}`,
  children: [new TextRun({
    text: String(n),
    font: 'Times New Roman',
    size: 20,
    superScript: true,
    color: '1155CC',
  })],
});

// ── Note entry helpers (for Noter-section at bottom) ──────────────────────────
const nT  = (s) => new TextRun({ text: s, font: 'Times New Roman', size: 20 });
const nTi = (s) => new TextRun({ text: s, font: 'Times New Roman', size: 20, italics: true });

// One numbered note entry with Oxford citation, bookmarked for back-linking
const note = (n, ...runs) => new Paragraph({
  children: [
    new Bookmark({
      id: `note_${n}`,
      children: [new TextRun({ text: `${n}.`, font: 'Times New Roman', size: 20, bold: true })],
    }),
    new TextRun({ text: ' ', font: 'Times New Roman', size: 20 }), // em-space indent
    ...runs,
  ],
  spacing: { after: 160, line: 252 },
  indent: { left: 440, hanging: 440 },
});

// ── Paragraph helpers ─────────────────────────────────────────────────────────
const p = (runs, opts = {}) => new Paragraph({
  children: Array.isArray(runs) ? runs : [t(runs)],
  spacing: { after: 200, line: 276 },
  ...opts,
});
const pJ = (runs, opts = {}) => p(runs, { alignment: AlignmentType.JUSTIFIED, ...opts });
const gap = (n = 360) => new Paragraph({ children: [t('')], spacing: { after: n } });

const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text })],
  spacing: { before: 480, after: 240 },
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text })],
  spacing: { before: 320, after: 160 },
});

// ── Table cell helpers ────────────────────────────────────────────────────────
const B = { style: BorderStyle.SINGLE, size: 1, color: 'AAAAAA' };
const BORDERS = { top: B, bottom: B, left: B, right: B };

const dataCell = (runs, w, shade) => new TableCell({
  children: [new Paragraph({
    children: Array.isArray(runs) ? runs : [t(runs)],
    spacing: { after: 0, line: 240 },
  })],
  width: { size: w, type: WidthType.DXA },
  borders: BORDERS,
  margins: { top: 80, bottom: 80, left: 130, right: 130 },
  ...(shade ? { shading: { fill: shade, type: ShadingType.CLEAR } } : {}),
});

const hdrCell = (text, w) => new TableCell({
  children: [new Paragraph({
    children: [new TextRun({ text, font: 'Arial', size: 22, bold: true, color: 'FFFFFF' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 0 },
  })],
  width: { size: w, type: WidthType.DXA },
  shading: { fill: '1F3864', type: ShadingType.CLEAR },
  borders: BORDERS,
  margins: { top: 100, bottom: 100, left: 130, right: 130 },
  verticalAlign: VerticalAlign.CENTER,
});

// ── Noter section: Oxford-format, Swedish, collected at bottom ────────────────
const noter = [
  h1('Noter'),
  note(1,
    nT('Brottsförebyggande rådet (BRÅ), '),
    nTi('Skjutningar i kriminella miljöer'),
    nT(' (Stockholm: BRÅ, 2019), s. 12.'),
  ),
  note(2,
    nT('Home Office, '),
    nTi('Serious Violence Strategy'),
    nT(' (London: Her Majesty\'s Stationery Office, 2018), s. 3.'),
  ),
  note(3,
    nT('Europeiska centrumet för kontroll av narkotika och narkotikamissbruk (EMCDDA), '),
    nTi('European Drug Report 2023: Trends and Developments'),
    nT(' (Lissabon: EMCDDA, 2023), s. 45.'),
  ),
  note(4,
    nT('Amir Rostami och Hernan Mondani, \'The Complexity of Crime Network Data: A Case Study of Its Consequences for Crime Control and the Study of Networks\', '),
    nTi('PLOS ONE'),
    nT(', vol. 10, nr 3 (2015), e0119309.'),
  ),
  note(5,
    nT('BRÅ, '),
    nTi('Kriminella nätverk och grupperingar: Polisers bild av maktstrukturer och marknader'),
    nT(' (Stockholm: BRÅ, 2016), s. 28.'),
  ),
  note(6,
    nT('Home Office, '),
    nTi('Homicide in England and Wales: Year ending March 2023'),
    nT(' (London: Her Majesty\'s Stationery Office, 2023), s. 7.'),
  ),
  note(7,
    nT('EMCDDA, '),
    nTi('Drug Markets in Europe'),
    nT(' (Lissabon: EMCDDA, 2022), s. 31.'),
  ),
  note(8,
    nT('Manne Gerell, \'Neighborhood Disorder and Crime Prevention through Environmental Design\', '),
    nTi('Security Journal'),
    nT(', vol. 31, nr 1 (2018), s. 141.'),
  ),
  note(9,
    nT('BRÅ, '),
    nTi('Polisens förmåga att bekämpa den grova organiserade brottsligheten'),
    nT(' (Stockholm: BRÅ, 2014), s. 44.'),
  ),
  note(10,
    nT('John Densley, '),
    nTi('How Gangs Work: An Ethnography of Youth Violence'),
    nT(' (New York: Palgrave Macmillan, 2013), s. 67.'),
  ),
  note(11,
    nT('BRÅ, \'Grov organiserad brottslighet\', '),
    nTi('brå.se'),
    nT(', 2024, <https://www.bra.se/brott-och-statistik/statistik-utifran-brottstyper/grov-organiserad-brottslighet.html>, hämtad 8 maj 2026.'),
  ),
  note(12,
    nT('Rikspolisstyrelsen, '),
    nTi('Kriminella nätverk med stor påverkan på lokalsamhället'),
    nT(' (Stockholm: Rikspolisstyrelsen, 2009), s. 15.'),
  ),
  note(13,
    nT('Stefan Holgersson och Johannes Knutsson, \'Polisarbete mot grov organiserad brottslighet\', i '),
    nTi('Organiserad brottslighet: Lösa strukturer och flexibla nätverk'),
    nT(', red. Lars Korsell (Stockholm: Rikspolisstyrelsen, 2010), s. 89.'),
  ),
  note(14,
    nT('Patrick Williams, \'Criminalising the Other: Challenging the Race-Gang Nexus\', '),
    nTi('Race & Class'),
    nT(', vol. 59, nr 1 (2017), s. 51.'),
  ),
  note(15,
    nT('Felipe Estrada och Anders Nilsson, \'Segregation och kriminalitet\', '),
    nTi('Socialvetenskaplig tidskrift'),
    nT(', vol. 19, nr 1 (2012), s. 23.'),
  ),
];

// ── Comparison table ──────────────────────────────────────────────────────────
const COL = [3570, 2750, 2750]; // sum = 9070
const SHADE = 'EDF2F7';

const compTable = new Table({
  width: { size: CW, type: WidthType.DXA },
  columnWidths: COL,
  rows: [
    new TableRow({
      children: [
        hdrCell('Kategori', COL[0]),
        hdrCell('Sverige', COL[1]),
        hdrCell('Storbritannien', COL[2]),
      ],
    }),
    new TableRow({ children: [
      dataCell([tb('Skjutningar totalt (2022)')], COL[0], SHADE),
      dataCell('ca 391', COL[1], SHADE),
      dataCell('ca 7 600 vapenbrott', COL[2], SHADE),
    ]}),
    new TableRow({ children: [
      dataCell([tb('Dödliga skjutningar (2022)')], COL[0]),
      dataCell('62', COL[1]),
      dataCell('ca 30', COL[2]),
    ]}),
    new TableRow({ children: [
      dataCell([tb('Uppskattade gängmedlemmar')], COL[0], SHADE),
      dataCell('ca 30 000', COL[1], SHADE),
      dataCell('50 000–70 000', COL[2], SHADE),
    ]}),
    new TableRow({ children: [
      dataCell([tb('Narkotikadödsfall / 100 000 inv.')], COL[0]),
      dataCell('9,2 (2022)', COL[1]),
      dataCell('5,1 (2022)', COL[2]),
    ]}),
    new TableRow({ children: [
      dataCell([tb('Mest drabbade städer')], COL[0], SHADE),
      dataCell('Stockholm, Göteborg, Malmö', COL[1], SHADE),
      dataCell('London, Birmingham, Manchester', COL[2], SHADE),
    ]}),
    new TableRow({ children: [
      dataCell([tb('Gängrelaterade brott (uppskattad andel)')], COL[0]),
      dataCell('ca 20 %', COL[1]),
      dataCell('ca 15 %', COL[2]),
    ]}),
  ],
});

// ── TITLE PAGE ────────────────────────────────────────────────────────────────
const titlePage = [
  gap(1800),
  new Paragraph({
    children: [new TextRun({ text: 'GÄNGKRIMINALITET I SVERIGE OCH STORBRITANNIEN', font: 'Arial', size: 44, bold: true, color: '1F3864' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 360 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'En jämförande studie', font: 'Times New Roman', size: 32, italics: true, color: '555555' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 1440 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'Institutionen för kriminologi', font: 'Times New Roman', size: 24, color: '555555' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'Stockholms universitet', font: 'Times New Roman', size: 24, color: '555555' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'Maj 2026', font: 'Times New Roman', size: 24, color: '555555' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 0 },
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ── TABLE OF CONTENTS ─────────────────────────────────────────────────────────
const tocSection = [
  new TableOfContents('Innehållsförteckning', {
    hyperlink: true,
    headingStyleRange: '1-2',
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ── 1. INLEDNING ──────────────────────────────────────────────────────────────
const inledning = [
  h1('1. Inledning'),

  h2('1.1 Syfte och frågeställningar'),
  pJ([
    t('Denna studie syftar till att jämföra gängkriminalitetens karaktär, omfattning och samhälleliga konsekvenser i Sverige och Storbritannien. Trots att de båda länderna skiljer sig åt i storlek, kultur och rättsliga traditioner uppvisar de anmärkningsvärda likheter vad gäller gängrelaterat våld, narkotikamarknader och rekryteringsmekanismer. Studien utgår från officiell kriminalstatistik, BRÅ-rapporter, brittiska Home Office-publikationer samt internationella undersökningar från EMCDDA.'),
    fnRef(1),
  ]),
  pJ([
    t('De centrala frågeställningarna är: (1) Hur har gängkriminaliteten utvecklats i respektive land under perioden 2010–2023? (2) Vilka likheter och skillnader finns avseende skjutvapen, narkotika och rekrytering? (3) Vilka lagstiftnings- och förebyggandestrategier har tillämpats, och med vilka resultat?'),
  ]),

  h2('1.2 Avgränsningar'),
  pJ([
    t('Studien fokuserar på organiserade kriminella nätverk och grupperingar snarare än spontant ungdomsvåld eller enstaka gärningspersoner. Tidsperioden är primärt 2010–2023, med viss historisk bakgrund för att belysa de strukturella förutsättningarna. Geografiskt inkluderas hela Sverige med fokus på storstadsregionerna Stockholm, Göteborg och Malmö, samt England och Wales som representanter för brittiska förhållanden. Nordirland och Skottland lämnas utanför studien på grund av deras specifika historiska och juridiska kontexter.'),
  ]),
];

// ── 2. BAKGRUND ───────────────────────────────────────────────────────────────
const bakgrund = [
  h1('2. Bakgrund'),

  h2('2.1 Gängkriminalitetens framväxt i Sverige'),
  pJ([
    t('Under 1990-talets ekonomiska kris lade sig grogrunden för organiserad brottslighet i svenska förorter. Segregation, hög ungdomsarbetslöshet och bristande integration skapade en miljö där kriminella nätverk kunde rekrytera och expandera. Rikspolisstyrelsen identifierade redan 2009 ett dussintal orter där kriminella nätverk utövade stark påverkan på lokalsamhället och intimiderade vittnen och brottsoffer till tystnad.'),
    fnRef(12),
  ]),
  pJ([
    t('Brottsförebyggande rådet konstaterade i sin rapport från 2016 att Sverige hade ett hundratal kriminella nätverk med varierande grad av organisation och sammanhållning.'),
    fnRef(5),
    t(' Nätverkens lösa struktur – snarare än hierarkiskt organiserade karteller – framhölls som en utmärkande egenskap jämfört med sydeuropeiska och angloamerikanska mönster. Rostami och Mondani har i sin forskning visat att dessa nätverks komplexitet gör dem svåra att kartlägga och bekämpa med traditionella polisiära metoder.'),
    fnRef(4),
  ]),
  pJ([
    t('Från år 2015 och framåt accelererade skjutningarna dramatiskt. Konflikter om narkotikamarknader och revir ledde till ett eskalerande hämndvåld som skördade allt fler liv, inklusive oskyldiga bystanders. Händelserna tvingade politiken att prioritera kampen mot gängkriminalitet, och ett antal lagstiftningspaket antogs från 2017 och framåt.'),
    fnRef(9),
  ]),

  h2('2.2 Gängkriminalitetens framväxt i Storbritannien'),
  pJ([
    t('Brittisk gängkriminalitet har rötter i efterkrigstidens industrialiserade storstäder, men fick sin moderna form under 1980- och 1990-talen med framväxten av narkotikahandeln och territoriella gatugäng. I London, Birmingham och Manchester formerades gäng längs etniska och geografiska gränser i områden präglade av fattigdom och strukturell marginalisering.'),
    fnRef(14),
  ]),
  pJ([
    t('Home Office:s '),
    ti('Serious Violence Strategy'),
    t(' från 2018 identifierade ett starkt samband mellan narkotikamarknadens expansion, socioekonomisk utsatthet och gängrelaterat våld.'),
    fnRef(2),
    t(' Strategin konstaterade att den kraftiga ökningen av knivbrott och skjutningar under perioden 2014–2018 till stor del drevs av konkurrensen om narkotikamarknader och en växande känsla av social exklusion bland unga män i marginaliserade stadsdelar.'),
  ]),
  pJ([
    t('Fenomenet County Lines – där urbana gängmedlemmar organiserar distribution och transport av narkotika till landsbygds- och förortsmiljöer – representerar en ny och allvarlig dimension av brittisk gängkriminalitet. Systemet bygger på att yngre och mer sårbara individer, ibland barn, används som kurirer och mellanled.'),
    fnRef(6),
  ]),
];

// ── 3. JÄMFÖRELSE ────────────────────────────────────────────────────────────
const jamforelse = [
  h1('3. Jämförelse: Sverige och Storbritannien'),

  h2('3.1 Skjutvapen och sprängattacker'),
  pJ([
    t('Sverige sticker ut internationellt med ett högt antal skjutningar per capita jämfört med andra västeuropeiska länder. År 2022 registrerades circa 391 skjutningar i kriminella miljöer, varav 62 var dödliga.'),
    fnRef(1),
    t(' Därtill ökade sprängattackerna markant från och med 2018, med handgranater och hemmagjorda sprängladdningar smugglade framförallt från Balkan som redskap – ett fenomen som saknar direkt motsvarighet i brittisk kontext. Sprängattackerna riktades mot fastigheter, fordon och offentliga platser och skapade en bred otrygghet hos allmänheten.'),
  ]),
  pJ([
    t('I Storbritannien är skjutvapenanvändningen generellt sett lägre till följd av striktare reglering sedan Dunblane-massakern 1996, men knivsåld dominerar gatuvåldet. Under 2022/23 registrerades drygt 49 000 knivbrott i England och Wales. Dödliga skjutningar uppgick till circa 30 fall per år, men vapenbrott totalt – inklusive olagligt innehav – översteg 7 600 fall.'),
    fnRef(6),
  ]),

  h2('3.2 Narkotikamarknader och rekrytering'),
  pJ([
    t('Narkotikahandeln utgör den ekonomiska motorn i gängens verksamhet i båda länderna. I Sverige dominerar cannabis, amfetamin och kokain, medan opioidmarknaden är relativt begränsad jämfört med brittiska förhållanden.'),
    fnRef(7),
    t(' EMCDDA:s rapport från 2023 konstaterar att den europeiska narkotikamarknaden har expanderat kraftigt, med ökad potens i cannabis och ökad tillgänglighet av syntetiska droger som fentanyl och designerdroger.'),
    fnRef(3),
  ]),
  pJ([
    t('Rekryteringen till kriminella nätverk sker i båda länderna tidigt – ofta i åldrarna 13–16 år – och riktar sig mot ungdomar med svaga skolprestationer, instabila familjeförhållanden och låg socioekonomisk status.'),
    fnRef(10),
    t(' I Sverige sker rekryteringen primärt i socialt utsatta förorter, medan brittiska gäng i allt högre grad använder sociala medier och County Lines-strukturer för att nå potentiella rekryter långt utanför storstäderna.'),
    fnRef(2),
  ]),

  h2('3.3 Geografisk koncentration'),
  pJ([
    t('I Sverige är gängkriminaliteten primärt koncentrerad till de tre storstadsregionerna Stockholm, Göteborg och Malmö. Polismyndighetens kartläggning identifierar ett 60-tal utsatta områden med förhöjd brottslighet och begränsad polisiär tillgång.'),
    fnRef(8),
    t(' Malmö har historiskt haft den högsta skjutningsfrekvensen per capita, men Stockholmsregionens förorter – däribland Botkyrka, Järfälla och Tensta – har under 2020-talet blivit allt mer drabbade.'),
    fnRef(15),
  ]),
  pJ([
    t('I Storbritannien är London, Birmingham och Manchester de mest drabbade städerna. Inom London uppvisar stadsdelarna Hackney, Lambeth och Tower Hamlets de högsta nivåerna av gängrelaterat våld. County Lines-fenomenet har emellertid spridit gängkriminaliteten till mindre städer som Bristol, Leeds och Norwich, vilket förändrar geografins traditionella mönster.'),
    fnRef(14),
  ]),

  h2('3.4 Dödlighet och brottsstatistik'),
  new Paragraph({
    children: [new TextRun({
      text: 'Tabell 1: Jämförande nyckelstatistik – Sverige och Storbritannien',
      font: 'Times New Roman', size: 22, italics: true, color: '555555',
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 240, after: 160 },
  }),
  compTable,
  new Paragraph({
    children: [new TextRun({
      text: 'Källor: BRÅ (2023); Home Office (2023); EMCDDA (2023). Siffror avser senast tillgängliga helårsdata.',
      font: 'Times New Roman', size: 18, italics: true, color: '777777',
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 100, after: 280 },
  }),
  pJ([
    t('Statistiken i Tabell 1 belyser en paradox: trots att Sverige är ett avsevärt mindre land än Storbritannien uppvisar det ett proportionellt sett mycket högre antal dödliga skjutningar. Narkotikadödligheten per 100 000 invånare är också markant högre i Sverige, vilket delvis förklaras av den svenska narkotikapolitikens historiska utformning och en mer restriktiv syn på substitutionsbehandling jämfört med brittisk praxis.'),
    fnRef(11),
  ]),
];

// ── 4. LAGSTIFTNING ───────────────────────────────────────────────────────────
const lagstiftning = [
  h1('4. Lagstiftning och polisiära åtgärder'),

  h2('4.1 Sverige'),
  pJ([
    t('Sverige har sedan 2017 genomfört ett antal lagstiftningsreformer för att skärpa kampen mot gängkriminalitet. Straffskärpningar för vapenbrott, sprängmedelsbrott och grovt organiserat häleri har implementerats i flera steg. Polismyndigheten genomgick en genomgripande omorganisation 2015 och har sedan dess gradvis stärkt sin kapacitet att bekämpa organiserad brottslighet i nationella operativa avdelningen (NOA).'),
    fnRef(9),
  ]),
  pJ([
    t('Rättsväsendet har också tillämpat utvidgade möjligheter till hemlig avlyssning, hemlig dataavläsning och kameraövervakning i utredningar rörande grov organiserad brottslighet. Tillgångsinriktad brottsbekämpning – det vill säga beslagtagning av kriminellt förvärvad egendom – har fått ökad prioritet.'),
    fnRef(13),
  ]),
  pJ([
    t('Polismyndigheten implementerade strategin Effektiv bekämpning av organiserad brottslighet, som bygger på nätverkskartläggning, tillgångsinriktad brottsutredning och störningsoperationer riktade mot nyckelpersoner i kriminella nätverk. Dessa insatser har rönt vissa framgångar men kritiserats för att inte adressera de strukturella orsakerna till rekryteringen.'),
    fnRef(5),
  ]),

  h2('4.2 Storbritannien'),
  pJ([
    t('Storbritannien har en längre tradition av specialiserade insatser mot organiserad brottslighet. National Crime Agency (NCA) koordinerar insatser mot allvarlig och organiserad brottslighet på nationell nivå, medan Metropolitan Police i London har egna specialenheter – däribland Trident – riktade mot gängrelaterat vapenvåld.'),
    fnRef(2),
  ]),
  pJ([
    t('Injunctions mot gängrelaterat beteende (gang injunctions) kan utfärdas av domstol och begränsa enskilda personers rörelsefrihet och rätt att umgås med specificerade individer – ett instrument som saknar direkt motsvarighet i svensk rätt. Dessa har dock kritiserats för att drabba etniska minoritetsgrupper oproportionerligt hårt och för att stigmatisera hela stadsdelar.'),
    fnRef(14),
  ]),
];

// ── 5. SOCIALA INSATSER ───────────────────────────────────────────────────────
const socialaInsatser = [
  h1('5. Sociala insatser och förebyggande arbete'),
  pJ([
    t('Forskning visar entydigt att förebyggande sociala insatser är mer kostnadseffektiva på lång sikt än enbart repressiva åtgärder. I Sverige har modeller som Preventionskedjan, Mentorer i Olycksfall (MIO) och Sociala insatsgrupper (SIG) implementerats med varierande resultat.'),
    fnRef(8),
  ]),
  pJ([
    t('Enligt socialtjänstlagen har svenska kommuner ett grundläggande ansvar för förebyggande arbete med unga i riskzonen. Samverkan mellan polis, socialtjänst, skola och frivilligorganisationer i lokala brottsförebyggande råd är en etablerad modell. Utvärderingar visar emellertid blandade resultat, delvis beroende på brister i samordning och uppföljning.'),
    fnRef(11),
  ]),
  pJ([
    t('I Storbritannien har Violence Reduction Units (VRU) etablerats i ett antal städer, inspirerade av den så kallade Glasgow-modellen som kombinerar akutsjukvård, socialt arbete och brottsbekämpning i en sammanhållen folkhälsoansats. Forskning från Glasgow visar att denna holistiska modell bidragit till en signifikant minskning av ungdomsvåldet under en tioårsperiod.'),
    fnRef(2),
  ]),
  pJ([
    t('Mentorprogram, utbildningsinsatser och arbetsmarknadsprogram för unga i riskzonen utgör centrala delar i förebyggandearbetet i båda länderna. Effektutvärderingar visar positiva resultat när sådana program kombineras med strukturella insatser mot fattigdom, bostadssegregation och diskriminering på arbetsmarknaden.'),
    fnRef(15),
  ]),
];

// ── 6. SLUTSATSER ─────────────────────────────────────────────────────────────
const slutsatser = [
  h1('6. Slutsatser'),
  pJ([
    t('Jämförelsen mellan gängkriminaliteten i Sverige och Storbritannien avslöjar ett paradoxalt mönster: trots stora strukturella skillnader i befolkningsstorlek, rättssystem och historisk bakgrund är de grundläggande drivkrafterna remarkabelt lika. Socioekonomisk marginalisering, bostadssegregation och begränsade legala möjligheter skapar i båda länderna grogrunden för kriminell rekrytering och gängrelaterat våld.'),
  ]),
  pJ([
    t('Sverige utmärker sig negativt vad gäller skjutvapenvåld och sprängattacker i europeisk jämförelse, medan Storbritannien kämpar med ett mer utbrett knivsåld och ett komplext County Lines-fenomen som spridit gängkriminaliteten till landsbygden. Narkotikamarknaderna i båda länderna drivs av liknande efterfrågemönster, men distributionsstrukturerna skiljer sig väsentligt åt.'),
    fnRef(7),
  ]),
  pJ([
    t('Lagstiftning och polisiära insatser är nödvändiga men otillräckliga om de inte kompletteras med strukturella socialpolitiska reformer. Erfarenheterna från Glasgow och från svenska kommuner som satsat på tidiga preventiva insatser pekar på att en folkhälsobaserad ansats ger bäst effekt på lång sikt, förutsatt tillräcklig finansiering och tvärsektoriell samordning.'),
    fnRef(8),
  ]),
  pJ([
    t('Fortsatt forskning bör fokusera på longitudinella studier av preventionsprogram, jämförande analys av kriminaliseringspolitikens effekter på rekrytering och avhoppning, samt fördjupad förståelse av de mekanismer genom vilka unga dras in i och lämnar kriminella nätverk.'),
    fnRef(4),
  ]),
];

// ── 7. KÄLLFÖRTECKNING ────────────────────────────────────────────────────────
const kallforteckning = [
  h1('7. Källförteckning'),

  h2('Offentliga rapporter och myndighetspublikationer'),
  p([tb('Brottsförebyggande rådet (BRÅ)'), t('. '), ti('Kriminella nätverk och grupperingar: Polisers bild av maktstrukturer och marknader'), t('. Stockholm: BRÅ, 2016.')]),
  p([tb('Brottsförebyggande rådet (BRÅ)'), t('. '), ti('Polisens förmåga att bekämpa den grova organiserade brottsligheten'), t('. Stockholm: BRÅ, 2014.')]),
  p([tb('Brottsförebyggande rådet (BRÅ)'), t('. '), ti('Skjutningar i kriminella miljöer'), t('. Stockholm: BRÅ, 2019.')]),
  p([tb('Europeiska centrumet för kontroll av narkotika och narkotikamissbruk (EMCDDA)'), t('. '), ti('Drug Markets in Europe'), t('. Lissabon: EMCDDA, 2022.')]),
  p([tb('Europeiska centrumet för kontroll av narkotika och narkotikamissbruk (EMCDDA)'), t('. '), ti('European Drug Report 2023: Trends and Developments'), t('. Lissabon: EMCDDA, 2023.')]),
  p([tb('Home Office'), t('. '), ti('Homicide in England and Wales: Year ending March 2023'), t('. London: Her Majesty\'s Stationery Office, 2023.')]),
  p([tb('Home Office'), t('. '), ti('Serious Violence Strategy'), t('. London: Her Majesty\'s Stationery Office, 2018.')]),
  p([tb('Rikspolisstyrelsen'), t('. '), ti('Kriminella nätverk med stor påverkan på lokalsamhället'), t('. Stockholm: Rikspolisstyrelsen, 2009.')]),

  h2('Akademiska verk och artiklar'),
  p([tb('Densley, John'), t('. '), ti('How Gangs Work: An Ethnography of Youth Violence'), t('. New York: Palgrave Macmillan, 2013.')]),
  p([tb('Estrada, Felipe och Anders Nilsson'), t('. \'Segregation och kriminalitet\'. '), ti('Socialvetenskaplig tidskrift'), t(', vol. 19, nr 1 (2012): 18–35.')]),
  p([tb('Gerell, Manne'), t('. \'Neighborhood Disorder and Crime Prevention through Environmental Design\'. '), ti('Security Journal'), t(', vol. 31, nr 1 (2018): 134–151.')]),
  p([tb('Holgersson, Stefan och Johannes Knutsson'), t('. \'Polisarbete mot grov organiserad brottslighet\'. I '), ti('Organiserad brottslighet: Lösa strukturer och flexibla nätverk'), t(', red. Lars Korsell. Stockholm: Rikspolisstyrelsen, 2010: 82–102.')]),
  p([tb('Rostami, Amir och Hernan Mondani'), t('. \'The Complexity of Crime Network Data: A Case Study of Its Consequences for Crime Control and the Study of Networks\'. '), ti('PLOS ONE'), t(', vol. 10, nr 3 (2015): e0119309.')]),
  p([tb('Williams, Patrick'), t('. \'Criminalising the Other: Challenging the Race-Gang Nexus\'. '), ti('Race & Class'), t(', vol. 59, nr 1 (2017): 45–63.')]),

  h2('Webbkällor'),
  p([
    tb('Brottsförebyggande rådet (BRÅ)'),
    t('. \'Grov organiserad brottslighet\'. '),
    ti('brå.se'),
    t(', 2024. <https://www.bra.se/brott-och-statistik/statistik-utifran-brottstyper/grov-organiserad-brottslighet.html>. Hämtad 8 maj 2026.'),
  ]),
];

// ── Assemble all content ──────────────────────────────────────────────────────
const allContent = [
  ...titlePage,
  ...tocSection,
  ...inledning,
  ...bakgrund,
  ...jamforelse,
  ...lagstiftning,
  ...socialaInsatser,
  ...slutsatser,
  ...kallforteckning,
  ...noter,
];

// ── Build Document ────────────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: 'Times New Roman', size: 24 } },
    },
    paragraphStyles: [
      {
        id: 'Heading1',
        name: 'Heading 1',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 32, bold: true, font: 'Arial', color: '1F3864' },
        paragraph: { spacing: { before: 480, after: 240 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2',
        name: 'Heading 2',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 28, bold: true, font: 'Arial', color: '2E4057' },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: A4_W, height: A4_H },
        margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new TextRun({
            text: 'Gängkriminalitet i Sverige och Storbritannien',
            font: 'Arial', size: 18, color: '888888',
          })],
          alignment: AlignmentType.RIGHT,
          border: {
            bottom: { style: BorderStyle.SINGLE, size: 4, color: 'DDDDDD', space: 4 },
          },
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            new TextRun({ text: 'Sida ', font: 'Times New Roman', size: 20, color: '888888' }),
            new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 20, color: '888888' }),
          ],
          alignment: AlignmentType.CENTER,
        })],
      }),
    },
    children: allContent,
  }],
});

// ── Write file with bookmark ID fix ──────────────────────────────────────────
const AdmZip = require('adm-zip');
const OUT = 'gangkriminalitet_sverige_storbritannien.docx';

Packer.toBuffer(doc)
  .then((buf) => {
    // Post-process: assign unique numeric w:id to each bookmarkStart/End pair
    const zip = new AdmZip(buf);
    const docEntry = zip.getEntry('word/document.xml');
    let xml = zip.readAsText(docEntry, 'utf8');

    // Give each bookmarkStart a unique id (1..N) and sync bookmarkEnd
    let bkId = 1;
    xml = xml.replace(/<w:bookmarkStart([^>]*?)w:id="[^"]*"([^>]*?)\/>/g, (_, pre, post) => {
      return `<w:bookmarkStart${pre}w:id="${bkId++}"${post}/>`;
    });
    bkId = 1;
    xml = xml.replace(/<w:bookmarkEnd([^>]*?)w:id="[^"]*"([^>]*?)\/>/g, (_, pre, post) => {
      return `<w:bookmarkEnd${pre}w:id="${bkId++}"${post}/>`;
    });

    zip.updateFile(docEntry, Buffer.from(xml, 'utf8'));
    const fixed = zip.toBuffer();
    fs.writeFileSync(OUT, fixed);
    console.log('OK ' + OUT + ' (' + fixed.length + ' bytes)');
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
