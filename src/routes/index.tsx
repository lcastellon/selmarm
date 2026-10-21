import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen, Dna, ExternalLink, Leaf, Menu, X } from "lucide-react";
import { ScientificText } from "@/components/scientific-text";

const SCHOLAR = "https://scholar.google.com/citations?user=-EUCc3sAAAAJ&hl=es";
// Hero block: reserved for the doctor's own portrait photo. It still shows
// figure 1a from the 2021 paper, so swap HERO_IMAGE for the portrait when it
// arrives, re-tune .hero-science-image for a vertical photo, and drop the
// figure-only labels (t.figure, t.specimen/t.specimenDesc) plus the article
// link that wraps the image.
const HERO_IMAGE = "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs11103-021-01167-3/MediaObjects/11103_2021_1167_Fig1_HTML.png";
const FIGURE_SIX = "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs11103-021-01167-3/MediaObjects/11103_2021_1167_Fig6_HTML.png";
const ARTICLE = "https://doi.org/10.1007/s11103-021-01167-3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Selma Ríos Meléndez | Genómica y biotecnología vegetal" },
      { name: "description", content: "Investigación en genómica funcional, resiliencia vegetal y mecanismos moleculares de tolerancia a la desecación. Dra. Selma Ríos Meléndez." },
      { property: "og:title", content: "Dra. Selma Ríos Meléndez" },
      { property: "og:description", content: "Biotecnología vegetal, genómica funcional y resiliencia de las plantas." },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

type Language = "es" | "en";
const copy = {
  es: {
    nav: ["Visión", "Investigación", "Publicaciones", "Contacto"],
    eyebrow: "CUADERNO DE INVESTIGACIÓN · BIOTECNOLOGÍA VEGETAL",
    subheading: "Ciencia de la vida vegetal",
    heading: "Descifrar la resistencia de las plantas.",
    intro: "Desde los mecanismos moleculares de los musgos tolerantes a la desecación hasta las respuestas de los cultivos al estrés hídrico: una mirada al lenguaje de la adaptación vegetal.",
    explore: "Explorar investigación",
    scholar: "Perfil en Google Académico",
    scroll: "DESPLAZARSE PARA EXPLORAR",
    figure: "FIG. 01A / GAMETÓFITO HIDRATADO",
    specimen: "Pseudocrossidium replicatum",
    specimenDesc: "Gametófito hidratado · Ríos-Meléndez et al. (2021), fig. 1a",
    visionKicker: "01 / PERSPECTIVA",
    visionTitle: "La vida encuentra formas de persistir.",
    visionText: "La investigación de la Dra. Selma Ríos Meléndez aborda procesos biológicos asociados a la respuesta de las plantas frente a condiciones ambientales adversas. Su producción científica explora genomas de organelos, mecanismos de regulación génica y tolerancia al déficit hídrico.",
    topicsKicker: "02 / LÍNEAS DE ESTUDIO",
    topicsTitle: "De la célula al ecosistema.",
    topicsIntro: "Ejes que conectan las herramientas moleculares con preguntas sobre la adaptación y la biotecnología vegetal.",
    topics: [
      { tag: "01 / GENÓMICA", title: "Arquitectura genética", desc: "Genomas de cloroplastos y mitocondrias en organismos vegetales adaptados a condiciones extremas." },
      { tag: "02 / FISIOLOGÍA", title: "Tolerancia a la desecación", desc: "Mecanismos de respuesta y recuperación frente a la pérdida extrema de agua." },
      { tag: "03 / EXPRESIÓN GÉNICA", title: "Respuestas al estrés", desc: "Transcriptómica y herramientas de análisis molecular, incluyendo validación de genes de referencia." },
      { tag: "04 / BIOTECNOLOGÍA", title: "Metabolismo especializado", desc: "Compuestos vegetales y sus posibles aplicaciones en contextos biotecnológicos." },
    ],
    microscopy: "MICROSCOPÍA / FIG. 6B · T₀",
    microscopyCaption: "Filamento protonemal de P. replicatum antes de la exposición al ácido abscísico (ABA). Barra de escala: 100 µm.",
    microscopySource: "Fuente: Ríos-Meléndez et al. (2021), figura 6b",
    focus: "ORGANISMO DE ESTUDIO",
    focusTitle: "Un musgo. Muchas preguntas.",
    focusText: "Pseudocrossidium replicatum ofrece una ventana a la extraordinaria capacidad de ciertos organismos vegetales para tolerar la desecación. Sus organelos y mecanismos de expresión génica han sido objeto de publicaciones científicas.",
    papersKicker: "03 / ARCHIVO CIENTÍFICO",
    papersTitle: "Ideas publicadas, conocimiento compartido.",
    papersIntro: "Selección de trabajos. Los títulos y datos bibliográficos se conservan en su idioma original; consulta el perfil académico para acceder a la lista actualizada.",
    allPapers: "Ver todas en Google Académico",
    journal: "REVISTA / REFERENCIA",
    contactKicker: "04 / CONTACTO",
    contactTitle: "La ciencia crece en colaboración.",
    contactText: "Para consultar publicaciones, líneas de investigación y actividad académica, visita el perfil científico de la Dra. Selma Ríos Meléndez.",
    contactButton: "Abrir perfil académico",
    footer: "Biotecnología vegetal · Investigación científica",
    rights: "Sitio académico",
    langLabel: "Idioma del sitio",
  },
  en: {
    nav: ["Perspective", "Research", "Publications", "Contact"],
    eyebrow: "RESEARCH NOTEBOOK · PLANT BIOTECHNOLOGY",
    subheading: "The science of plant life",
    heading: "Decoding plant resilience.",
    intro: "From the molecular mechanisms of desiccation-tolerant mosses to crop responses to water stress: an exploration of the language of plant adaptation.",
    explore: "Explore research",
    scholar: "Google Scholar profile",
    scroll: "SCROLL TO EXPLORE",
    figure: "FIG. 01A / HYDRATED GAMETOPHYTE",
    specimen: "Pseudocrossidium replicatum",
    specimenDesc: "Hydrated gametophyte · Ríos-Meléndez et al. (2021), fig. 1a",
    visionKicker: "01 / PERSPECTIVE",
    visionTitle: "Life finds ways to persist.",
    visionText: "Dr. Selma Ríos Meléndez investigates biological processes involved in plant responses to challenging environmental conditions. Her scientific publications explore organelle genomes, gene regulation mechanisms, and tolerance to water deficit.",
    topicsKicker: "02 / RESEARCH AREAS",
    topicsTitle: "From cells to ecosystems.",
    topicsIntro: "Research themes connecting molecular tools to questions of adaptation and plant biotechnology.",
    topics: [
      { tag: "01 / GENOMICS", title: "Genetic architecture", desc: "Chloroplast and mitochondrial genomes in plants adapted to extreme conditions." },
      { tag: "02 / PHYSIOLOGY", title: "Desiccation tolerance", desc: "Response and recovery mechanisms under extreme water loss." },
      { tag: "03 / GENE EXPRESSION", title: "Stress responses", desc: "Transcriptomics and molecular analysis tools, including reference-gene validation." },
      { tag: "04 / BIOTECHNOLOGY", title: "Specialized metabolism", desc: "Plant-derived compounds and their potential biotechnological applications." },
    ],
    microscopy: "MICROSCOPY / FIG. 6B · T₀",
    microscopyCaption: "Protonemal filament of P. replicatum before exposure to abscisic acid (ABA). Scale bar: 100 µm.",
    microscopySource: "Source: Ríos-Meléndez et al. (2021), figure 6b",
    focus: "STUDY ORGANISM",
    focusTitle: "One moss. Many questions.",
    focusText: "Pseudocrossidium replicatum offers a window into the remarkable ability of certain plants to withstand desiccation. Its organelles and gene-expression mechanisms have been investigated in scientific publications.",
    papersKicker: "03 / SCIENTIFIC ARCHIVE",
    papersTitle: "Published ideas, shared knowledge.",
    papersIntro: "Selected publications. Titles and bibliographic details remain in their original language; consult the academic profile for the latest list.",
    allPapers: "View all on Google Scholar",
    journal: "JOURNAL / REFERENCE",
    contactKicker: "04 / CONTACT",
    contactTitle: "Science grows through collaboration.",
    contactText: "For publications, research topics, and academic activities, visit Dr. Selma Ríos Meléndez’s scientific profile.",
    contactButton: "Open academic profile",
    footer: "Plant biotechnology · Scientific research",
    rights: "Academic website",
    langLabel: "Website language",
  },
};

const publications = [
  { title: "Stress-induced plant specialized metabolism: signaling, multi-omics integration, and plant-derived antimicrobial metabolites", journal: "Plants 15 (2), 193", year: 2026 },
  { title: "Effect of Essential Oils on Postharvest Management of Anthracnose Associated with Colletotrichum gloeosporioides in Mango", journal: "Plants 14 (21), 3249", year: 2025 },
  { title: "Selection and Validation of Reference Genes for RT-qPCR in Protonemal Tissue of Pseudocrossidium replicatum", journal: "Plants 14 (12), 1752", year: 2025 },
  { title: "Pseudocrossidium replicatum is a fully desiccation-tolerant moss that expresses an inducible molecular mechanism in response to severe stress", journal: "Plant Molecular Biology 107 (4), 387–404", year: 2021 },
  { title: "Genome-wide transcriptional changes triggered by water deficit on a drought-tolerant common bean cultivar", journal: "BMC Plant Biology 20 (1), 525", year: 2020 },
  { title: "The mitogenome of Pseudocrossidium replicatum, a desiccation-tolerant moss", journal: "Mitochondrial DNA Part B 5 (3), 2339–2341", year: 2020 },
  { title: "The chloroplast genome of the desiccation-tolerant moss Pseudocrossidium replicatum (Taylor) R.H. Zander", journal: "Genetics and Molecular Biology 42, 488–493", year: 2019 },
];

function BotanicalPlate() {
  return (
    <div className="botanical-plate" aria-hidden="true">
      <div className="plate-orbit orbit-one" /><div className="plate-orbit orbit-two" />
      <svg className="botanical-drawing" viewBox="0 0 520 620" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stem" x1="220" y1="550" x2="320" y2="60" gradientUnits="userSpaceOnUse"><stop stopColor="#A5BE70"/><stop offset="1" stopColor="#D5E6A7"/></linearGradient>
          <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCE9B1"/><stop offset="1" stopColor="#8EAC7B"/></linearGradient>
        </defs>
        {Array.from({length: 13}, (_, i) => {
          const x = 65 + i * 30;
          const top = 188 - 78 * Math.sin((i / 12) * Math.PI);
          return <g key={i}>
            <path d={`M ${x} 520 Q ${x-18} 330 ${x+Math.sin(i*1.7)*27} ${top}`} stroke="url(#stem)" strokeWidth={i%3===0 ? 3 : 2} strokeLinecap="round"/>
            {Array.from({length: 11}, (_, k) => {
              const yy = 480 - k * 27;
              const centerX = x + Math.sin(i*1.7)*27 * (520-yy)/(520-top);
              const side = k%2 ? 1 : -1;
              return <g key={k} transform={`translate(${centerX} ${yy}) rotate(${side * (30+k*2)})`}>
                <path d={`M0 0 Q${side*30} -21 ${side*46} -66 Q${side*5} -46 0 0`} fill="url(#leaf)" opacity={0.55 + k*0.034}/>
                <path d={`M0 0 L${side*39} -57`} stroke="#476E4D" strokeWidth="0.75" opacity=".6" />
              </g>;
            })}
          </g>;
        })}
        <path d="M55 531 C190 510 330 512 461 534" stroke="#BFD594" strokeWidth="1.5" opacity=".75"/>
      </svg>
      <span className="plate-cross plate-cross-a">+</span><span className="plate-cross plate-cross-b">+</span>
      <span className="plate-coordinate">25° N / 98° W</span>
    </div>
  );
}

function Index() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("selma-language");
    if (stored === "es" || stored === "en") setLanguage(stored);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("selma-language", language);
  }, [language]);
  const t = copy[language];
  const links = ["#vision", "#investigacion", "#publicaciones", "#contacto"];

  return (
    <main className="site-wrap">
      <header className="site-header">
        <a href="#inicio" className="site-wordmark" aria-label="Selma Ríos Meléndez — home">
          <span className="wordmark-mark"><Leaf size={17} strokeWidth={1.6}/></span>
          <span>SELMA <span className="wordmark-light">RÍOS MELÉNDEZ</span></span>
        </a>
        <nav className={`site-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {t.nav.map((label, i) => <a key={links[i]} href={links[i]} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-tools">
          <div className="language-switch" role="group" aria-label={t.langLabel}>
            <button aria-label="Español, México" aria-pressed={language==="es"} className={language==="es"?"active":""} onClick={() => setLanguage("es")}>🇲🇽 <span>ES</span></button>
            <span className="language-divider" aria-hidden="true" />
            <button aria-label="English, United States" aria-pressed={language==="en"} className={language==="en"?"active":""} onClick={() => setLanguage("en")}>🇺🇸 <span>EN</span></button>
          </div>
          <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-copy">
          <div className="small-label"><span className="label-dot"/>{t.eyebrow}</div>
          <p className="hero-overline">{t.subheading}</p>
          <h1>{t.heading.split(" ").slice(0,-2).join(" ")} <em>{t.heading.split(" ").slice(-2).join(" ")}</em></h1>
          <p className="hero-intro"><ScientificText text={t.intro}/></p>
          <div className="hero-actions">
            <a className="button-dark" href="#investigacion">{t.explore} <ArrowDownRight size={18}/></a>
            <a className="text-link" href={SCHOLAR} target="_blank" rel="noopener noreferrer">{t.scholar} <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-footnote"><span>001 — 004</span><span>{t.scroll} ↓</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-topline"><span>{t.figure}</span><Dna size={22} strokeWidth={1}/></div>
          <a className="hero-science-image" href={ARTICLE} target="_blank" rel="noopener noreferrer" aria-label="Fuente científica: figura 1a"><img src={HERO_IMAGE} alt={language === "es" ? "Gametófito hidratado de Pseudocrossidium replicatum, figura científica 1a" : "Hydrated Pseudocrossidium replicatum gametophyte, scientific figure 1a"} /></a>
          <div className="visual-caption"><span><ScientificText text={t.specimen}/><small>{t.specimenDesc}</small></span><span className="caption-index">01 / 01</span></div>
        </div>
      </section>

      <section id="vision" className="vision-section section-container">
        <div className="section-kicker">{t.visionKicker}</div>
        <div className="vision-body"><h2>{t.visionTitle}</h2><p><ScientificText text={t.visionText}/></p></div>
        <div className="vision-icon"><Leaf size={56} strokeWidth={0.8}/></div>
      </section>

      <section id="investigacion" className="research-section">
        <div className="section-container">
          <div className="section-kicker">{t.topicsKicker}</div>
          <div className="section-heading"><h2>{t.topicsTitle}</h2><p>{t.topicsIntro}</p></div>
          <div className="research-grid">
            {t.topics.map((topic,i) => <article className="research-item" key={topic.tag}>
              <div className="research-item-top"><span>{topic.tag}</span><span className="research-symbol">{i===0?<Dna size={27} strokeWidth={1.1}/>:i===1?<Leaf size={27} strokeWidth={1.1}/>:i===2?<span className="symbol-wave">≈</span>:<span className="symbol-wave">✳</span>}</span></div>
              <h3>{topic.title}</h3><p><ScientificText text={topic.desc}/></p><span className="research-number">0{i+1}</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="focus-art">
          <div className="micrograph-heading">{t.microscopy}</div>
          <div className="micrograph-crop" role="img" aria-label={t.microscopyCaption}>
            <img src={FIGURE_SIX} loading="lazy" alt="" />
          </div>
          <div className="micrograph-caption"><span><ScientificText text={t.microscopyCaption}/></span><a href={ARTICLE} target="_blank" rel="noopener noreferrer">{t.microscopySource} ↗</a></div>
        </div>
        <div className="focus-copy"><div className="section-kicker">{t.focus}</div><h2>{t.focusTitle}</h2><p><ScientificText text={t.focusText}/></p><div className="focus-scientific"><span><ScientificText text={t.specimen}/></span><span>BRYOPHYTA / POTTIACEAE</span></div></div>
      </section>

      <section id="publicaciones" className="publications-section section-container">
        <div className="section-kicker">{t.papersKicker}</div>
        <div className="section-heading publications-heading"><h2>{t.papersTitle}</h2><div><p>{t.papersIntro}</p><a href={SCHOLAR} target="_blank" rel="noopener noreferrer" className="text-link">{t.allPapers} <ArrowUpRight size={17}/></a></div></div>
        <div className="publications-list">
          {publications.map((pub, i) => <article key={pub.title} className="publication-row">
            <div className="publication-year">{pub.year}</div>
            <div className="publication-content"><span className="publication-index">RESEARCH PAPER / {String(i+1).padStart(2,"0")}</span><h3><ScientificText text={pub.title}/></h3><p>{pub.journal}</p></div>
            <a href={SCHOLAR} target="_blank" rel="noopener noreferrer" aria-label={`Find publication on Google Scholar: ${pub.title}`} className="publication-action"><ArrowUpRight size={21}/></a>
          </article>)}
        </div>
        <p className="publication-note"><BookOpen size={15}/> {language === "es" ? "La disponibilidad y las métricas de cada publicación se consultan en el perfil de Google Académico." : "Publication availability and citation metrics can be consulted on Google Scholar."}</p>
      </section>

      <footer id="contacto" className="contact-section">
        <div className="section-container contact-inner">
          <div className="section-kicker">{t.contactKicker}</div>
          <div className="contact-main"><h2>{t.contactTitle}</h2><div><p>{t.contactText}</p><a className="button-light" href={SCHOLAR} target="_blank" rel="noopener noreferrer">{t.contactButton}<ExternalLink size={17}/></a></div></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} SELMA RÍOS MELÉNDEZ</span><span>{t.footer}</span><span>{t.rights} · ES / EN</span></div>
        </div>
      </footer>
    </main>
  );
}
