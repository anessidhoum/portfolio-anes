import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { getProject, projects, isVideo, type Project } from "@/data/projects";
import { useRef, useState } from "react";
import { isPdf } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Projet"} — Anes Sidhoum` },
      {
        name: "description",
        content: loaderData?.project.summary ?? "Projet de Anes Sidhoum",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-display text-3xl">Projet introuvable</p>
        <Link to="/" className="mt-4 inline-block text-gold underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
});

function GalleryItem({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        controls
        playsInline
        className="h-full w-full object-cover"
      />
    );
  }
  if (isPdf(src)) {
    return (
      <iframe
        src={src}
        title={alt}
        className="h-full w-full"
        style={{ minHeight: "600px" }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
    />
  );
}

// Composant pour une carte vidéo dans le showreel
function VideoCard({ mp4, thumb, title, duration }: {
  mp4: string;
  thumb?: string;
  title: string;
  duration: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-md bg-ink">
      <video
        ref={videoRef}
        src={mp4}
        poster={thumb}
        controls={playing}
        playsInline
        className="w-full h-auto max-h-[80vh] object-contain"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-ink/40"
          onClick={handlePlay}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-2xl transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-current" />
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-xs uppercase tracking-widest text-gold">
              Vidéo · {duration}
            </p>
            <p className="font-display text-lg text-primary-foreground">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            Anes<span className="text-gold">.</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux travaux
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">— {project.tag}</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tighter">
            {project.title}
          </h1>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Client</p>
              <p className="mt-2 font-display text-lg">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Année</p>
              <p className="mt-2 font-display text-lg">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Rôle</p>
              <p className="mt-2 font-display text-lg">{project.role}</p>
            </div>
            <div className="md:col-span-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Résumé</p>
              <p className="mt-2 text-foreground/80">{project.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg">
            {isVideo(project.cover) ? (
              <video src={project.cover} controls playsInline className="h-auto w-full" />
            ) : (
              <img src={project.cover} alt={project.title} className="h-auto w-full object-cover" />
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Galerie</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Images</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
              {project.gallery.map((src, i) => (
              <figure
  key={i}
  className={`overflow-hidden rounded-md bg-muted ${
    i % 3 === 0 ? "md:col-span-2" : ""
  } ${isPdf(src) ? "h-[600px]" : ""}`}
>
                  <GalleryItem src={src} alt={`${project.title} — ${i + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos */}
      {project.videos.length > 0 && (
        <section className="border-t border-border bg-ink py-24 text-primary-foreground md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">— Vidéos</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Showreel</h2>
           <div className="mt-10 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {project.videos.map((v, i) => (
                <VideoCard
                  key={i}
                  mp4={v.mp4}
                  thumb={v.thumb}
                  title={v.title}
                  duration={v.duration}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other projects */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">— Suivant</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Autres projets
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-md bg-muted"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {isVideo(p.cover) ? (
                    <video src={p.cover} muted playsInline className="h-full w-full object-cover" />
                  ) : (
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest text-gold">{p.tag}</p>
                  <p className="font-display text-lg">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-ink py-10 text-primary-foreground/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm md:px-10">
          <p>© 2026 Anes Sidhoum. Tous droits réservés.</p>
          <Link to="/" className="font-display italic hover:text-primary-foreground">
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </main>
  );
}