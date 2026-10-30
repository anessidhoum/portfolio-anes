import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import logoSetram from "@/assets/logo-setram.png";
import logoAlgerieTelecom from "@/assets/logo-algerie-telecom.png";
import logoCpa from "@/assets/logo-cpa.png";
import logoSntf from "@/assets/logo-sntf.png";
import logoElWatan from "@/assets/logo-elwatan.png";
import logoTedx from "@/assets/logo-tedx.png";
import {
  ContactSection,
  Cover,
  Reveal,
  SectionHead,
  SiteHeader,
  VideoPlayer,
  contact,
  container,
  eyebrow,
} from "@/components/portfolio";
import { type Category, categories, projects, showreel, sideWork } from "@/data/projects";

const SITE_URL = "https://portfolio-anes.sidhoumanes20.workers.dev";
const TITLE = "Anes Sidhoum — Communication & Marketing Digital";
const DESCRIPTION =
  "Portfolio d'Anes Sidhoum, chargé de communication et marketing digital à Alger : stratégie, copywriting en arabe, français et anglais, réseaux sociaux et contenus pour institutions et marques.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og.jpg` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});

const organisations = [
  "Zimou Group",
  "AVENTY ERP",
  "Yalidine",
  "Ooredoo",
  "IZEM",
  "SETRAM",
  "CAP Emergency",
  "Crédit Populaire d'Algérie",
  "Algérie Télécom",
  "SNTF",
  "El Watan",
  "TEDx Algérie",
  "Jeux sportifs arabes 2023",
];

const logos = [
  { name: "SETRAM", src: logoSetram, h: "h-12" },
  { name: "Algérie Télécom", src: logoAlgerieTelecom, h: "h-12" },
  { name: "Crédit Populaire d'Algérie", src: logoCpa, h: "h-14" },
  { name: "SNTF", src: logoSntf, h: "h-12" },
  { name: "El Watan", src: logoElWatan, h: "h-12" },
  { name: "TEDx", src: logoTedx, h: "h-8" },
];

const figures = [
  { value: "11", label: "expériences professionnelles et associatives" },
  { value: "4", label: "langues : arabe, français, anglais, allemand" },
  { value: "2020", label: "premières missions de communication" },
  { value: "M2", label: "communication institutionnelle, ENSJSI 2025" },
];

const expertise = [
  {
    title: "Stratégie & marketing",
    items: [
      "Stratégies marketing et de contenu",
      "Communication institutionnelle et digitale",
      "Analyse et reporting KPI",
      "Marketing d'influence",
    ],
  },
  {
    title: "Contenu & création",
    items: [
      "Copywriting en arabe, français et anglais",
      "Création de contenus photo et vidéo",
      "Conception de visuels",
      "Voix off et animation",
    ],
  },
  {
    title: "Social media & acquisition",
    items: [
      "Gestion des réseaux sociaux",
      "Calendriers éditoriaux",
      "Campagnes Meta Ads",
      "Campagnes CRM et email",
    ],
  },
  {
    title: "Institutionnel & événementiel",
    items: [
      "Communication interne",
      "Communiqués et relations presse",
      "Gestion de projets et événementiel",
      "Couverture d'événements",
    ],
  },
];

const tools = ["Canva", "CapCut", "Meta Business Suite", "Meta Ads Manager", "Microsoft Office"];

const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "B2.2 — Institut français d'Alger" },
  { name: "Anglais", level: "B2.2" },
  { name: "Allemand", level: "B1" },
];

type Entry = { period: string; title: string; subtitle: string; detail?: string };

const experiences: Entry[] = [
  {
    period: "07.2026 — aujourd'hui",
    title: "Zimou Group",
    subtitle: "Community Manager",
    detail: "Gestion des réseaux sociaux, marketing d'influence, copywriting, reporting KPI.",
  },
  {
    period: "05.2026",
    title: "DUSENS Group",
    subtitle: "Community Manager",
    detail: "Social media pour IZEM et Ooredoo : contenus, animation de communauté, reporting KPI.",
  },
  {
    period: "12.2025 — 03.2026",
    title: "SETRAM",
    subtitle: "Chargé de communication",
    detail: "Communication interne et externe, communication événementielle, création digitale.",
  },
  {
    period: "04.2025 — 06.2025",
    title: "Crédit Populaire d'Algérie",
    subtitle: "Stage",
    detail: "Communication interne, contribution à la stratégie marketing.",
  },
  {
    period: "11.2024 — 02.2025",
    title: "Algérie Télécom",
    subtitle: "Stage",
    detail: "Communication digitale, image de marque, soutien à la veille institutionnelle.",
  },
  {
    period: "06.2024 — 10.2026",
    title: "CAP Emergency",
    subtitle: "Chargé marketing digital",
    detail: "Réseaux sociaux, infographies et vidéos, copywriting, campagnes publicitaires.",
  },
  {
    period: "2023 — 2024",
    title: "SNTF — Société nationale des transports ferroviaires",
    subtitle: "Stage",
    detail: "Communication interne, rédaction de communiqués et relations presse.",
  },
  {
    period: "06.2023 — 07.2023",
    title: "Journal El Watan",
    subtitle: "Stage — Journalisme",
    detail: "Rédaction d'articles, interviews, publications.",
  },
  {
    period: "2020 — 2024",
    title: "Association culturelle",
    subtitle: "Chargé de communication",
    detail: "Réseaux sociaux, couverture d'événements, création de contenus.",
  },
];

const education: Entry[] = [
  {
    period: "2025",
    title: "Master 2 — Communication institutionnelle",
    subtitle: "École nationale supérieure de journalisme et des sciences de l'information",
    detail:
      "Mémoire : l'impact du marketing digital sur le comportement du consommateur algérien — étude de cas : Mobilis.",
  },
  { period: "", title: "Formation en soft skills", subtitle: "EFU Centre, Alger" },
  {
    period: "",
    title: "Formation en français professionnel",
    subtitle: "Institut français d'Alger",
  },
  {
    period: "",
    title: "Formation en infographie & design graphique",
    subtitle: "Formation complémentaire",
  },
  { period: "2020", title: "Baccalauréat Lettres", subtitle: "Mention : 16/20" },
];

const engagements: Entry[] = [
  {
    period: "",
    title: "Projet international TEDx Algérie",
    subtitle: "Manager",
    detail: "Contribution à l'organisation d'événements à portée internationale.",
  },
  {
    period: "2023",
    title: "Jeux sportifs arabes 2023",
    subtitle: "Journaliste reporter",
    detail: "Couverture des événements, coordination avec les équipes médias.",
  },
  {
    period: "",
    title: "Association culturelle El Maali, Bordj El Bahri",
    subtitle: "Membre actif",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Organisations />
        <Work />
        <About />
        <Expertise />
        <Career />
      </main>
      <ContactSection />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className={`${container} pt-28 pb-16 md:pt-40 md:pb-24`}>
      <div className="grid grid-cols-12 items-end gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-8">
          <p className={`${eyebrow} fade-up flex items-center gap-3 text-muted-foreground`}>
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            Communication & marketing digital
          </p>
          <h1 className="mt-6 font-display text-[clamp(4rem,14vw,12rem)] leading-[0.86] font-normal tracking-[-0.04em]">
            <span className="line-mask">
              <span style={{ animationDelay: "120ms" }}>Anes</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "210ms" }} className="pl-[0.5em] max-sm:pl-[0.25em]">
                Sidhoum<span className="text-gold">.</span>
              </span>
            </span>
          </h1>
          <p className="mt-8 font-display text-3xl leading-tight text-primary italic md:text-5xl">
            <span className="line-mask">
              <span style={{ animationDelay: "390ms" }}>Rigueur institutionnelle,</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "480ms" }}>instinct digital.</span>
            </span>
          </p>
          <div className="fade-up mt-10 max-w-xl" style={{ animationDelay: "650ms" }}>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Je conçois des stratégies, j'écris et je crée des contenus pour des institutions
              publiques comme pour des marques privées — en arabe, en français et en anglais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-gold hover:text-ink"
              >
                Voir les projets
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href={contact.cv}
                download="Anes_Sidhoum_CV.pdf"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
        <figure className="col-span-10 col-start-2 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-auto">
          <div className="fade-up bg-primary p-3 md:p-4" style={{ animationDelay: "300ms" }}>
            <img
              src={portrait}
              alt="Portrait d'Anes Sidhoum en costume sombre et cravate bordeaux"
              width={820}
              height={1086}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-3 pt-3 text-xs text-primary-foreground md:text-sm">
              <span>Actuellement Community Manager chez Zimou Group</span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            </figcaption>
          </div>
        </figure>
      </div>
      <ul
        className="fade-up mt-16 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground sm:grid-cols-3 md:mt-24"
        style={{ animationDelay: "900ms" }}
      >
        <li>{contact.location}</li>
        <li>AR · FR · EN · DE</li>
        <li>Master 2 — ENSJSI 2025</li>
      </ul>
    </section>
  );
}

function Organisations() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {organisations.map((o) => (
        <li key={o} className="flex items-center font-display text-3xl whitespace-nowrap md:text-5xl">
          <span className="px-6 md:px-10">{o}</span>
          <span className="text-gold">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section
      aria-label="Organisations et marques"
      className="marquee overflow-hidden border-y border-border py-6 md:py-8"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}

function Work() {
  const [filter, setFilter] = useState<Category | null>(null);
  const shown = projects.filter((p) => !filter || p.categories.includes(filter));
  const filters = Object.keys(categories) as Category[];

  return (
    <section id="work" aria-labelledby="work-title" className={`${container} py-24 md:py-36`}>
      <SectionHead
        index="01"
        id="work-title"
        title="Projets choisis"
        intro="Stratégie, contenus, CRM, événementiel : des études de cas qui montrent le raisonnement autant que le résultat."
      />
      <div
        role="group"
        aria-label="Filtrer par catégorie"
        className="mt-10 flex flex-wrap gap-2 md:ml-[25%] md:pl-1.5"
      >
        {[null, ...filters].map((c) => {
          const count = c ? projects.filter((p) => p.categories.includes(c)).length : projects.length;
          return (
            <button
              key={c ?? "all"}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`h-10 rounded-full border px-4 text-sm transition ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              {c ? categories[c] : "Tous"}
              <sup className="ml-1 text-[0.65em] opacity-60">{count}</sup>
            </button>
          );
        })}
      </div>

      <ol className="mt-14 space-y-20 md:mt-20 md:space-y-32">
        {shown.map((p) => {
          const index = projects.indexOf(p);
          const flip = index % 2 === 1;
          return (
            <li key={p.slug}>
              <Reveal>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-12 items-center gap-6 md:gap-x-10"
                >
                  <div className={`col-span-12 md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                    <Cover image={p.cover} tone={p.coverTone} />
                  </div>
                  <div className={`col-span-12 md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                    <p className={`${eyebrow} flex items-center gap-3 text-muted-foreground`}>
                      <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-border" />
                      {p.client}
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-[1.05] font-normal md:text-4xl lg:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{p.summary}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                      {p.categories.map((c) => (
                        <span key={c} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                          {categories[c]}
                        </span>
                      ))}
                      <span className="px-1 text-muted-foreground">{p.year}</span>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium">
                      Lire l'étude de cas
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-border transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ol>

      {!filter ? (
        <>
          <Reveal className="mt-24 grid grid-cols-12 gap-x-6 gap-y-8 border-t border-border pt-8 md:mt-32">
            <h3 className={`${eyebrow} col-span-12 text-muted-foreground md:col-span-3`}>
              En vidéo
            </h3>
            <div className="col-span-12 grid gap-6 sm:grid-cols-3 md:col-span-9">
              {showreel.map((r) => (
                <VideoPlayer key={r.video.src} video={r.video} label={r.label} tile />
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-16 grid grid-cols-12 items-center gap-6 border-t border-border pt-8">
            <h3 className={`${eyebrow} col-span-12 text-muted-foreground md:col-span-3`}>
              Aussi chez Zimou Group
            </h3>
            <div className="col-span-5 sm:col-span-3 md:col-span-2">
              <img
                src={sideWork.src}
                alt={sideWork.alt}
                width={sideWork.w}
                height={sideWork.h}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <div className="col-span-7 sm:col-span-9 md:col-span-6">
              <p className="font-display text-2xl md:text-3xl">{sideWork.client}</p>
              <p className="mt-2 text-muted-foreground">{sideWork.caption}</p>
              <p className="mt-2 text-sm text-muted-foreground">{sideWork.year}</p>
            </div>
          </Reveal>
        </>
      ) : null}
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-border bg-secondary/40 py-24 md:py-36"
    >
      <div className={container}>
        <SectionHead index="02" id="about-title" title="Profil" />
        <div className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <Reveal as="p" className="font-display text-3xl leading-[1.15] md:text-5xl">
              Je viens de la communication institutionnelle. J'en garde l'exigence : un message
              juste, vérifié, adressé au bon public. Le digital m'apprend le reste — capter
              l'attention en trois secondes, parler la langue de chacun, mesurer ce qui fonctionne.
            </Reveal>
            <div className="mt-12 grid gap-8 text-lg leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-10">
              <Reveal as="p">
                Diplômé d'un Master 2 en communication institutionnelle de l'École nationale
                supérieure de journalisme et des sciences de l'information (2025), j'ai travaillé
                aussi bien pour des entreprises publiques — Algérie Télécom, le Crédit Populaire
                d'Algérie, la SNTF, SETRAM — que pour des groupes privés comme Zimou Group ou
                DUSENS Group, où j'ai géré les réseaux sociaux d'IZEM et d'Ooredoo.
              </Reveal>
              <Reveal as="p" delay={120}>
                Ce double regard est ce que j'apporte : je rédige un communiqué de presse comme un
                script de Reel en arabe algérien, et je relie toujours la création à un objectif
                mesurable.
              </Reveal>
            </div>
            <dl className="mt-16 grid grid-cols-2 border-t border-border lg:grid-cols-4">
              {figures.map((f, i) => (
                <Reveal
                  key={f.value}
                  delay={i * 90}
                  className="border-b border-border py-6 pr-4 lg:border-r lg:border-b-0 lg:px-5 lg:first:pl-0 lg:last:border-r-0"
                >
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-6xl leading-none text-primary md:text-7xl">
                      {f.value}
                    </span>
                    <span aria-hidden="true" className="mt-3 block text-sm text-muted-foreground">
                      {f.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
            <Reveal className="mt-16">
              <h3 className={`${eyebrow} text-muted-foreground`}>Ils m'ont fait confiance</h3>
              <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-8">
                {logos.map((l) => (
                  <li key={l.name}>
                    <img
                      src={l.src}
                      alt={l.name}
                      title={l.name}
                      loading="lazy"
                      className={`${l.h} w-auto object-contain opacity-75 mix-blend-multiply grayscale transition duration-500 hover:opacity-100 hover:grayscale-0`}
                      style={{ maxWidth: "140px" }}
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className={`${container} py-24 md:py-36`}>
      <SectionHead
        index="03"
        id="expertise-title"
        title="Expertise"
        intro="Quatre domaines, une même méthode : comprendre le public, formuler le bon message, le rendre visible, mesurer."
      />
      <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        {expertise.map((area, i) => (
          <Reveal
            key={area.title}
            delay={i * 90}
            className="group flex flex-col bg-background p-6 transition duration-500 hover:bg-primary hover:text-primary-foreground md:p-8"
          >
            <span className={`${eyebrow} text-primary transition group-hover:text-gold`}>
              0{i + 1}
            </span>
            <h3 className="mt-10 font-display text-3xl leading-tight font-normal md:mt-16">
              {area.title}
            </h3>
            <ul className="mt-6 space-y-2.5 text-sm leading-snug text-muted-foreground transition group-hover:text-primary-foreground/80">
              {area.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal className="col-span-12 md:col-span-5 md:col-start-4">
          <h3 className={`${eyebrow} text-muted-foreground`}>Outils</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="col-span-12 md:col-span-4">
          <h3 className={`${eyebrow} text-muted-foreground`}>Langues</h3>
          <dl className="mt-5 divide-y divide-border border-y border-border">
            {languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-display text-xl">{l.name}</dt>
                <dd className="text-right text-sm text-muted-foreground">{l.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-6">
      <h3 className={`${eyebrow} col-span-12 pt-1 text-muted-foreground md:col-span-3`}>{title}</h3>
      <ol className="col-span-12 border-t border-border md:col-span-9">
        {entries.map((e) => (
          <Reveal
            as="li"
            key={e.title + e.period}
            className="grid grid-cols-12 gap-x-6 gap-y-1 border-b border-border py-5 transition hover:bg-secondary/70 md:px-3 md:py-6"
          >
            <p className="col-span-12 text-sm text-muted-foreground tabular-nums md:col-span-3 md:pt-1.5">
              {e.period}
            </p>
            <div className="col-span-12 md:col-span-4">
              <p className="font-display text-2xl leading-tight">{e.title}</p>
              <p className="mt-1 text-sm text-primary">{e.subtitle}</p>
            </div>
            {e.detail ? (
              <p className="col-span-12 mt-2 leading-relaxed text-muted-foreground md:col-span-5 md:mt-0 md:pt-1">
                {e.detail}
              </p>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function Career() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24 md:py-36"
    >
      <div className={container}>
        <SectionHead index="04" id="experience-title" title="Parcours" />
        <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          <Timeline title="Expériences" entries={experiences} />
          <Timeline title="Formation" entries={education} />
          <Timeline title="Engagements" entries={engagements} />
        </div>
        <Reveal className="mt-16 flex justify-end">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Voir le profil LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
