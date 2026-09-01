/* ============================================================
   content.js — EVERYTHING you edit lives in this one file.
   ------------------------------------------------------------
   Every piece of text is written as:   { en: "English", de: "Deutsch" }
   This site is text-only by design — there are no image slots.
   ============================================================ */

const CONTENT = {

  /* ---------- 1. WHO YOU ARE ---------- */
  meta: {
    name:      "Somesh Khandelia",
    initials:  "SK",
    email:     "someshkhandelia@gmail.com",
    links: {
      github:     "https://github.com/someshkhandelia",
      linkedin:   "https://www.linkedin.com/in/somesh-khandelia-86aba4ba/",
      scholar:    "",
      youtube:    "",          // paste your channel URL
      codeforces: "",          // paste your Codeforces profile URL
      cv:         "assets/files/CV_Somesh_Khandelia.pdf"
    },
    tabTitle: {
      en: "Somesh Khandelia — Computer Vision & Software Engineering",
      de: "Somesh Khandelia — Computer Vision & Softwareentwicklung"
    }
  },

  /* ---------- 2. NAVIGATION LABELS ---------- */
  nav: {
    journey:      { en: "Journey",      de: "Werdegang" },
    projects:     { en: "Projects",     de: "Projekte" },
    publications: { en: "Publications", de: "Publikationen" },
    contact:      { en: "Contact",      de: "Kontakt" }
  },

  /* ---------- 3. HERO ---------- */
  hero: {
    eyebrow:  { en: "Computer Vision · Machine Learning · Software Engineering",
                de: "Computer Vision · Machine Learning · Softwareentwicklung" },
    headline: { en: "I make messy real-world data behave.",
                de: "Ich bringe chaotische Daten in Form." },
    intro: {
      en: "M.Sc. in Computer Science from TU Munich. For eight years I've been walking into other people's domains — trading desks, hospitals, warehouses, helicopters — and turning their hardest data problem into software that survives production. Computer vision, machine learning and software engineering carry equal weight in that work: I've shipped models, frontends and backends alike, and the interesting part is almost never the model.",
      de: "M.Sc. Informatik an der TU München. Seit acht Jahren arbeite ich mich in fremde Fachgebiete ein — Handelsräume, Krankenhäuser, Logistikzentren, Hubschrauber — und mache aus dem jeweils schwierigsten Datenproblem Software, die im Produktivbetrieb standhält. Computer Vision, Machine Learning und Softwareentwicklung haben dabei dasselbe Gewicht: Ich habe Modelle, Frontends und Backends ausgeliefert, und der spannende Teil ist selten das Modell."
    },
    facts: [
      { label: { en: "Based in",   de: "Wohnort" },      value: { en: "Germany", de: "Deutschland" } },
      { label: { en: "Focus",      de: "Schwerpunkt" },  value: { en: "Computer Vision, ML, Software Engineering", de: "Computer Vision, ML, Softwareentwicklung" } },
      { label: { en: "Languages",  de: "Sprachen" },     value: { en: "English C2 · German B2 · Hindi", de: "Englisch C2 · Deutsch B2 · Hindi" } },
      { label: { en: "Work status",de: "Arbeitserlaubnis" }, value: { en: "Valid German work permit", de: "Gültige deutsche Arbeitserlaubnis" } }
    ],
    ctaCv:      { en: "Download CV",  de: "Lebenslauf laden" },
    ctaContact: { en: "Get in touch", de: "Kontakt aufnehmen" },
  },

  /* ---------- 4. THE JOURNEY ---------- */
  journeyIntro: {
    title: { en: "The Journey", de: "Der Werdegang" },
    blurb: { en: "From Kolkata to Germany, by way of Durgapur and Hyderabad. Every stop taught me something the one before it couldn't — here they are, in order.",
             de: "Von Kolkata nach Deutschland, über Durgapur und Hyderabad. Jede Station hat mir etwas beigebracht, das die vorherige nicht konnte — hier sind sie der Reihe nach." }
  },
  journey: [
    {
      type: "work",
      period: { en: "May 2025 — Oct 2025", de: "Mai 2025 — Okt. 2025" },
      role:   { en: "Research Associate · Data Integration Center", de: "Wissenschaftlicher Mitarbeiter · Data Integration Center" },
      org:    "TUM Klinikum rechts der Isar",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Klinikum%20rechts%20der%20Isar%2C%20M%C3%BCnchen"
      },
      story: {
        en: "Hospital data is the strictest data there is. At the Data Integration Center I built the plumbing that lets researchers use it without ever learning whose it is — a Python pseudonymisation library, a CLI around it, and a FastAPI service on top. The hard part turned out not to be privacy but scale: DICOM headers arriving as JSON files north of 20 GB, which I ended up streaming and parsing recursively into FHIR rather than loading at all.",
        de: "Krankenhausdaten sind die am strengsten regulierten Daten überhaupt. Im Data Integration Center habe ich die Infrastruktur gebaut, mit der Forschende sie nutzen können, ohne je zu erfahren, zu wem sie gehören — eine Python-Bibliothek zur Pseudonymisierung, ein CLI-Werkzeug dazu und ein FastAPI-Backend darüber. Die eigentliche Hürde war nicht der Datenschutz, sondern die Größe: DICOM-Header kamen als JSON-Dateien jenseits von 20 GB an, die ich am Ende rekursiv gestreamt und nach FHIR überführt habe, statt sie zu laden."
      },
      highlights: {
        en: ["Python pseudonymisation library, CLI tool and FastAPI backend for clinical data",
             "Memory-efficient streaming parser: >20 GB hierarchical DICOM JSON into FHIR",
             "Statistical analysis tool for large oncology XML exports"],
        de: ["Python-Bibliothek, CLI-Werkzeug und FastAPI-Backend zur Pseudonymisierung klinischer Daten",
             "Speichereffizienter Streaming-Parser: über 20 GB hierarchisches DICOM-JSON nach FHIR",
             "Werkzeug zur statistischen Auswertung großer Onkologie-XML-Exporte"]
      },
      tags: ["Python", "FastAPI", "FHIR", "DICOM", "ETL"]
    },
    {
      type: "work",
      period: { en: "Oct 2024 — Dec 2024", de: "Okt. 2024 — Dez. 2024" },
      role:   { en: "Software Developer · Amazon Robotics, Scanless Technology", de: "Softwareentwickler · Amazon Robotics, Scanless Technology" },
      org:    "Amazon",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Amazon%20Development%20Center%20Germany%2C%20M%C3%BCnchen"
      },
      story: {
        en: "A single-camera barcode scanner has to work in a real warehouse, not on a test rig. I helped ship the EU product into production, then went to the warehouses in Nuremberg and Leipzig to see for myself where it fell short — because the distance between 99% in the lab and 99% on a moving conveyor is where all the engineering lives. The contract ended when the EU project budget did.",
        de: "Ein Barcode-Scanner mit nur einer Kamera muss im echten Logistikzentrum funktionieren, nicht auf dem Prüfstand. Ich habe geholfen, das EU-Produkt in den Produktivbetrieb zu bringen, und bin anschließend selbst in die Logistikzentren in Nürnberg und Leipzig gefahren, um zu sehen, wo es hakt — denn zwischen 99 % im Labor und 99 % auf einem laufenden Förderband steckt die ganze Ingenieursarbeit. Der Vertrag endete mit dem EU-Projektbudget."
      },
      highlights: {
        en: ["Deployed a Python single-camera barcode scanner to production using Docker and AWS",
             "Quantified production performance gaps on-site in Nuremberg and Leipzig",
             "Held automated scanning accuracy above 99%"],
        de: ["Python-Barcode-Scanner mit Einzelkamera per Docker und AWS in den Produktivbetrieb überführt",
             "Leistungslücken im Produktivbetrieb vor Ort in Nürnberg und Leipzig quantifiziert",
             "Automatisierte Scan-Genauigkeit von über 99 % gehalten"]
      },
      tags: ["Python", "Docker", "AWS", "Computer Vision"]
    },
    {
      type: "work",
      period: { en: "Mar 2024 — May 2024", de: "März 2024 — Mai 2024" },
      role:   { en: "Research Associate · Technical Project Lead", de: "Wissenschaftlicher Mitarbeiter · Technischer Projektleiter" },
      org:    "Technical University of Munich (TUM)",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Technische%20Universit%C3%A4t%20M%C3%BCnchen"
      },
      story: {
        en: "Three of us building a full-stack Next.js application to help doctors treat depression using patient-generated health data. I led the technical side and — as tends to happen in a university department — also became the person who kept everyone else's machines alive and owned the department's GitHub.",
        de: "Zu dritt haben wir eine Full-Stack-Anwendung mit Next.js gebaut, die Ärztinnen und Ärzte bei der Behandlung von Depressionen mit patientengenerierten Gesundheitsdaten unterstützt. Ich habe die technische Leitung übernommen und wurde — wie das an einem Lehrstuhl so kommt — nebenbei zu der Person, die die Rechner aller anderen am Laufen hielt und das GitHub des Lehrstuhls verantwortete."
      },
      highlights: {
        en: ["Led a team of 3 on a t3-stack Next.js application for clinicians",
             "Ran IT for a department of 10+: hardware, VM instances, procurement, repairs",
             "Codebase owner and maintainer for the department on GitHub"],
        de: ["Dreiköpfiges Team bei einer Next.js-Anwendung (t3-Stack) für Klinikpersonal geleitet",
             "IT für einen Lehrstuhl mit über 10 Personen betreut: Hardware, VM-Instanzen, Beschaffung, Reparaturen",
             "Verantwortlich für die Codebasis des Lehrstuhls auf GitHub"]
      },
      tags: ["Next.js", "TypeScript", "t3-stack", "Team Lead"]
    },
    {
      type: "work",
      period: { en: "Aug 2023 — Sept 2023", de: "Aug. 2023 — Sept. 2023" },
      role:   { en: "Software Developer", de: "Softwareentwickler" },
      org:    "Scandio GmbH",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Scandio%20GmbH%2C%20M%C3%BCnchen"
      },
      story: {
        en: "Two months with an honest ending: the company couldn't secure client projects and let go of everyone still in their probationary period. I spent the time going deep on React, Redux and TypeScript, and left with AWS Technical and Sales accreditations.",
        de: "Zwei Monate mit einem ehrlichen Ende: Das Unternehmen konnte keine Kundenprojekte gewinnen und trennte sich von allen, die noch in der Probezeit waren. Ich habe die Zeit genutzt, um mich tief in React, Redux und TypeScript einzuarbeiten, und bin mit den AWS Technical und Sales Accreditations gegangen."
      },
      highlights: {
        en: ["Advanced coursework in Python, React.js, Redux and TypeScript",
             "AWS Technical and Sales Accreditations; introductory Docker and AWS"],
        de: ["Weiterbildung auf fortgeschrittenem Niveau in Python, React.js, Redux und TypeScript",
             "AWS Technical und Sales Accreditation; Einführungskurse zu Docker und AWS"]
      },
      tags: ["TypeScript", "React.js", "Redux", "AWS"]
    },
    {
      type: "work",
      period: { en: "Oct 2022 — Apr 2023", de: "Okt. 2022 — Apr. 2023" },
      role:   { en: "Researcher · Master's Thesis", de: "Wissenschaftler · Masterarbeit" },
      org:    "German Aerospace Center (DLR) — Earth Observation Center",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=DLR%20Earth%20Observation%20Center%20Oberpfaffenhofen"
      },
      story: {
        en: "The work I'm proudest of. Track vehicles across two datasets that could hardly be more different: low-frame-rate aerial footage from a moving helicopter, and high-frame-rate ground footage from cameras fixed above traffic intersections. Trackers are usually tuned for one or the other. Mine had to be good at both, and came out with the best overall HOTA, MOTA and IDF1 across the pair. Graded 1.0.",
        de: "Die Arbeit, auf die ich am stolzesten bin. Fahrzeuge in zwei Datensätzen verfolgen, die unterschiedlicher kaum sein könnten: Luftaufnahmen mit niedriger Bildrate aus einem fliegenden Hubschrauber und Bodenaufnahmen mit hoher Bildrate von fest installierten Kameras über Kreuzungen. Tracker sind üblicherweise auf das eine oder das andere abgestimmt. Meiner musste beides beherrschen — und erzielte über beide Datensätze hinweg die besten HOTA-, MOTA- und IDF1-Werte. Note 1,0."
      },
      highlights: {
        en: ["Best overall MOT benchmark (HOTA, MOTA, IDF1) across both the DLR aerial and A9 ground datasets",
             "Built on and beyond ByteTrack, DeepSORT, BoT-SORT and UAVMOT",
             "Supervised by Prof. Dr. Alois Knoll, advised by Dr. Walter Zimmer · thesis grade 1.0"],
        de: ["Bester MOT-Gesamtscore (HOTA, MOTA, IDF1) über den DLR-Luftbild- und den A9-Bodendatensatz hinweg",
             "Aufbauend auf und über ByteTrack, DeepSORT, BoT-SORT und UAVMOT hinaus",
             "Betreut von Prof. Dr. Alois Knoll, fachlich begleitet von Dr. Walter Zimmer · Note 1,0"]
      },
      tags: ["PyTorch", "Deep Learning", "YOLO", "MOT", "re-ID"]
    },
    {
      type: "work",
      period: { en: "Sept 2022 — Apr 2023", de: "Sept. 2022 — Apr. 2023" },
      role:   { en: "Working Student · Software Developer", de: "Werkstudent · Softwareentwickler" },
      org:    "TNG Technology Consulting GmbH",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=TNG%20Technology%20Consulting%20GmbH%2C%20Unterf%C3%B6hring"
      },
      story: {
        en: "OpossumUI is an open-source licence-compliance tool, built for Meta. I worked on the frontend — mostly the statistical visualisations that let a reviewer take in the shape of a codebase's licence situation at a glance — plus a steady stream of bug fixes and performance work.",
        de: "OpossumUI ist ein quelloffenes Werkzeug zur Lizenz-Compliance, entwickelt für Meta. Ich habe am Frontend gearbeitet — vor allem an den statistischen Visualisierungen, mit denen Prüfende die Lizenzlage einer Codebasis auf einen Blick erfassen können — dazu laufend Fehlerbehebungen und Performance-Verbesserungen."
      },
      highlights: {
        en: ["Statistical visualisations in React.js, Redux, TypeScript and Recharts",
             "Bug fixes and performance improvements on an open-source tool used by Meta"],
        de: ["Statistische Visualisierungen mit React.js, Redux, TypeScript und Recharts",
             "Fehlerbehebungen und Performance-Verbesserungen an einem von Meta genutzten Open-Source-Werkzeug"]
      },
      tags: ["TypeScript", "React.js", "Redux", "Recharts", "TDD"]
    },
    {
      type: "work",
      period: { en: "Jan 2022 — Jul 2022", de: "Jan. 2022 — Juli 2022" },
      role:   { en: "Working Student · Machine Learning", de: "Werkstudent · Machine Learning" },
      org:    "Siemens AG — Digital Lab, Global Business Services",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Siemens%20AG%2C%20M%C3%BCnchen"
      },
      story: {
        en: "Three unrelated problems in six months, which is the best kind of working-student job. Detecting wear on manufacturing tools from microscope images. Making a large equipment-assembly document searchable with OCR and PDF text mining. And helping HR find out which job descriptions across the company were quietly duplicates of one another.",
        de: "Drei voneinander unabhängige Probleme in sechs Monaten — die beste Art von Werkstudentenstelle. Verschleißerkennung an Fertigungswerkzeugen anhand von Mikroskopbildern. Ein umfangreiches Montagehandbuch per OCR und PDF-Text-Mining durchsuchbar machen. Und der Personalabteilung zeigen, welche Stellenbeschreibungen im Konzern still und leise Dubletten voneinander waren."
      },
      highlights: {
        en: ["Wear detection via image registration and keypoint matching with OpenCV",
             "Document search using OCR and PDF text mining for factory workers",
             "Job-description similarity using BERT-based transformer models"],
        de: ["Verschleißerkennung mittels Bildregistrierung und Keypoint-Matching mit OpenCV",
             "Dokumentensuche per OCR und PDF-Text-Mining für Mitarbeitende in der Fertigung",
             "Ähnlichkeitsanalyse von Stellenbeschreibungen mit BERT-basierten Transformer-Modellen"]
      },
      tags: ["Python", "OpenCV", "OCR", "BERT", "NLP"]
    },
    {
      type: "work",
      period: { en: "Sept 2021 — Dec 2021", de: "Sept. 2021 — Dez. 2021" },
      role:   { en: "Internship · Web Developer", de: "Praktikum · Webentwickler" },
      org:    "Volkswagen Data Lab",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Volkswagen%20Data%20Lab%2C%20M%C3%BCnchen"
      },
      story: {
        en: "Battery samples come back from many suppliers, across many tests, in many shapes. I built the frontend that pulled all of it into one application, so an engineer could compare performance without opening five different tools first.",
        de: "Batteriemuster kommen von vielen Zulieferern, aus vielen Testreihen und in vielen Formaten zurück. Ich habe das Frontend gebaut, das all das in einer einzigen Anwendung zusammenführt, damit Ingenieurinnen und Ingenieure Leistungsdaten vergleichen können, ohne vorher fünf verschiedene Werkzeuge zu öffnen."
      },
      highlights: {
        en: ["Frontend of a battery-testing web application in React.js, TypeScript and GraphQL",
             "Supplier management, user management and data management workflows"],
        de: ["Frontend einer Webanwendung für Batterietests mit React.js, TypeScript und GraphQL",
             "Abläufe für Lieferanten-, Benutzer- und Datenverwaltung"]
      },
      tags: ["React.js", "GraphQL", "TypeScript", "Material-UI", "Scrum"]
    },
    {
      type: "work",
      period: { en: "Jun 2021 — Dec 2021", de: "Juni 2021 — Dez. 2021" },
      role:   { en: "Working Student · Machine Learning", de: "Werkstudent · Machine Learning" },
      org:    "Rohde & Schwarz",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Rohde%20%26%20Schwarz%2C%20M%C3%BCnchen"
      },
      story: {
        en: "Connecting a test system to several devices under test used to mean reading dense manuals and working the cabling out by hand. I trained a model to predict the right configuration from what each side supports — 4G/5G, antenna counts, port types — and handed back the hours that used to disappear into those manuals.",
        de: "Ein Testsystem mit mehreren Prüflingen zu verkabeln hieß bis dahin: dicke Handbücher lesen und die Verbindungen von Hand ermitteln. Ich habe ein Modell trainiert, das die richtige Konfiguration aus den unterstützten Parametern beider Seiten vorhersagt — 4G/5G, Antennenzahl, Porttypen — und damit die Stunden zurückgegeben, die zuvor in diesen Handbüchern versickerten."
      },
      highlights: {
        en: ["Predicted optimal cabling scenarios between a test system and multiple devices under test",
             "Saved engineering hours previously spent reading complex user manuals"],
        de: ["Optimale Verkabelungsszenarien zwischen Testsystem und mehreren Prüflingen vorhergesagt",
             "Ingenieursstunden eingespart, die zuvor für das Lesen komplexer Handbücher draufgingen"]
      },
      tags: ["Python", "C#", "scikit-learn", "Decision Trees", "Random Forests"]
    },
    {
      type: "work",
      period: { en: "Sept 2020 — May 2021", de: "Sept. 2020 — Mai 2021" },
      role:   { en: "Working Student · Data Engineer", de: "Werkstudent · Data Engineer" },
      org:    "Fusionbase",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Fusionbase%2C%20M%C3%BCnchen"
      },
      story: {
        en: "An early-stage startup, working directly with the founders. I built more than fifteen data pipelines that turned messy public internet data into clean datasets companies could actually use — BMW among them. The one I remember: GDELT, a global events database, where moving to multiprocessing took a 52-million-row update from eight hours down to twenty-five minutes.",
        de: "Ein Start-up in der Frühphase, direkte Zusammenarbeit mit den Gründern. Ich habe über fünfzehn Datenpipelines gebaut, die unordentliche öffentliche Internetdaten in saubere, nutzbare Datensätze verwandelt haben — unter anderem für BMW. In Erinnerung geblieben ist mir GDELT, eine globale Ereignisdatenbank: Durch Multiprocessing sank die Aktualisierungszeit für 52 Millionen Zeilen von acht Stunden auf fünfundzwanzig Minuten."
      },
      highlights: {
        en: ["15+ distinct data pipelines feeding structured datasets into MySQL and MongoDB",
             "GDELT: 52-million-row update cut from 8 hours to 25 minutes with multiprocessing",
             "Clients included BMW"],
        de: ["Über 15 eigenständige Datenpipelines, die strukturierte Datensätze nach MySQL und MongoDB liefern",
             "GDELT: Aktualisierung von 52 Millionen Zeilen dank Multiprocessing von 8 Stunden auf 25 Minuten verkürzt",
             "Zu den Kunden zählte unter anderem BMW"]
      },
      tags: ["Python", "multiprocessing", "Web scraping", "MongoDB", "MySQL"]
    },
    {
      type: "education",
      period: { en: "Apr 2020 — Apr 2023", de: "Apr. 2020 — Apr. 2023" },
      role:   { en: "M.Sc. Computer Science", de: "M.Sc. Informatik" },
      org:    "Technical University of Munich (TUM)",
      location: {
        name: { en: "Munich, Germany", de: "München, Deutschland" },
        maps: "https://www.google.com/maps/search/?api=1&query=Technische%20Universit%C3%A4t%20M%C3%BCnchen"
      },
      story: {
        en: "I moved from India to Munich for this degree. Computer Vision as the major, Machine Learning and Software Engineering as minors — and, running alongside the whole time, six part-time roles across the city. The lectures gave me the vocabulary; the jobs taught me what any of it was for.",
        de: "Für dieses Studium bin ich von Indien nach München gezogen. Computer Vision als Hauptfach, Machine Learning und Software Engineering als Nebenfächer — und die ganze Zeit über parallel sechs Teilzeitstellen in der Stadt. Die Vorlesungen gaben mir das Vokabular, die Jobs zeigten mir, wozu das alles gut ist."
      },
      highlights: {
        en: ["Overall grade 1.7, thesis 1.0 (German scale)",
             "Major: Computer Vision · Minors: Machine Learning, Software Engineering",
             "Deutschlandstipendium 2020–2021 and e-fellows.net scholarship",
             "hackaTUM 2020 finalist"],
        de: ["Gesamtnote 1,7, Abschlussarbeit 1,0",
             "Hauptfach: Computer Vision · Nebenfächer: Machine Learning, Software Engineering",
             "Deutschlandstipendium 2020–2021 und e-fellows.net-Stipendium",
             "Finalist beim hackaTUM 2020"]
      },
      tags: ["Computer Vision", "Machine Learning", "Software Engineering"]
    },
    {
      type: "work",
      period: { en: "Aug 2019 — Nov 2019", de: "Aug. 2019 — Nov. 2019" },
      role:   { en: "Research Associate · CNeRG", de: "Wissenschaftlicher Mitarbeiter · CNeRG" },
      org:    "Indian Institute of Technology Kharagpur (IIT KGP)",
      location: {
        name: { en: "Kharagpur, India", de: "Kharagpur, Indien" },
        maps: "https://www.google.com/maps/search/?api=1&query=Indian%20Institute%20of%20Technology%20Kharagpur"
      },
      story: {
        en: "An Intel-sponsored project on a problem everyone has felt: video streaming flattening a phone battery. We predicted network throughput ahead of time so the player could make smarter bitrate decisions, and cut battery consumption by around 30%. The paper was accepted at IFIP Networking 2020.",
        de: "Ein von Intel gefördertes Projekt zu einem Problem, das jeder kennt: Videostreaming, das den Handyakku leersaugt. Wir haben den Netzwerkdurchsatz vorausgesagt, damit der Player klügere Bitratenentscheidungen treffen kann, und den Akkuverbrauch um rund 30 % gesenkt. Die Arbeit wurde auf der IFIP Networking 2020 angenommen."
      },
      highlights: {
        en: ["Reduced battery consumption by ~30% for cellular video streaming",
             "Supervised by Prof. Dr. Sandip Chakraborty · sponsored by Intel",
             "Paper accepted at IFIP Networking 2020"],
        de: ["Akkuverbrauch beim Videostreaming im Mobilfunknetz um rund 30 % gesenkt",
             "Betreut von Prof. Dr. Sandip Chakraborty · gefördert von Intel",
             "Beitrag angenommen auf der IFIP Networking 2020"]
      },
      tags: ["TensorFlow", "Keras", "LSTM", "Deep Learning"]
    },
    {
      type: "work",
      period: { en: "Jun 2018 — Jun 2019", de: "Juni 2018 — Juni 2019" },
      role:   { en: "Software Developer · Options Trading", de: "Softwareentwickler · Optionshandel" },
      org:    "D. E. Shaw & Co.",
      location: {
        name: { en: "Hyderabad, India", de: "Hyderabad, Indien" },
        maps: "https://www.google.com/maps/search/?api=1&query=D.%20E.%20Shaw%20India%2C%20Hyderabad"
      },
      story: {
        en: "First job out of university, in a team of four running the US options strategy — 900,000 instruments and the desk's main source of revenue. I rebuilt its infrastructure in Python. A four-person team means you do all of it: writing it, testing it past 90% coverage, running QA, and taking two-week DevOps rotations where you make sure every CRON job has landed before the market opens, weekends included.",
        de: "Der erste Job nach der Universität, in einem Viererteam für die US-Optionsstrategie — 900.000 Instrumente und die wichtigste Ertragsquelle des Desks. Ich habe deren Infrastruktur in Python neu aufgebaut. In einem Viererteam macht man alles: schreiben, auf über 90 % Testabdeckung bringen, QA durchführen und zweiwöchige DevOps-Schichten übernehmen, in denen man sicherstellt, dass jeder CRON-Job durchgelaufen ist, bevor die Börse öffnet — auch am Wochenende."
      },
      highlights: {
        en: ["Revamped the US options infrastructure covering 900,000 instruments",
             "Test-Driven Development maintaining >90% code coverage",
             "Two-week DevOps rotations across global exchanges and corporate actions",
             "2nd runner-up, firmwide hackathon"],
        de: ["Infrastruktur der US-Optionsstrategie mit 900.000 Instrumenten neu aufgebaut",
             "Testgetriebene Entwicklung mit durchgehend über 90 % Codeabdeckung",
             "Zweiwöchige DevOps-Schichten über globale Börsen und Kapitalmaßnahmen hinweg",
             "Dritter Platz beim unternehmensweiten Hackathon"]
      },
      tags: ["Python", "pandas", "NumPy", "TDD", "OOP", "DevOps"]
    },
    {
      type: "education",
      period: { en: "Aug 2014 — May 2018", de: "Aug. 2014 — Mai 2018" },
      role:   { en: "B.Tech. Computer Science & Engineering", de: "B.Tech. Informatik und Ingenieurwesen" },
      org:    "National Institute of Technology Durgapur (NIT DGP)",
      location: {
        name: { en: "Durgapur, India", de: "Durgapur, Indien" },
        maps: "https://www.google.com/maps/search/?api=1&query=National%20Institute%20of%20Technology%20Durgapur"
      },
      story: {
        en: "Four years in West Bengal that set up everything after them. I finished second in a department of 105, and built a face-recognition attendance system on a Raspberry Pi for my thesis — mostly because manual roll-call looked like an obviously solvable problem.",
        de: "Vier Jahre in Westbengalen, die alles Weitere vorbereitet haben. Ich habe als Zweiter von 105 Studierenden abgeschlossen und für meine Abschlussarbeit ein Anwesenheitssystem mit Gesichtserkennung auf einem Raspberry Pi gebaut — vor allem, weil das Aufrufen der Namensliste nach einem offensichtlich lösbaren Problem aussah."
      },
      highlights: {
        en: ["9.52/10 (German scale 1.2) — ranked 2nd in a department of 105",
             "Degree awarded November 2018",
             "Bachelor's thesis: automated attendance via face recognition on a Raspberry Pi"],
        de: ["9,52/10 (deutsche Skala 1,2) — Zweiter von 105 Studierenden des Fachbereichs",
             "Abschluss verliehen im November 2018",
             "Bachelorarbeit: automatisierte Anwesenheitserfassung per Gesichtserkennung auf einem Raspberry Pi"]
      },
      tags: ["C++", "Python", "Machine Learning"]
    },
    {
      type: "education",
      period: { en: "2011 — 2013", de: "2011 — 2013" },
      role:   { en: "Indian School Certificate (Year 12)", de: "Indian School Certificate (12. Klasse)" },
      org:    "M. P. Birla Foundation Higher Secondary School",
      location: {
        name: { en: "Kolkata, India", de: "Kolkata, Indien" },
        maps: "https://www.google.com/maps/search/?api=1&query=M.P.%20Birla%20Foundation%20Higher%20Secondary%20School%2C%20Kolkata"
      },
      story: {
        en: "The last two years of school, and the ones that decided what came next. I sat the ISC examinations — India's Year 12 certificate, treated as equivalent to the Abitur — and came out at 95%.",
        de: "Die letzten beiden Schuljahre, und die, die über alles Weitere entschieden haben. Ich habe die ISC-Prüfungen abgelegt — Indiens Abschluss der 12. Klasse, dem Abitur gleichgestellt — und mit 95 % bestanden."
      },
      highlights: {
        en: ["ISC (Year 12, equivalent to Abitur): 95%, awarded March 2013"],
        de: ["ISC (12. Klasse, dem Abitur entsprechend): 95 %, verliehen im März 2013"]
      },
      tags: []
    },
    {
      type: "education",
      period: { en: "2000 — 2011", de: "2000 — 2011" },
      role:   { en: "Indian Certificate of Secondary Education (Year 10)", de: "Indian Certificate of Secondary Education (10. Klasse)" },
      org:    "St. Aloysius Orphanage and Day School",
      location: {
        name: { en: "Kolkata, India", de: "Kolkata, Indien" },
        maps: "https://www.google.com/maps/search/?api=1&query=St.%20Aloysius%20Orphanage%20and%20Day%20School"
      },
      story: {
        en: "Where it actually started. Eleven years at St. Aloysius, from my first day of school through to the ICSE examinations at the end of Year 10 — which I finished first in the school, at 93.8%.",
        de: "Wo tatsächlich alles anfing. Elf Jahre an der St. Aloysius, vom allerersten Schultag bis zu den ICSE-Prüfungen am Ende der 10. Klasse — die ich als Schulbester mit 93,8 % abgeschlossen habe."
      },
      highlights: {
        en: ["ICSE (Year 10): 93.8%, ranked 1st in the school"],
        de: ["ICSE (10. Klasse): 93,8 %, Schulbester"]
      },
      tags: []
    }
  ],

  /* ---------- 5. SKILLS ---------- */
  skillsIntro: { title: { en: "What I work with", de: "Womit ich arbeite" } },
  skills: [
    { group: { en: "Languages",       de: "Programmiersprachen" }, items: ["Python", "C++", "TypeScript", "C#"] },
    { group: { en: "AI & Data",       de: "KI & Daten" },          items: ["PyTorch", "TensorFlow", "HuggingFace", "scikit-learn", "OpenCV", "NumPy", "pandas", "SciPy"] },
    { group: { en: "Frontend",        de: "Frontend" },            items: ["React.js", "Next.js", "Redux", "Material-UI", "Tailwind", "Recharts"] },
    { group: { en: "Backend",         de: "Backend" },             items: ["FastAPI", "Node.js", "Express", "REST", "GraphQL"] },
    { group: { en: "Data stores",     de: "Datenbanken" },         items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { group: { en: "DevOps & practice", de: "DevOps & Methoden" }, items: ["Git", "Docker", "AWS", "Scrum", "TDD"] }
  ],

  /* ---------- 6. PROJECTS ---------- */
  projectsIntro: {
    title: { en: "Selected Work", de: "Ausgewählte Arbeiten" },
    blurb: { en: "Things I built because they were interesting, in more detail than a CV line allows.",
             de: "Dinge, die ich gebaut habe, weil sie mich interessiert haben — ausführlicher, als eine Zeile im Lebenslauf zulässt." }
  },
  projects: [
    {
      title: { en: "Cell Tracking with Graph Neural Networks", de: "Zellverfolgung mit Graph Neural Networks" },
      year: "2022",
      summary: {
        en: "For TUM's Advanced Deep Learning for Computer Vision course: tracking cells through video sequences using graph neural networks with message passing and re-identification. At submission our model placed 2nd on the CTMC world leaderboard.",
        de: "Für den TUM-Kurs Advanced Deep Learning for Computer Vision: Zellen in Videosequenzen verfolgen — mit Graph Neural Networks, Message Passing und Re-Identifikation. Zum Zeitpunkt der Einreichung belegte unser Modell Platz 2 der weltweiten CTMC-Rangliste."
      },
      tags: ["PyTorch", "GNN", "re-ID", "Computer Vision"],
      link: "https://github.com/someshkhandelia"
    },
    {
      title: { en: "Collaborative Storytelling Alexa Skill", de: "Alexa-Skill zum gemeinsamen Geschichtenerzählen" },
      year: "2021",
      summary: {
        en: "For TUM's Applied Deep Learning for NLP seminar: a HuggingFace GPT-2 transformer wired into an Amazon Alexa skill, so you can build a story together with Alexa using nothing but your voice.",
        de: "Für das TUM-Seminar Applied Deep Learning for NLP: ein GPT-2-Transformer von HuggingFace, eingebunden in einen Amazon-Alexa-Skill — so lässt sich allein per Stimme gemeinsam mit Alexa eine Geschichte entwickeln."
      },
      tags: ["PyTorch", "GPT-2", "HuggingFace", "NLP"],
      link: "https://github.com/someshkhandelia"
    },
    {
      title: { en: "Attendance Automator", de: "Attendance Automator" },
      year: "2018",
      summary: {
        en: "My bachelor's thesis at NIT Durgapur. A Raspberry Pi with a webcam detects and recognises every student in a classroom with a KNN classifier, marks attendance and emails it to the lecturer.",
        de: "Meine Bachelorarbeit an der NIT Durgapur. Ein Raspberry Pi mit Webcam erkennt alle Studierenden im Hörsaal per KNN-Klassifikator, erfasst die Anwesenheit und schickt sie automatisch an die Lehrkraft."
      },
      tags: ["Python", "OpenCV", "KNN", "Raspberry Pi"],
      link: "https://github.com/someshkhandelia"
    },
    {
      title: { en: "Excel Add-in for Unix Data", de: "Excel-Add-in für Unix-Daten" },
      year: "2017",
      summary: {
        en: "A summer internship at D. E. Shaw that turned into a full-time offer. A C# frontend over a Python backend, letting the finance team pull data out of Python libraries on Unix without ever touching a command line.",
        de: "Ein Sommerpraktikum bei D. E. Shaw, aus dem ein Festangebot wurde. Ein C#-Frontend auf einem Python-Backend, mit dem das Finanzteam Daten aus Python-Bibliotheken unter Unix abrufen konnte, ohne je eine Kommandozeile zu öffnen."
      },
      tags: ["C#", "Python", "Excel", "Unix"],
      link: ""
    },
    {
      title: { en: "What Makes Someone a Celebrity on Twitter", de: "Was jemanden auf Twitter zur Berühmtheit macht" },
      year: "2016",
      summary: {
        en: "A summer internship with the CNeRG research group at IIT Kharagpur. Scraped user data for millions of Twitter accounts through the REST API and used machine learning to work out what actually drives followership.",
        de: "Ein Sommerpraktikum bei der Forschungsgruppe CNeRG am IIT Kharagpur. Nutzerdaten von Millionen Twitter-Konten über die REST-API erhoben und per Machine Learning untersucht, was Followerzahlen tatsächlich treibt."
      },
      tags: ["Python", "REST API", "Machine Learning"],
      link: ""
    },
    {
      title: { en: "Smaller things", de: "Kleinere Projekte" },
      year: "—",
      summary: {
        en: "A Covid case predictor, a Codeforces contest summariser, and a handful of others that exist because a question wouldn't leave me alone.",
        de: "Ein Covid-Fallzahlen-Prognosetool, ein Codeforces-Wettbewerbs-Zusammenfasser und einige weitere, die es gibt, weil mich eine Frage nicht losgelassen hat."
      },
      tags: ["Python", "Machine Learning"],
      link: "https://github.com/someshkhandelia"
    }
  ],

  /* ---------- 7. PUBLICATIONS ---------- */
  publicationsIntro: { title: { en: "Publications", de: "Publikationen" } },
  publications: [
    {
      title: { en: "Multi-Vehicle Detection and Tracking in Aerial Image Sequences based on Deep Learning",
               de: "Multi-Vehicle Detection and Tracking in Aerial Image Sequences based on Deep Learning" },
      venue:  "Master's Thesis · Technical University of Munich & German Aerospace Center (DLR)",
      year:   "2023",
      authors:"Somesh Khandelia",
      link:   "https://elib.dlr.de/194656/"
    },
    {
      title: { en: "EnDASH — A Mobility Adapted Energy Efficient ABR Video Streaming for Cellular Networks",
               de: "EnDASH — A Mobility Adapted Energy Efficient ABR Video Streaming for Cellular Networks" },
      venue:  "IFIP Networking Conference 2020 · Intel & IIT Kharagpur",
      year:   "2020",
      authors:"",
      link:   "https://ieeexplore.ieee.org/document/9142696"
    }
  ],

  /* ---------- 8. CONTACT ---------- */
  contact: {
    title: { en: "Get in touch", de: "Kontakt aufnehmen" },
    blurb: { en: "Email is the surest way to reach me — I read everything that arrives.",
             de: "Am sichersten erreichen Sie mich per E-Mail — ich lese alles, was ankommt." },
    formspree: "",
    fields: {
      name:    { en: "Your name",    de: "Ihr Name" },
      email:   { en: "Your email",   de: "Ihre E-Mail" },
      message: { en: "Message",      de: "Nachricht" },
      send:    { en: "Send message", de: "Nachricht senden" },
      sent:    { en: "Thanks — that's on its way.", de: "Danke — die Nachricht ist unterwegs." },
      error:   { en: "Something went wrong. Please email me directly instead.", de: "Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt." }
    },
    orEmail: { en: "or just email", de: "oder einfach schreiben an" }
  },

  /* ---------- 9. FOOTER ---------- */
  footer: { note: { en: "Built and hosted on GitHub Pages.", de: "Erstellt und gehostet auf GitHub Pages." } },

  /* ---------- 10. UI CHROME ---------- */
  ui: {
    themeLight:  { en: "Light mode",  de: "Heller Modus" },
    themeDark:   { en: "Dark mode",   de: "Dunkler Modus" },
    langSwitch:  { en: "Auf Deutsch wechseln", de: "Switch to English" },
    viewMap:     { en: "View on map", de: "Auf Karte ansehen" },
    readMore:    { en: "Read more",   de: "Weiterlesen" },
    readLess:    { en: "Show less",   de: "Weniger anzeigen" },
    visit:       { en: "Visit",       de: "Ansehen" },
    top:         { en: "Back to top", de: "Nach oben" }
  }
};
