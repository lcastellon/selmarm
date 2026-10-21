import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Selma Ríos Meléndez — Biotecnología vegetal, CIBA IPN" },
      { name: "description", content: "Perfil profesional de la Dra. Selma Ríos Meléndez, investigadora en biotecnología vegetal y tolerancia a la desecación en el CIBA IPN." },
      { property: "og:title", content: "Dra. Selma Ríos Meléndez" },
      { property: "og:description", content: "Investigadora en biotecnología vegetal, CIBA IPN." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const SCHOLAR = "https://scholar.google.com/citations?user=-EUCc3sAAAAJ&hl=es";

const pubs = [
  { t: "Genome-wide transcriptional changes triggered by water deficit on a drought-tolerant common bean cultivar", j: "BMC Plant Biology 20 (1), 525", y: 2020, c: 45 },
  { t: "The chloroplast genome of the desiccation-tolerant moss Pseudocrossidium replicatum (Taylor) R.H. Zander", j: "Genetics and Molecular Biology 42, 488–493", y: 2019, c: 17 },
  { t: "Pseudocrossidium replicatum is a fully desiccation-tolerant moss that expresses an inducible molecular mechanism in response to severe stress", j: "Plant Molecular Biology 107 (4), 387–404", y: 2021, c: 16 },
  { t: "The mitogenome of Pseudocrossidium replicatum, a desiccation-tolerant moss", j: "Mitochondrial DNA Part B 5 (3), 2339–2341", y: 2020, c: 8 },
  { t: "Effect of Essential Oils on Postharvest Management of Anthracnose Associated with Colletotrichum gloeosporioides in Mango", j: "Plants 14 (21), 3249", y: 2025, c: 6 },
  { t: "Stress-induced plant specialized metabolism: signaling, multi-omics integration, and plant-derived antimicrobial metabolites", j: "Plants 15 (2), 193", y: 2026, c: 5 },
  { t: "Selection and Validation of Reference Genes for RT-qPCR in Protonemal Tissue of Pseudocrossidium replicatum", j: "Plants 14 (12), 1752", y: 2025, c: 4 },
];

const stats = [
  { n: "103", l: "Citas totales" },
  { n: "5", l: "Índice h" },
  { n: "3", l: "Índice i10" },
];

const areas = ["Biotecnología vegetal", "Tolerancia a la desecación", "Estrés hídrico", "Genómica de organelos", "Transcriptómica", "Metabolitos antimicrobianos"];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm">
        <span className="font-display text-lg">S. Ríos Meléndez</span>
        <nav className="flex gap-6 text-muted-foreground">
          <a href="#investigacion" className="hover:text-primary">Investigación</a>
          <a href="#publicaciones" className="hover:text-primary">Publicaciones</a>
          <a href="#contacto" className="hover:text-primary">Contacto</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Investigadora · CIBA IPN</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Dra. Selma<br /><em className="text-primary">Ríos Meléndez</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Estudia cómo las plantas sobreviven a condiciones extremas — desde musgos que toleran la desecación total hasta cultivos resistentes a la sequía — para impulsar una agricultura más resiliente.
          </p>
          <a href={SCHOLAR} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Ver en Google Académico →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-6">
              <div className="font-display text-4xl text-primary">{s.n}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="investigacion" className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">Líneas de investigación</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-primary/30 bg-background px-4 py-2 text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="publicaciones" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl">Publicaciones destacadas</h2>
          <span className="text-sm text-muted-foreground">Citas</span>
        </div>
        <ol className="mt-8 divide-y divide-border border-t border-border">
          {pubs.map((p) => (
            <li key={p.t} className="grid grid-cols-[4rem_1fr_3rem] gap-4 py-6">
              <span className="font-display text-muted-foreground">{p.y}</span>
              <div>
                <p className="font-medium leading-snug">{p.t}</p>
                <p className="mt-1 text-sm italic text-muted-foreground">{p.j}</p>
              </div>
              <span className="text-right font-display text-xl text-primary">{p.c}</span>
            </li>
          ))}
        </ol>
      </section>

      <footer id="contacto" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Centro de Investigación en Biotecnología Aplicada</p>
            <p className="mt-1 opacity-80">Instituto Politécnico Nacional · Tlaxcala, México</p>
          </div>
          <a href={SCHOLAR} target="_blank" rel="noreferrer" className="underline underline-offset-4">Perfil académico</a>
        </div>
      </footer>
    </main>
  );
}
