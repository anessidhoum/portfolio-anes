import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import work12 from "@/assets/work-12.mp4";
import work3 from "@/assets/work-3.mp4";
import work16 from "@/assets/work-16.mp4";
import { projects } from "@/data/projects";
import logoSetram from "@/assets/logo-setram.png";
import logoAlgerieTelecom from "@/assets/logo-algerie-telecom.png";
import logoCpa from "@/assets/logo-cpa.png";
import logoSntf from "@/assets/logo-sntf.png";
import logoElWatan from "@/assets/logo-elwatan.png";
import logoTedx from "@/assets/logo-tedx.png";
import cv from "@/assets/Anes_Sidhoum_CV.pdf";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Play } from "lucide-react";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anes Sidhoum — Communication & Marketing Digital" },
      {
        name: "description",
        content:
          "Portfolio de Anes Sidhoum, chargé de communication et marketing digital. Stratégie de marque, communication événementielle et création de contenu.",
      },
    ],
  }),
});

const experiences = [
  { year: "2026", role: "Chargé de communication", org: "SETRAM", detail: "Communication interne, événementielle & création digitale" },
  { year: "2024 — 2025", role: "Community Manager & Marketing Digital", org: "CAP Emergency", detail: "Gestion réseaux sociaux, infographies & vidéos, interaction publique" },
  { year: "Nov 2024 — Fév 2025", role: "Stage — Communication digitale", org: "Algérie Télécom", detail: "Image de marque, veille institutionnelle" },
  { year: "Avr — Juin 2025", role: "Stage — Communication interne", org: "Crédit Populaire d'Algérie", detail: "Contribution à la stratégie marketing" },
  { year: "2023 — 2024", role: "Stage — Communication interne", org: "Société Nationale des Transports Ferroviaires", detail: "Rédaction de communiqués & relations presse" },
  { year: "Juin — Juil 2023", role: "Stage — Journalisme", org: "Journal El Watan", detail: "Rédaction d'articles, interviews, publications" },
  { year: "2020 — 2024", role: "Chargé de communication", org: "Association culturelle El Maali", detail: "Couverture d'événements & création de contenus" },
];

const competences = [
  "Stratégie de marque",
  "Communication institutionnelle",
  "Marketing digital",
  "Gestion de projet événementiel",
  "Création de contenu — photo & vidéo",
  "Réseaux sociaux",
  "Voix off & animation",
  "Rédaction journalistique",
];

const clients = [
  { name: "SETRAM", logo: logoSetram, height: "h-10" },
  { name: "Algérie Télécom", logo: logoAlgerieTelecom, height: "h-14" },
  { name: "CPA", logo: logoCpa, height: "h-10" },
  { name: "SNTF", logo: logoSntf, height: "h-12" },
  { name: "El Watan", logo: logoElWatan, height: "h-8" },
  { name: "TEDx Algérie", logo: logoTedx, height: "h-12" },
];

const works = projects;
function ShowreelCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-md bg-ink">
      <video
        ref={videoRef}
        src={src}
        playsInline
        controls={playing}
        className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-ink/40"
          onClick={() => { videoRef.current?.play(); setPlaying(true); }}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-2xl transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-current" />
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-xs uppercase tracking-widest text-gold">Vidéo</p>
            <p className="font-display text-base text-primary-foreground">Reportage {index + 1}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Anes Sidhoum<span className="text-gold">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-foreground">À propos</a>
            <a href="#work" className="transition hover:text-foreground">Travaux</a>
            <a href="#experience" className="transition hover:text-foreground">Parcours</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Travaillons ensemble
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-gold" />
                Portfolio · 2026
              </p>
              <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.95] tracking-tighter">
                Anes
                <br />
                <span className="italic text-primary">Sidhoum</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Chargé de communication & marketing digital — je construis des récits de marque
                pour des institutions publiques, des entreprises et des projets culturels.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Voir mes travaux
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={cv}
  download="Anes_Sidhoum_CV.pdf"
  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-secondary"
>
  Télécharger mon CV
  <ArrowUpRight className="h-4 w-4" />
</a>
              </div>
            </div>
            <div className="relative md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-primary">
                <img
                  src={portrait}
                  alt="Anes Sidhoum"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-border bg-card p-5 shadow-xl md:block">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Basé à</p>
                <p className="mt-1 font-display text-lg">Bordj El Bahri · Alger</p>
              </div>
            </div>
          </div>

          {/* Marquee strip */}
     

<div className="mt-24 border-y border-border py-8">
  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
    {clients.map((c, i) => (
      <img
        key={i}
        src={c.logo}
        alt={c.name}
        title={c.name}
        className="h-12 w-auto object-contain"
        style={{ maxWidth: "120px" }}
      />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Profil</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Stratège de marque & conteur visuel.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              Jeune diplômé en communication institutionnelle et marketing, passionné par la
              stratégie de marque et la communication digitale. Fort de plusieurs expériences au
              sein d'entreprises publiques et privées, j'interviens en communication interne,
              organisationnelle, en marketing digital ainsi qu'en communication événementielle.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { k: "5+", v: "Stages & missions" },
                { k: "M2", v: "Communication institutionnelle" },
                { k: "4", v: "Langues parlées" },
                { k: "∞", v: "Idées en tête" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-3xl font-semibold">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works gallery */}
      <section id="work" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Galerie</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Travaux & projets
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Une sélection visuelle de campagnes, couvertures événementielles, productions
              digitales et créations éditoriales.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {works.map((w, i) => (
              <Link
                key={i}
                to="/projects/$slug"
                params={{ slug: w.slug }}
                className={`group relative overflow-hidden rounded-md bg-muted ${w.span ?? ""}`}
              >
                <img
                  src={w.cover}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-primary-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-widest text-gold">{w.tag}</p>
                  <p className="font-display text-xl">{w.title}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary-foreground/80">
                    Voir le projet <ArrowUpRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

        
{/* Video section */}
<div className="mt-16">
  <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">— Showreel</p>
  <div className="grid gap-5 md:grid-cols-3">
    {[work3, work12, work16].map((src, i) => (
      <ShowreelCard key={i} src={src} index={i} />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border bg-ink py-24 text-primary-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">— Parcours</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Expériences & stages
            </h2>
            <p className="mt-6 text-primary-foreground/70">
              De la rédaction journalistique à la stratégie digitale — un parcours pluriel au
              service des marques et des institutions.
            </p>
          </div>

          <ol className="md:col-span-8">
            {experiences.map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-4 border-t border-primary-foreground/15 py-6 transition hover:bg-primary-foreground/[0.03] md:gap-8 md:py-8"
              >
                <span className="col-span-12 text-xs uppercase tracking-widest text-gold md:col-span-3">
                  {e.year}
                </span>
                <div className="col-span-12 md:col-span-9">
                  <p className="font-display text-xl md:text-2xl">{e.role}</p>
                  <p className="mt-1 text-sm text-gold/90">{e.org}</p>
                  <p className="mt-2 text-primary-foreground/70">{e.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Competences & education */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Expertise</p>
            <h3 className="mt-4 font-display text-4xl font-semibold">Compétences</h3>
            <ul className="mt-8 space-y-3">
              {competences.map((c) => (
                <li
                  key={c}
                  className="flex items-center justify-between border-b border-border py-3 text-lg"
                >
                  <span>{c}</span>
                  <span className="text-gold">◆</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Formation</p>
            <h3 className="mt-4 font-display text-4xl font-semibold">Diplômes & langues</h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-border p-6">
                <p className="text-xs uppercase tracking-widest text-gold">Master 2 · 2025</p>
                <p className="mt-2 font-display text-xl">Communication Institutionnelle</p>
                <p className="text-muted-foreground">École Nationale Supérieure de Journalisme & Science de l'Information</p>
              </div>
              <div className="rounded-lg border border-border p-6">
                <p className="text-xs uppercase tracking-widest text-gold">Formations</p>
                <ul className="mt-2 space-y-1 text-foreground/80">
                  <li>Soft Skills — EFU Centre, Alger</li>
                  <li>Français professionnel — Institut Français d'Alger</li>
                  <li>Infographie & design graphique</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-6">
                <p className="text-xs uppercase tracking-widest text-gold">Langues</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div><strong className="font-display">Arabe</strong> · Maternelle</div>
                  <div><strong className="font-display">Anglais</strong> · C1</div>
                  <div><strong className="font-display">Français</strong> · B2.2</div>
                  <div><strong className="font-display">Allemand</strong> · B1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Contact</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            Construisons ensemble votre <span className="italic text-primary">prochaine histoire</span> de marque.
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            <a
              href="mailto:sidhoumanes20@gmail.com"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-lg"
            >
              <Mail className="h-5 w-5 text-gold" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-display">sidhoumanes20@gmail.com</p>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="tel:0664898433"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-lg"
            >
              <Phone className="h-5 w-5 text-gold" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Téléphone</p>
                <p className="font-display">06 64 89 84 33</p>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="https://www.linkedin.com/in/anes-sidhoum-70a5a6229/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-lg"
            >
              <Linkedin className="h-5 w-5 text-gold" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
                <p className="font-display">Anes Sidhoum</p>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
            </a>
            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 text-left">
              <MapPin className="h-5 w-5 text-gold" />
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Localisation</p>
                <p className="font-display">Bordj El Bahri · Alger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-ink py-10 text-primary-foreground/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm md:px-10">
          <p>© 2026 Anes Sidhoum. Tous droits réservés.</p>
          <p className="font-display italic">Communication · Marketing · Récit</p>
        </div>
      </footer>
    </main>
  );
}
