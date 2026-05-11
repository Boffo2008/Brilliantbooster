const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
        FootnoteReferenceRun, ExternalHyperlink } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Times New Roman", size: 24 } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.CENTER, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Times New Roman" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 }
      },
    ]
  },
  footnotes: {
    1: {
      children: [new Paragraph({
        children: [
          new TextRun("Reuters, "),
          new TextRun({ text: "„Robots run Beijing half marathon alongside humans”", italics: true }),
          new TextRun(", 19 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.reuters.com/technology/robots-run-beijing-half-marathon-2025-04-19/", style: "Hyperlink" })],
            link: "https://www.reuters.com/technology/robots-run-beijing-half-marathon-2025-04-19/"
          })
        ]
      })]
    },
    2: {
      children: [new Paragraph({
        children: [
          new TextRun("BBC News, "),
          new TextRun({ text: "„Humanoid robots complete Beijing half marathon”", italics: true }),
          new TextRun(", 19 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.bbc.com/news/articles/c8ejn5z9wgro", style: "Hyperlink" })],
            link: "https://www.bbc.com/news/articles/c8ejn5z9wgro"
          })
        ]
      })]
    },
    3: {
      children: [new Paragraph({
        children: [
          new TextRun("The Guardian, "),
          new TextRun({ text: "„Chinese humanoid robots complete half marathon in Beijing”", italics: true }),
          new TextRun(", 20 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.theguardian.com/world/2025/apr/19/chinese-humanoid-robots-complete-half-marathon-beijing", style: "Hyperlink" })],
            link: "https://www.theguardian.com/world/2025/apr/19/chinese-humanoid-robots-complete-half-marathon-beijing"
          })
        ]
      })]
    },
    4: {
      children: [new Paragraph({
        children: [
          new TextRun("South China Morning Post, "),
          new TextRun({ text: "„China’s humanoid robot makers show off endurance in Beijing half marathon”", italics: true }),
          new TextRun(", 20 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.scmp.com/news/china/science/article/3307187/chinas-humanoid-robot-makers-show-off-endurance-beijing-half-marathon", style: "Hyperlink" })],
            link: "https://www.scmp.com/news/china/science/article/3307187/chinas-humanoid-robot-makers-show-off-endurance-beijing-half-marathon"
          })
        ]
      })]
    },
    5: {
      children: [new Paragraph({
        children: [
          new TextRun("New Scientist, "),
          new TextRun({ text: "„Humanoid robots ran a half marathon – here’s what it tells us about their future”", italics: true }),
          new TextRun(", 22 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.newscientist.com/article/2476067-humanoid-robots-ran-a-half-marathon-heres-what-it-tells-us-about-their-future/", style: "Hyperlink" })],
            link: "https://www.newscientist.com/article/2476067-humanoid-robots-ran-a-half-marathon-heres-what-it-tells-us-about-their-future/"
          })
        ]
      })]
    },
    6: {
      children: [new Paragraph({
        children: [
          new TextRun("Wired, "),
          new TextRun({ text: "„China’s Robot Half Marathon Was a Glimpse of the Future—and Its Limits”", italics: true }),
          new TextRun(", 21 april 2025. Tillgänglig: "),
          new ExternalHyperlink({
            children: [new TextRun({ text: "https://www.wired.com/story/china-robot-half-marathon-beijing-humanoid/", style: "Hyperlink" })],
            link: "https://www.wired.com/story/china-robot-half-marathon-beijing-humanoid/"
          })
        ]
      })]
    }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Title
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Kinas robotar tar steget ut på löparbanan – halvmaratonet som förändrade synen på humanoidrobotik", bold: true, font: "Times New Roman", size: 32 })]
      }),

      // Introduktion heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Introduktion", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Introduktion text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Den 19 april 2025 ägde ett unikt evenemang rum längs gatorna i Pekings ekonomiska zon Yizhuang. Bland tusentals mänskliga löpare i ett halvmaraton tog sig ett tjugotal humanoidrobotar an sträckan på 21,0975 kilometer. Evenemanget, som snabbt fick internationell uppmärksamhet,", font: "Times New Roman", size: 24 }),
          new FootnoteReferenceRun(1),
          new FootnoteReferenceRun(2),
          new TextRun({ text: " var inte bara ett spektakulärt skadepäl utan också ett viktigt mätinstrument för hur långt Kinas robotindustri faktiskt har kommit. Tävlingen var öppen för både människor och maskiner och bjuded på allt från välkoordinerade löprobotar till mer vacklande prototyper som kämpade med att hålla balansen. Resultatet var en fascinerande blandning av teknisk prestation och påminnelse om de utmaningar som återstår.", font: "Times New Roman", size: 24 })
        ]
      }),

      // Robotarna i startfältet heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Robotarna i startfältet", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Robotarna i startfältet text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Totalt deltog 21 humanoidrobotar från ett flertal kinesiska teknikföretag, däribland Unitree Robotics, Noetix Robotics och Deep Robotics. Robotarna varierade kraftigt i design, rörelseförmåga och uthållighet. Vissa modeller var utrustade med avancerade sensorsystem och artificiell intelligens för att hantera terrängen, medan andra krävde mänskliga handledare som sprang bredvid för att ge stöd och förhindra fall. Det var tillåtet för handledare att springa bredvid robotarna och ingripa om de föll eller behövde teknisk hjälp, men all tid räknades inklusive eventuella stopp för laddning eller reparation. Unitrees robot Tiangong Ultra var en av de mest omtalade deltagarna och fullföljde loppet på 2 timmar och 40 minuter – en respektabel tid med tanke på att den genomsnittlige mänskliga halvmaratonlöparen siktar på ungefär 2 timmar. Det faktum att en robot överhuvudtaget kunde fullfölja distansen utan att krascha representerar ett tekniskt genombrott som få hade förutspått så tidigt.", font: "Times New Roman", size: 24 }),
          new FootnoteReferenceRun(3),
        ]
      }),

      // Tekniska utmaningar heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Tekniska utmaningar", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Tekniska utmaningar text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Att springa ett halvmaraton är långt ifrån en trivial uppgift – inte ens för en människa. För en robot handlar det om att lösa en lång rad komplexa problem simultant: balansering på ojämnt underlag, värmestyrning av motorer och batterier, stötdämpning i lederna, och kontinuerlig omplanering av rörelse mönster baserat på sensorinput. Flera robotar råkade ut för tekniska haveri under loppets gång – batterier tog slut, en del robotar föll och behövde restas upp, och minst en fick byta batteri mitt i loppet, vilket tog avsevärd tid. Trots detta fullföljde majoriteten av deltagarna distansen. Det faktum att robotarna kunde hantera variationer i markunderlag, folkmassor och vädrförhållanden under en så lång sträcka vittnar om de framsteg som gjorts inom rörelseplanering och energieffektivitet. Peking-halvmaratonet fungerade därmed som ett stresstest i verklig miljö – något som laboratorietester aldrig fullt ut kan ersätta.", font: "Times New Roman", size: 24 }),
          new FootnoteReferenceRun(4),
        ]
      }),

      // Kinas satsning heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Kinas satsning på humanoidrobotik", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Kinas satsning text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Evenemanget är inte frikopplat från en bredare geopolitisk och industriell kontext. Kina har under de senaste åren gjort massiva statliga och privata investeringar i humanoidrobotik med ambitionen att bli världsledande inom sektorn. Den kinesiska staten har pekat ut avancerad robotik som en strategisk nyckelsbransch i landets femårsplaner, och lokala myndigheter erbjuder generosa subventioner till företag som utvecklar nästa generations robotar. Företag som Unitree Robotics", font: "Times New Roman", size: 24 }),
          new FootnoteReferenceRun(5),
          new FootnoteReferenceRun(6),
          new TextRun({ text: " har väckt uppmärksamhet internationellt, inte minst sedan Unitree H1-roboten tidigare visats upp vid olika globala teknikmässor. Halvmaratonet i Peking var också en tydlig signal till omvärlden: Kina avser inte att stå i skuggan av amerikanska aktörer som Boston Dynamics och Figure AI. Istället väljer man att demonstrera sina förmågor i det offentliga rummet, inför kameror och en global publik. Det är robotdiplomati i löparskor.", font: "Times New Roman", size: 24 })
        ]
      }),

      // Reaktioner och kritik heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Reaktioner och kritik", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Reaktioner och kritik text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Reaktionerna på evenemanget var blandade. Teknikentusiaster och robotikforskare hyllade det som ett historiskt ögonblick, en milstolpe på vägen mot fungerande autonoma maskiner i vardagsmäljöer. Kritiker påpekade att villkoren inte var jämförbara med hur robotar förväntas fungera i verkliga tillämpningar – handledarna som sprang bredvid och ingrep vid behov minskar bevisvärdet för verklig autonomi. Dessutom noterade flera experter att 2 timmar och 40 minuter för 21 kilometer, med tillgång till mänsklig hjälp, fortfarande är långt från mänsklig topprestanda. Men det är kanske att missa poienten. Halvmaratonet var inte ett bevis på att robotar är bättre än människor på att springa – det var ett bevis på att de numera kan hålla igång länge nog för att vara praktiskt användbara.", font: "Times New Roman", size: 24 })
        ]
      }),

      // Framtidsperspektiv heading
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Framtidsperspektiv", bold: true, font: "Times New Roman", size: 28 })]
      }),

      // Framtidsperspektiv text
      new Paragraph({
        spacing: { line: 276 },
        children: [
          new TextRun({ text: "Vad händer härnäst? Experter inom branschen menar att nästa steg handlar om att öka graden av autonomi, minska energiåtgången och göra robotarna mer robusta i oförutseända situationer. Halvmaratonet i Peking kan mycket väl bli ett återkommande evenemang – kanske med strängare regler kring handledares inblandning och hårdare krav på självständig navigering. I ett längre perspektiv är humanoidrobotar tänkta att arbeta sida vid sida med människor i fabriker, sjukhus, äldreomsorg och katastrofinsatser. Att de nu klarar av att springa ett halvmaraton är en stark indikator på att den mekaniska uthålligheten och rörelseförmågan börjar mogna. Klockan tickar – och i Peking visade sig maskiner klara av att ticka den i takt med löpande fötter längs en 21 kilometer lång asfaltsremsa.", font: "Times New Roman", size: 24 })
        ]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:\\Claude\\kinesiska_robotar_halvmaraton.docx", buffer);
  console.log("Document saved successfully!");
});
