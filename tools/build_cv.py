#!/usr/bin/env python3
"""Build the downloadable CV in both languages from this one file.

    pip install reportlab
    python3 tools/build_cv.py              # writes into assets/files/
    python3 tools/build_cv.py /tmp/cv      # or anywhere else, to preview

Every string is an {"en": ..., "de": ...} pair, the same convention as
assets/js/content.js. Edit both halves together so the two PDFs never drift.

These PDFs are public and indexed by search engines. Never add a home address,
phone number, date or place of birth, nationality or marital status.
"""
import os
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate,
                                Spacer, Table, TableStyle)

FILES = {"en": "CV_Somesh_Khandelia.pdf", "de": "Lebenslauf_Somesh_Khandelia.pdf"}

# ---------- content ----------

NAME = "Somesh Khandelia, M.Sc."
EMAIL = "someshkhandelia@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/somesh-khandelia-86aba4ba/"
GITHUB = "https://github.com/someshkhandelia"

META = {
    "title":   {"en": "Somesh Khandelia - Curriculum Vitae", "de": "Somesh Khandelia - Lebenslauf"},
    "subject": {"en": "Curriculum Vitae", "de": "Lebenslauf"},
}

HEADER = [
    {"en": "Computer Vision · Machine Learning · Software Engineering",
     "de": "Computer Vision · Machine Learning · Softwareentwicklung"},
    {"en": "Germany · valid German work permit",
     "de": "Deutschland · gültige deutsche Arbeitserlaubnis"},
]

SECTIONS = {
    "education":    {"en": "EDUCATION",               "de": "AUSBILDUNG"},
    "experience":   {"en": "PROFESSIONAL EXPERIENCE", "de": "BERUFSERFAHRUNG"},
    "publications": {"en": "PUBLICATIONS",            "de": "PUBLIKATIONEN"},
    "skills":       {"en": "SKILLS",                  "de": "KENNTNISSE"},
    "awards":       {"en": "AWARDS",                  "de": "AUSZEICHNUNGEN"},
}

EDUCATION = [
    {
        "title":  {"en": "M.Sc. Informatik (Computer Science)", "de": "M.Sc. Informatik"},
        "dates":  {"en": "April 2020 – April 2023", "de": "April 2020 – April 2023"},
        "where":  {"en": "Technical University of Munich (TUM), Germany",
                   "de": "Technische Universität München (TUM), Deutschland"},
        "detail": {"en": "Degree awarded April 2023, grade 1.7. Major: Computer Vision. Minors: Machine Learning, "
                         "Software Engineering. Thesis grade 1.0.",
                   "de": "Abschluss im April 2023, Gesamtnote 1,7. Hauptfach: Computer Vision. Nebenfächer: "
                         "Machine Learning, Software Engineering. Note der Masterarbeit: 1,0."},
    },
    {
        "title":  {"en": "B.Tech. Computer Science & Engineering", "de": "B.Tech. Computer Science & Engineering"},
        "dates":  {"en": "August 2014 – May 2018", "de": "August 2014 – Mai 2018"},
        "where":  {"en": "National Institute of Technology Durgapur, India",
                   "de": "National Institute of Technology Durgapur, Indien"},
        "detail": {"en": "Degree awarded November 2018, grade 1.2 (German scale) / 9.52 of 10. "
                         "Ranked 2nd in a department of 105.",
                   "de": "Abschluss im November 2018, Note 1,2 (deutsche Skala) bzw. 9,52 von 10. "
                         "Zweiter von 105 Studierenden des Fachbereichs."},
    },
    {
        "title":  {"en": "Indian School Certificate (Year 12, equivalent to Abitur)",
                   "de": "Indian School Certificate (12. Klasse, dem Abitur entsprechend)"},
        "dates":  {"en": "2011 – 2013", "de": "2011 – 2013"},
        "where":  {"en": "M. P. Birla Foundation Higher Secondary School, Kolkata, India",
                   "de": "M. P. Birla Foundation Higher Secondary School, Kolkata, Indien"},
        "detail": {"en": "Awarded March 2013, result 95%.",
                   "de": "Abschluss im März 2013, Ergebnis 95 %."},
    },
]

# German titles are contractual (from the formal German CV) — don't reword them.
EXPERIENCE = [
    {
        "title":  {"en": "Wissenschaftlicher Mitarbeiter (Research Associate), 40 h/week",
                   "de": "Wissenschaftlicher Mitarbeiter, 40 Std./Woche"},
        "dates":  {"en": "01 May 2025 – 31 Oct 2025", "de": "01.05.2025 – 31.10.2025"},
        "where":  {"en": "TUM Klinikum rechts der Isar — Data Integration Center, Munich",
                   "de": "TUM Klinikum rechts der Isar — Data Integration Center, München"},
        "detail": {"en": "Built a Python pseudonymisation library, CLI tool and FastAPI backend for clinical data. "
                         "Developed a memory-efficient streaming parser converting >20 GB hierarchical DICOM JSON "
                         "into FHIR, and a statistical analysis tool for large oncology XML exports.",
                   "de": "Python-Bibliothek, CLI-Werkzeug und FastAPI-Backend zur Pseudonymisierung klinischer Daten "
                         "entwickelt. Speichereffizienten Streaming-Parser gebaut, der über 20 GB hierarchisches "
                         "DICOM-JSON nach FHIR überführt, dazu ein Werkzeug zur statistischen Auswertung großer "
                         "Onkologie-XML-Exporte."},
    },
    {
        "title":  {"en": "Software Developer, Amazon Robotics — Scanless Technology, full-time",
                   "de": "Softwareentwickler, Amazon Robotics — Scanless Technology, Vollzeit"},
        "dates":  {"en": "October 2024 – December 2024", "de": "Oktober 2024 – Dezember 2024"},
        "where":  {"en": "Amazon, Germany", "de": "Amazon, Deutschland"},
        "detail": {"en": "Deployed a Python single-camera barcode scanner to production using Docker and AWS. "
                         "Quantified production performance gaps on site in Nuremberg and Leipzig, holding automated "
                         "scanning accuracy above 99%.",
                   "de": "Python-Barcode-Scanner mit Einzelkamera per Docker und AWS in den Produktivbetrieb "
                         "überführt. Leistungslücken vor Ort in Nürnberg und Leipzig quantifiziert und die "
                         "automatisierte Scan-Genauigkeit über 99 % gehalten."},
    },
    {
        "title":  {"en": "Wissenschaftlicher Mitarbeiter (Research Associate), 40 h/week",
                   "de": "Wissenschaftlicher Mitarbeiter, 40 Std./Woche"},
        "dates":  {"en": "11 Mar 2024 – 31 May 2024", "de": "11.03.2024 – 31.05.2024"},
        "where":  {"en": "Technical University of Munich (TUM), Munich",
                   "de": "Technische Universität München (TUM), München"},
        "detail": {"en": "Technical project lead for a three-person team building a t3-stack Next.js application "
                         "supporting clinicians treating depression with patient-generated health data. IT services "
                         "administration for a department of 10+; codebase owner on GitHub.",
                   "de": "Technische Projektleitung eines dreiköpfigen Teams für eine Next.js-Anwendung (t3-Stack), "
                         "die Klinikpersonal bei der Behandlung von Depressionen mit patientengenerierten "
                         "Gesundheitsdaten unterstützt. IT-Administration für einen Lehrstuhl mit über 10 Personen; "
                         "verantwortlich für die Codebasis auf GitHub."},
    },
    {
        "title":  {"en": "Software Developer, 40 h/week", "de": "Softwareentwickler, 40 Std./Woche"},
        "dates":  {"en": "01 Aug 2023 – 30 Sep 2023", "de": "01.08.2023 – 30.09.2023"},
        "where":  {"en": "Scandio GmbH, Munich", "de": "Scandio GmbH, München"},
        "detail": {"en": "Client web development in TypeScript and React.js. Completed advanced coursework in Python, "
                         "React.js, Redux and TypeScript, plus AWS Technical and Sales Accreditations.",
                   "de": "Webentwicklung für Kunden mit TypeScript und React.js. Weiterbildung auf fortgeschrittenem "
                         "Niveau in Python, React.js, Redux und TypeScript sowie AWS Technical und Sales "
                         "Accreditation."},
    },
    {
        "title":  {"en": "Wissenschaftler, Masterarbeit (Master’s thesis researcher)",
                   "de": "Wissenschaftler, Masterarbeit"},
        "dates":  {"en": "17 Oct 2022 – 14 Apr 2023", "de": "17.10.2022 – 14.04.2023"},
        "where":  {"en": "Deutsches Zentrum für Luft- und Raumfahrt (DLR) — Earth Observation Center",
                   "de": "Deutsches Zentrum für Luft- und Raumfahrt (DLR) — Earth Observation Center"},
        "detail": {"en": "Multi-vehicle detection and tracking in aerial image sequences using deep learning. "
                         "Achieved the best overall MOT benchmark (HOTA, MOTA, IDF1) across both the DLR aerial and "
                         "A9 ground datasets. Supervised by Prof. Dr. Alois Knoll, advised by Dr. Walter Zimmer. "
                         "Grade 1.0.",
                   "de": "Erkennung und Verfolgung mehrerer Fahrzeuge in Luftbildsequenzen mit Deep Learning. Bester "
                         "MOT-Gesamtscore (HOTA, MOTA, IDF1) über den DLR-Luftbild- und den A9-Bodendatensatz "
                         "hinweg. Betreut von Prof. Dr. Alois Knoll, fachlich begleitet von Dr. Walter Zimmer. "
                         "Note 1,0."},
    },
    {
        "title":  {"en": "Werkstudent, Teilzeit (Working Student, Software Developer), 20 h/week",
                   "de": "Werkstudent, Teilzeit (Softwareentwickler), 20 Std./Woche"},
        "dates":  {"en": "01 Sep 2022 – 21 Apr 2023", "de": "01.09.2022 – 21.04.2023"},
        "where":  {"en": "TNG Technology Consulting GmbH, Munich", "de": "TNG Technology Consulting GmbH, München"},
        "detail": {"en": "Frontend of OpossumUI, an open-source licence-compliance tool for the client Meta. "
                         "Statistical visualisations in React.js, Redux, TypeScript and Recharts.",
                   "de": "Frontend von OpossumUI, einem quelloffenen Werkzeug zur Lizenz-Compliance für den Kunden "
                         "Meta. Statistische Visualisierungen mit React.js, Redux, TypeScript und Recharts."},
    },
    {
        "title":  {"en": "Werkstudent, Teilzeit (Working Student, Machine Learning), 20 h/week",
                   "de": "Werkstudent, Teilzeit (Machine Learning), 20 Std./Woche"},
        "dates":  {"en": "26 Jan 2022 – 31 Jul 2022", "de": "26.01.2022 – 31.07.2022"},
        "where":  {"en": "Siemens AG — Digital Lab, Global Business Services, Munich",
                   "de": "Siemens AG — Digital Lab, Global Business Services, München"},
        "detail": {"en": "Wear detection in microscopic images of manufacturing tools via image registration and "
                         "keypoint matching. Document search using OCR and PDF text mining. Job-description "
                         "similarity analysis using BERT-based models.",
                   "de": "Verschleißerkennung in Mikroskopbildern von Fertigungswerkzeugen mittels Bildregistrierung "
                         "und Keypoint-Matching. Dokumentensuche per OCR und PDF-Text-Mining. Ähnlichkeitsanalyse von "
                         "Stellenbeschreibungen mit BERT-basierten Modellen."},
    },
    {
        "title":  {"en": "Praktikum (Internship), Web Developer", "de": "Praktikum, Webentwickler"},
        "dates":  {"en": "06 Sep 2021 – 10 Dec 2021", "de": "06.09.2021 – 10.12.2021"},
        "where":  {"en": "Volkswagen Data Lab, Munich", "de": "Volkswagen Data Lab, München"},
        "detail": {"en": "Frontend of a battery-testing web application in React.js, TypeScript and GraphQL, "
                         "covering supplier, user and data management.",
                   "de": "Frontend einer Webanwendung für Batterietests mit React.js, TypeScript und GraphQL, "
                         "einschließlich Lieferanten-, Benutzer- und Datenverwaltung."},
    },
    {
        "title":  {"en": "Werkstudent, Teilzeit (Working Student, Machine Learning), 20 h/week",
                   "de": "Werkstudent, Teilzeit (Machine Learning), 20 Std./Woche"},
        "dates":  {"en": "07 Jun 2021 – 06 Dec 2021", "de": "07.06.2021 – 06.12.2021"},
        "where":  {"en": "Rohde & Schwarz, Munich", "de": "Rohde & Schwarz, München"},
        "detail": {"en": "Machine learning models predicting optimal cabling scenarios between a test system and "
                         "multiple devices under test, replacing manual work with complex user manuals.",
                   "de": "Machine-Learning-Modelle, die optimale Verkabelungsszenarien zwischen einem Testsystem und "
                         "mehreren Prüflingen vorhersagen und die manuelle Arbeit mit komplexen Handbüchern ersetzen."},
    },
    {
        "title":  {"en": "Werkstudent, Teilzeit (Working Student, Data Engineer), 20 h/week",
                   "de": "Werkstudent, Teilzeit (Data Engineer), 20 Std./Woche"},
        "dates":  {"en": "01 Sep 2020 – 31 May 2021", "de": "01.09.2020 – 31.05.2021"},
        "where":  {"en": "Fusionbase, Munich", "de": "Fusionbase, München"},
        "detail": {"en": "More than 15 data pipelines using web scraping and multiprocessing in Python, feeding "
                         "structured datasets into MySQL and MongoDB. Reduced a 52-million-row GDELT update from "
                         "8 hours to 25 minutes. Clients included BMW.",
                   "de": "Über 15 Datenpipelines mit Web-Scraping und Multiprocessing in Python, die strukturierte "
                         "Datensätze nach MySQL und MongoDB liefern. GDELT-Aktualisierung von 52 Millionen Zeilen "
                         "von 8 Stunden auf 25 Minuten verkürzt. Zu den Kunden zählte BMW."},
    },
    {
        "title":  {"en": "Wissenschaftlicher Mitarbeiter (Research Associate), 40 h/week",
                   "de": "Wissenschaftlicher Mitarbeiter, 40 Std./Woche"},
        "dates":  {"en": "26 Aug 2019 – 22 Nov 2019", "de": "26.08.2019 – 22.11.2019"},
        "where":  {"en": "Indian Institute of Technology Kharagpur — CNeRG, India",
                   "de": "Indian Institute of Technology Kharagpur — CNeRG, Indien"},
        "detail": {"en": "Intel-sponsored research using deep learning to predict cellular network throughput, "
                         "reducing battery consumption for video streaming by approximately 30%. Supervised by "
                         "Prof. Dr. Sandip Chakraborty.",
                   "de": "Von Intel geförderte Forschung: Vorhersage des Mobilfunk-Durchsatzes mit Deep Learning, "
                         "wodurch der Akkuverbrauch beim Videostreaming um rund 30 % sank. Betreut von "
                         "Prof. Dr. Sandip Chakraborty."},
    },
    {
        "title":  {"en": "Software Developer, Options Trading, 40 h/week",
                   "de": "Softwareentwickler, Optionshandel, 40 Std./Woche"},
        "dates":  {"en": "04 Jun 2018 – 28 Jun 2019", "de": "04.06.2018 – 28.06.2019"},
        "where":  {"en": "D. E. Shaw & Co., Hyderabad, India", "de": "D. E. Shaw & Co., Hyderabad, Indien"},
        "detail": {"en": "Revamped the infrastructure for the firm’s US options strategy covering 900,000 "
                         "instruments, using OOP and test-driven development with over 90% code coverage. Two-week "
                         "DevOps rotations across global exchanges and corporate actions.",
                   "de": "Infrastruktur der US-Optionsstrategie des Unternehmens mit 900.000 Instrumenten neu "
                         "aufgebaut, objektorientiert und testgetrieben mit über 90 % Codeabdeckung. "
                         "Zweiwöchige DevOps-Schichten über globale Börsen und Kapitalmaßnahmen hinweg."},
    },
]

# Paper titles stay in the language they were published in.
PUBLICATIONS = [
    {
        "title": "Multi-Vehicle Detection and Tracking in Aerial Image Sequences based on Deep Learning",
        "year":  "2023",
        "venue": {"en": "Master’s Thesis, TUM & DLR", "de": "Masterarbeit, TUM & DLR"},
        "url":   "https://elib.dlr.de/194656/",
    },
    {
        "title": "EnDASH — A Mobility Adapted Energy Efficient ABR Video Streaming for Cellular Networks",
        "year":  "2020",
        "venue": {"en": "IFIP Networking Conference", "de": "IFIP Networking Conference"},
        "url":   "https://ieeexplore.ieee.org/document/9142696",
    },
]

SKILLS = [
    ({"en": "Programming", "de": "Programmierung"}, "Python, C++, TypeScript, C#"),
    ({"en": "AI & data",   "de": "KI & Daten"},
     "PyTorch, TensorFlow, HuggingFace, scikit-learn, OpenCV, NumPy, pandas, SciPy"),
    ({"en": "Web",         "de": "Web"}, "React.js, Next.js, Redux, FastAPI, Node.js, Express, REST, GraphQL"),
    ({"en": "Data stores", "de": "Datenbanken"}, "PostgreSQL, MySQL, MongoDB"),
    ({"en": "DevOps",      "de": "DevOps"},
     {"en": "Git, Docker, AWS, Scrum, test-driven development",
      "de": "Git, Docker, AWS, Scrum, testgetriebene Entwicklung"}),
    ({"en": "Languages",   "de": "Sprachen"},
     {"en": "English (C2), German (B2), Hindi (mother tongue)",
      "de": "Englisch (C2), Deutsch (B2), Hindi (Muttersprache)"}),
]

AWARDS = {
    "en": "Deutschlandstipendium (German National Scholarship) 2020–2021 · e-fellows.net scholarship · "
          "hackaTUM 2020 finalist · 2nd runner-up, firmwide hackathon at D. E. Shaw",
    "de": "Deutschlandstipendium 2020–2021 · e-fellows.net-Stipendium · Finalist beim hackaTUM 2020 · "
          "Dritter Platz beim unternehmensweiten Hackathon von D. E. Shaw",
}

# ---------- layout ----------

INK    = HexColor("#12181F")
MUTED  = HexColor("#5A6472")
ACCENT = HexColor("#0D9488")
RULE   = HexColor("#DCE2E8")

MARGIN_X, MARGIN_Y = 18 * mm, 17 * mm
WIDTH = A4[0] - 2 * MARGIN_X

S_NAME    = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=21, leading=25, textColor=INK,
                           spaceAfter=2)
S_CONTACT = ParagraphStyle("contact", fontName="Helvetica", fontSize=9.6, leading=13.5, textColor=MUTED)
S_SECTION = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=8.6, leading=11, textColor=ACCENT,
                           spaceBefore=13)
S_TITLE   = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=INK)
S_DATES   = ParagraphStyle("dates", fontName="Helvetica", fontSize=8.6, leading=12, textColor=MUTED,
                           alignment=TA_RIGHT)
S_WHERE   = ParagraphStyle("where", fontName="Helvetica", fontSize=9.4, leading=12.4, textColor=MUTED)
S_BODY    = ParagraphStyle("body", fontName="Helvetica", fontSize=9.2, leading=12.8, textColor=MUTED)
S_LABEL   = ParagraphStyle("label", parent=S_BODY, fontName="Helvetica-Bold")

HEAD_TABLE = TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
])
SKILL_TABLE = TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 1.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
])


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def link(url, text):
    return '<a href="%s" color="%s">%s</a>' % (esc(url), ACCENT.hexval().replace("0x", "#"), esc(text))


def section(title):
    return [Paragraph(esc(title), S_SECTION),
            HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=5, spaceAfter=7)]


def entry(title, dates, where, detail=None):
    head = Table([[Paragraph(title, S_TITLE), Paragraph(dates, S_DATES)]], colWidths=[122 * mm, 52 * mm])
    head.setStyle(HEAD_TABLE)
    parts = [head, Paragraph(where, S_WHERE)]
    if detail:
        parts.append(Paragraph(detail, S_BODY))
    parts.append(Spacer(1, 7))
    return KeepTogether(parts)


def story(lang):
    t = lambda o: o if isinstance(o, str) else o[lang]
    dot = " · "

    out = [
        Paragraph(esc(NAME), S_NAME),
        Paragraph("<br/>".join([esc(t(line)) for line in HEADER] +
                               [dot.join([link("mailto:" + EMAIL, EMAIL), link(LINKEDIN, "LinkedIn"),
                                          link(GITHUB, "GitHub")])]), S_CONTACT),
        Spacer(1, 4),
    ]

    out += section(t(SECTIONS["education"]))
    out += [entry(*(esc(t(e[k])) for k in ("title", "dates", "where", "detail"))) for e in EDUCATION]

    out += section(t(SECTIONS["experience"]))
    out += [entry(*(esc(t(e[k])) for k in ("title", "dates", "where", "detail"))) for e in EXPERIENCE]

    out += section(t(SECTIONS["publications"]))
    for p in PUBLICATIONS:
        shown = p["url"].split("://", 1)[1].rstrip("/")
        out.append(entry(esc(p["title"]), p["year"], esc(t(p["venue"])) + dot + link(p["url"], shown)))

    out += section(t(SECTIONS["skills"]))
    skills = Table([[Paragraph(esc(t(k)), S_LABEL), Paragraph(esc(t(v)), S_BODY)] for k, v in SKILLS],
                   colWidths=[30 * mm, WIDTH - 30 * mm])
    skills.setStyle(SKILL_TABLE)
    out.append(skills)

    out += section(t(SECTIONS["awards"]))
    out.append(Paragraph(esc(t(AWARDS)), S_BODY))
    return out


def build(lang, out_dir):
    path = os.path.join(out_dir, FILES[lang])
    doc = SimpleDocTemplate(path, pagesize=A4,
                            leftMargin=MARGIN_X, rightMargin=MARGIN_X, topMargin=MARGIN_Y, bottomMargin=MARGIN_Y,
                            title=META["title"][lang], author="Somesh Khandelia", subject=META["subject"][lang])
    doc.build(story(lang))
    print("%s  %d pages" % (path, doc.page))


if __name__ == "__main__":
    here = os.path.dirname(os.path.abspath(__file__))
    out_dir = sys.argv[1] if len(sys.argv) > 1 else os.path.join(here, "..", "assets", "files")
    os.makedirs(out_dir, exist_ok=True)
    for lang in FILES:
        build(lang, out_dir)
