import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Expand,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react";
import cv from "@/assets/Anes_Sidhoum_CV.pdf";
import type { Img, Video } from "@/data/projects";

export const contact = {
  email: "sidhoumanes20@gmail.com",
  phone: "06 64 89 84 33",
  phoneHref: "tel:+213664898433",
  linkedin: "https://www.linkedin.com/in/anes-sidhoum-70a5a6229/",
  location: "Bordj El Bahri · Alger",
  cv,
};

export const container = "mx-auto w-full max-w-7xl px-6 md:px-10";
export const eyebrow = "text-xs font-medium uppercase tracking-[0.18em]";

/**
 * Fades its content in when scrolled into view. Content is rendered visible on
 * the server and only hidden (then revealed) when it starts below the fold.
 */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  const style =
    state === "hidden"
      ? { opacity: 0, transform: "translateY(28px)" }
      : state === "shown"
        ? {
            opacity: 1,
            transform: "none",
            transition: `opacity 0.9s ${ease} ${delay}ms, transform 1.1s ${ease} ${delay}ms`,
          }
        : undefined;

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Numbered section title: "(01) Projets choisis". */
export function SectionHead({
  index,
  id,
  title,
  intro,
  dark = false,
}: {
  index: string;
  id?: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`grid grid-cols-12 gap-x-6 gap-y-4 border-t pt-6 md:pt-8 ${dark ? "border-primary-foreground/20" : "border-border"}`}
    >
      <p
        className={`${eyebrow} col-span-12 md:col-span-3 ${dark ? "text-gold" : "text-muted-foreground"}`}
      >
        ({index})
      </p>
      <div className="col-span-12 md:col-span-9">
        <h2
          id={id}
          className="font-display text-5xl leading-[0.95] font-normal tracking-tight md:text-7xl"
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}
          >
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

const nav = [
  { hash: "work", label: "Projets" },
  { hash: "about", label: "Profil" },
  { hash: "expertise", label: "Expertise" },
  { hash: "experience", label: "Parcours" },
  { hash: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="fixed top-4 left-4 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 text-primary-foreground focus:translate-y-0"
      >
        Aller au contenu
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[translate,background-color] duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled && !open ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : ""}`}
      >
        <div className={`${container} flex h-16 items-center justify-between gap-6 md:h-20`}>
          <Link
            to="/"
            aria-label="Accueil — Anes Sidhoum"
            className={`font-display text-xl tracking-tight ${open ? "text-primary-foreground" : ""}`}
          >
            Anes Sidhoum<span className="text-gold">.</span>
          </Link>
          <nav aria-label="Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm">
              {nav.map((n) => (
                <li key={n.hash}>
                  <Link
                    to="/"
                    hash={n.hash}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              hash="contact"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
            >
              Travaillons ensemble <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
              className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm lg:hidden ${
                open ? "border-primary-foreground/40 text-primary-foreground" : "border-border"
              }`}
            >
              {open ? "Fermer" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-primary px-6 pt-24 pb-8 text-primary-foreground lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="flex-1">
          <ul className="space-y-1">
            {nav.map((n, i) => (
              <li key={n.hash}>
                <Link
                  to="/"
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-1 font-display text-5xl"
                >
                  <span className={`${eyebrow} text-gold`}>0{i + 1}</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/80"
        >
          {contact.email}
        </a>
      </div>
    </>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(contact.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        } catch {
          window.location.href = `mailto:${contact.email}`;
        }
      }}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-primary-foreground/30 px-5 text-sm transition hover:bg-gold hover:text-ink"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span aria-live="polite">{copied ? "Adresse copiée" : "Copier l'adresse"}</span>
    </button>
  );
}

/** Closing contact block + footer, shared by every page. */
export function ContactSection() {
  const items = [
    { icon: Phone, label: "Téléphone", value: contact.phone, href: contact.phoneHref },
    { icon: Linkedin, label: "LinkedIn", value: "Anes Sidhoum", href: contact.linkedin },
    { icon: MapPin, label: "Localisation", value: contact.location },
    { icon: Download, label: "CV", value: "Télécharger (PDF)", href: contact.cv, download: true },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className={`${container} pt-24 pb-10 md:pt-36`}>
        <SectionHead index="05" id="contact-title" title="Contact" dark />
        <Reveal className="mt-14 grid grid-cols-12 gap-x-6 md:mt-20">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Construisons ensemble votre <span className="text-gold italic">prochaine histoire</span>{" "}
              de marque.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-primary-foreground/40 pb-2 font-display text-[clamp(1.6rem,5.5vw,4.5rem)] leading-none transition hover:border-gold"
            >
              <Mail className="hidden h-[0.6em] w-[0.6em] shrink-0 text-gold sm:block" />
              <span className="truncate">{contact.email}</span>
            </a>
            <div className="mt-6">
              <CopyEmail />
            </div>
            <dl className="mt-16 grid gap-x-6 gap-y-8 border-t border-primary-foreground/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map(({ icon: Icon, label, value, href, download }) => (
                <div key={label}>
                  <dt className={`${eyebrow} flex items-center gap-2 text-gold`}>
                    <Icon className="h-3.5 w-3.5" /> {label}
                  </dt>
                  <dd className="mt-2 text-lg">
                    {href ? (
                      <a
                        href={href}
                        {...(download
                          ? { download: "Anes_Sidhoum_CV.pdf" }
                          : href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        className="underline-offset-4 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
        <footer className="mt-24 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Anes Sidhoum. Tous droits réservés.</p>
          <p className="font-display italic">Communication · Marketing · Récit</p>
        </footer>
      </div>
    </section>
  );
}

/** Artwork on a matte panel, never cropped. */
export function Cover({
  image,
  tone,
  priority = false,
  className = "",
}: {
  image: Img;
  tone: "light" | "dark";
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden ${tone === "dark" ? "bg-ink" : "bg-secondary"} ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.w}
        height={image.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 m-auto h-auto max-h-[84%] w-auto max-w-[86%] object-contain shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)] transition duration-700 group-hover:-translate-y-2 group-hover:scale-[1.025]"
      />
    </div>
  );
}

/** Image that opens full size in a native dialog (Escape or click outside to close). */
export function Zoomable({ image }: { image: Img }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpened(true);
          dialog.current?.showModal();
        }}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-secondary ring-1 ring-border"
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.w}
          height={image.h}
          loading="lazy"
          decoding="async"
          className="h-auto w-full transition duration-700 group-hover:scale-[1.015]"
        />
        <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-primary-foreground opacity-0 transition group-hover:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-label={image.alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="m-auto max-h-[92vh] max-w-[94vw] bg-transparent p-0 backdrop:bg-black/85"
      >
        {opened ? (
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[92vh] w-auto max-w-[94vw] object-contain"
          />
        ) : null}
        <form method="dialog">
          <button
            type="submit"
            aria-label="Fermer"
            className="fixed top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </form>
      </dialog>
    </>
  );
}

/** Native player; nothing downloads until the visitor presses play. */
export function VideoPlayer({
  video,
  label,
  tile = false,
}: {
  video: Video;
  label?: string;
  tile?: boolean;
}) {
  const portrait = video.orientation === "portrait" && !tile;
  return (
    <figure
      className="mx-auto w-full"
      style={portrait ? { maxWidth: "min(100%, calc(78vh * 9 / 16))" } : undefined}
    >
      <div className={`overflow-hidden bg-ink ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
        <video
          controls
          preload="none"
          playsInline
          poster={video.poster}
          aria-label={label ? `${label} — ${video.title}` : video.title}
          className="h-full w-full object-contain"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-muted-foreground">
        <span>
          {label ? <span className="text-foreground">{label} — </span> : null}
          {video.title}
        </span>
        <span className="tabular-nums">{video.duration}</span>
      </figcaption>
    </figure>
  );
}
