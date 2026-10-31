import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import type { ReactNode } from "react";
import {
  ContactSection,
  Cover,
  Reveal,
  SiteHeader,
  VideoPlayer,
  Zoomable,
  container,
  eyebrow,
} from "@/components/portfolio";
import { type Img, type Project, categories, getProject, projects } from "@/data/projects";

const SITE_URL = "https://portfolio-anes.sidhoumanes20.workers.dev";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    const title = `${p.title} — Anes Sidhoum`;
    const url = `${SITE_URL}/projects/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_URL}/og.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-display text-3xl">Projet introuvable</p>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
});

/** A labelled section: sticky label on the left, content on the right. */
function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal as="section" className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-border pt-8">
      <h2
        className={`${eyebrow} col-span-12 font-sans text-muted-foreground md:sticky md:top-28 md:col-span-3 md:self-start`}
      >
        {label}
      </h2>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </Reveal>
  );
}

function Images({ images }: { images: Img[] }) {
  const cols = images.length === 1 ? "" : images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  return (
    <div className={`mt-8 grid items-start gap-4 md:gap-6 ${cols}`}>
      {images.map((img, i) => (
        <figure key={img.src}>
          <Zoomable image={img} />
          {img.caption ? (
            <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`${eyebrow} text-primary`}>{String(i + 1).padStart(2, "0")}</span>
              {img.caption}
              {images.length === 2 && i === 0 ? (
                <ArrowRight className="ml-auto hidden h-4 w-4 sm:block" />
              ) : null}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  // Match by slug: loader data is a serialized copy, not the same object.
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const meta = [
    { label: "Client", value: project.client },
    { label: "Année", value: project.year },
    { label: "Rôle", value: project.role },
    ...(project.tools.length > 0 ? [{ label: "Outils", value: project.tools.join(", ") }] : []),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        <article className="pt-28 md:pt-36">
          <header className={container}>
            <Link
              to="/"
              hash="work"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              Tous les projets
            </Link>
            <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-6">
              <p className={`${eyebrow} fade-up col-span-12 text-muted-foreground md:col-span-3`}>
                <span className="text-primary">{String(index + 1).padStart(2, "0")}</span> sur{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
              <div className="col-span-12 md:col-span-9">
                <div className="fade-up flex flex-wrap gap-2 text-xs">
                  {project.categories.map((c) => (
                    <span key={c} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {categories[c]}
                    </span>
                  ))}
                </div>
                <h1 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,6rem)] leading-[1] font-normal tracking-tight">
                  <span className="line-mask">
                    <span>{project.title}</span>
                  </span>
                </h1>
                <p
                  className="fade-up mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
                  style={{ animationDelay: "350ms" }}
                >
                  {project.summary}
                </p>
              </div>
            </div>
            <dl
              className="fade-up mt-14 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4"
              style={{ animationDelay: "500ms" }}
            >
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className={`${eyebrow} text-muted-foreground`}>{m.label}</dt>
                  <dd className="mt-2 leading-snug">{m.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className={`${container} mt-12 md:mt-16`}>
            <Cover
              image={project.cover}
              tone={project.coverTone}
              priority
              className="md:aspect-[16/9]"
            />
          </div>

          <div className={`${container} mt-16 md:mt-24`}>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
              {project.facts.map((f) => (
                <Reveal key={f.label} className="bg-background p-5 md:p-8">
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-display text-6xl leading-none text-primary md:text-8xl">
                      {f.value}
                    </span>
                    <span aria-hidden="true" className="mt-3 block text-sm text-muted-foreground">
                      {f.label}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className={`${container} mt-20 space-y-20 md:mt-32 md:space-y-28`}>
            <Block label="Contexte">
              <div className="space-y-6 text-xl leading-relaxed md:text-2xl">
                {project.context.map((p, i) => (
                  <p key={i} className={i === 0 ? "" : "text-muted-foreground"}>
                    {p}
                  </p>
                ))}
              </div>
            </Block>

            <Block label="Objectifs">
              <ol className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {project.objectives.map((o, i) => {
                  const [head, ...rest] = o.split(" — ");
                  return (
                    <li key={i} className="bg-background p-6">
                      <span className={`${eyebrow} text-primary`}>0{i + 1}</span>
                      {rest.length ? (
                        <>
                          <p className="mt-3 font-display text-2xl">{head}</p>
                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {rest.join(" — ")}
                          </p>
                        </>
                      ) : (
                        <p className="mt-3 leading-relaxed">{head}</p>
                      )}
                    </li>
                  );
                })}
              </ol>
            </Block>

            <Block label="Mon rôle">
              <ul className="divide-y divide-border border-y border-border">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex gap-4 py-4 text-lg leading-relaxed">
                    <span className="text-gold" aria-hidden="true">
                      —
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </Block>

            {project.steps ? (
              <Block label={project.steps.title}>
                <ol className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] md:overflow-visible md:px-0 md:pb-0">
                  {project.steps.items.map((s) => (
                    <li
                      key={s.label}
                      className="flex w-60 shrink-0 snap-start flex-col border-t-2 border-primary bg-secondary/70 p-5 md:w-auto"
                    >
                      <span className={`${eyebrow} text-primary`}>{s.label}</span>
                      <p className="mt-6 font-display text-2xl leading-tight">{s.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </Block>
            ) : null}

            <Block label="Direction créative & exécution">
              <div className="space-y-20 md:space-y-28">
                {project.execution.map((ex) => (
                  <Reveal key={ex.title}>
                    <h3 className="font-display text-3xl leading-tight font-normal md:text-5xl">
                      {ex.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                      {ex.body}
                    </p>
                    {ex.quote ? (
                      <figure className="my-8 border-l-2 border-gold pl-6">
                        <blockquote
                          lang={ex.quote.lang}
                          dir={ex.quote.lang === "ar" ? "rtl" : "ltr"}
                          className="w-fit font-display text-3xl leading-snug md:text-4xl"
                        >
                          {ex.quote.text}
                        </blockquote>
                        {ex.quote.gloss ? (
                          <figcaption className="mt-3 text-sm text-muted-foreground">
                            <span className={`${eyebrow} mr-2 text-primary`}>Texte original</span>
                            {ex.quote.gloss}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                    {ex.images ? <Images images={ex.images} /> : null}
                    {ex.videos ? (
                      <div
                        className={`mt-8 grid items-start gap-6 ${ex.videos.length > 1 ? "sm:grid-cols-2" : ""}`}
                      >
                        {ex.videos.map((v) => (
                          <VideoPlayer key={v.src} video={v} />
                        ))}
                      </div>
                    ) : null}
                  </Reveal>
                ))}
              </div>
            </Block>

            <Block label="Résultats">
              <p className="bg-primary/10 p-6 text-lg leading-relaxed text-primary md:p-8 md:text-xl">
                {project.results}
              </p>
              {project.documents?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.documents.map((doc) => (
                    <a
                      key={doc.label}
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 transition hover:border-foreground"
                    >
                      <Download className="h-4 w-4" />
                      {doc.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Block>
          </div>

          <nav aria-label="Projet suivant" className={`${container} my-24 md:my-36`}>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group grid grid-cols-12 items-center gap-6 border-t border-foreground pt-8"
            >
              <div className="col-span-12 md:col-span-7">
                <p className={`${eyebrow} text-muted-foreground`}>Projet suivant</p>
                <p className="mt-4 font-display text-4xl leading-[1.02] transition group-hover:text-primary md:text-6xl">
                  {next.title}
                </p>
                <span className="mt-8 inline-grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-ink">
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <Cover image={next.cover} tone={next.coverTone} />
              </div>
            </Link>
          </nav>
        </article>
      </main>
      <ContactSection />
    </div>
  );
}
