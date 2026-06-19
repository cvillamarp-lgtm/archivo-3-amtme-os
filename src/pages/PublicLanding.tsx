import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PublicLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-navy">
      {/* ─── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-navy">AMTME</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-bluegray md:inline">
              podcast
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <button
              onClick={() => scrollToSection("featured")}
              className="relative py-2 transition-colors hover:text-navy/70"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("episodios")}
              className="relative py-2 transition-colors hover:text-navy/70"
            >
              Episodios
            </button>
            <button
              onClick={() => scrollToSection("manifiesto")}
              className="relative py-2 transition-colors hover:text-navy/70"
            >
              Sobre AMTME
            </button>
            <button
              onClick={() => scrollToSection("christian")}
              className="relative py-2 transition-colors hover:text-navy/70"
            >
              Christian
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className="relative py-2 transition-colors hover:text-navy/70"
            >
              Newsletter
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/studio"
              className="hidden text-xs font-semibold text-navy opacity-70 hover:opacity-100 md:inline"
              title="Acceso a Studio (requiere autenticación)"
            >
              Studio
            </Link>
            <button
              onClick={() => scrollToSection("featured")}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-[2px]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime"></span>
              Escuchar ahora
            </button>
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 text-navy md:hidden"
            >
              {mobileMenuOpen ? (
                <X width={22} height={22} />
              ) : (
                <Menu width={22} height={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-navy/10 bg-cream px-6 py-4 md:hidden">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("featured")}
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("episodios")}
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70"
              >
                Episodios
              </button>
              <button
                onClick={() => scrollToSection("manifiesto")}
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70"
              >
                Sobre AMTME
              </button>
              <button
                onClick={() => scrollToSection("christian")}
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70"
              >
                Christian
              </button>
              <button
                onClick={() => scrollToSection("newsletter")}
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70"
              >
                Newsletter
              </button>
              <Link
                to="/studio"
                className="block w-full text-left text-sm font-medium py-2 hover:text-navy/70 text-opacity-70"
              >
                Studio (autenticación)
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* ─── Hero Section ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-navy/10">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pb-32 lg:pt-24">
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                <span className="h-px w-10 bg-navy/30"></span>
                Episodio 014 · Nuevo
              </div>
              <h1 className="font-display text-[clamp(2.4rem,7vw,6.8rem)] leading-[1.05] text-navy">
                A mí tampoco me explicaron{" "}
                <span className="relative inline-block">
                  cómo se suelta
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-lime/50 -z-10"></span>
                </span>{" "}
                lo que todavía duele.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Un podcast para entender el amor, el apego, los vínculos, la dignidad y
                todo eso que sentimos, pero que nadie nos enseñó a nombrar.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("featured")}
                  className="inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-bold text-navy shadow-soft transition-transform hover:-translate-y-[2px]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 4l14 8-14 8V4z"></path>
                  </svg>
                  Escuchar episodio destacado
                </button>
                <button
                  onClick={() => scrollToSection("episodios")}
                  className="inline-flex items-center gap-2 rounded-full border border-navy px-7 py-4 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                >
                  Ver episodios
                </button>
              </div>

              <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-navy/10 pt-8 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-bluegray">Temporadas</dt>
                  <dd className="mt-1 font-display text-2xl">03</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-bluegray">Episodios</dt>
                  <dd className="mt-1 font-display text-2xl">42</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-bluegray">Oyentes</dt>
                  <dd className="mt-1 font-display text-2xl">120K+</dd>
                </div>
              </dl>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -left-6 top-12 z-0 hidden h-72 w-72 rounded-full bg-lime/70 blur-[120px] lg:block"></div>
              <div className="relative z-10 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
                <img
                  src="/amtme-editorial/christian-hero-BD2hR2v6.jpg"
                  alt="Christian Villamar, host de A Mí Tampoco Me Explicaron"
                  width="1080"
                  height="1600"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 z-20 hidden rounded-2xl bg-navy px-5 py-4 text-cream shadow-lg md:block">
                <div className="text-[10px] uppercase tracking-[0.2em] text-lime">Host</div>
                <div className="mt-1 font-display text-lg">Christian Villamar</div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden border-t border-navy/10 bg-navy text-cream">
            <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-5">
              {[
                "Amor vs apego",
                "Dignidad",
                "Volver a uno mismo",
                "Duelo emocional",
                "Límites",
                "Rechazo",
                "Ansiedad afectiva",
                "Tarot como espejo",
              ].map((tema, i) => (
                <span key={i} className="mx-10 font-display text-2xl tracking-wide">
                  {tema}
                  <span className="ml-10 text-lime">✦</span>
                </span>
              ))}
              {/* Repeat for seamless loop */}
              {[
                "Amor vs apego",
                "Dignidad",
                "Volver a uno mismo",
                "Duelo emocional",
                "Límites",
                "Rechazo",
                "Ansiedad afectiva",
                "Tarot como espejo",
              ].map((tema, i) => (
                <span key={`repeat-${i}`} className="mx-10 font-display text-2xl tracking-wide">
                  {tema}
                  <span className="ml-10 text-lime">✦</span>
                </span>
              ))}
            </div>
            <style>{`
              @keyframes scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </section>

        {/* ─── Featured Episode ───────────────────────────────────────────────── */}
        <section id="featured" className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                <span className="h-px w-8 bg-navy/30"></span>
                Episodio destacado
              </div>
              <h2 className="mt-5 font-display text-navy text-4xl lg:text-6xl">
                Lo que está sonando ahora
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl bg-ink text-cream shadow-soft lg:grid-cols-12">
              <div className="relative lg:col-span-5">
                <img
                  src="/amtme-editorial/episode-cover-1-C7rZERT9.jpg"
                  alt="Por qué vuelves aunque ya lo sabes"
                  width="800"
                  height="800"
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1 text-xs font-bold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy"></span>
                  NUEVO · EP 014
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-7 lg:p-12">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-bluegray">
                    Apego · Dignidad · 48 min
                  </div>
                  <h3 className="mt-4 font-display text-4xl text-cream lg:text-6xl">
                    Por qué vuelves aunque ya lo sabes
                  </h3>
                  <p className="mt-6 max-w-xl text-cream/70">
                    Esa cosa rara donde la mente entiende, el cuerpo recuerda y la
                    historia vuelve a llamarte a la puerta. Un episodio sobre el ciclo,
                    el cuerpo y lo que realmente se está soltando cuando crees que estás
                    soltando.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                    <iframe
                      title="Reproductor Spotify · Por qué vuelves aunque ya lo sabes"
                      src="https://open.spotify.com/embed/episode/PLACEHOLDER?utm_source=generator"
                      width="100%"
                      height="152"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      className="block"
                    ></iframe>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
                    <Link
                      to="/episodios/por-que-vuelves-aunque-ya-lo-sabes"
                      className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-navy hover:bg-lime/90"
                    >
                      Ver episodio completo →
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://open.spotify.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-lime hover:text-lime"
                      >
                        Spotify
                      </a>
                      <a
                        href="https://podcasts.apple.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-lime hover:text-lime"
                      >
                        Apple Podcasts
                      </a>
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-lime hover:text-lime"
                      >
                        YouTube
                      </a>
                      <a
                        href="https://www.ivoox.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-lime hover:text-lime"
                      >
                        iVoox
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What is AMTME ─────────────────────────────────────────────────── */}
        <section id="manifiesto" className="border-y border-navy/10 bg-cream px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                  <span className="h-px w-8 bg-navy/30"></span>
                  Qué es AMTME
                </div>
              </div>
              <h2 className="mt-5 font-display text-4xl text-navy lg:text-5xl leading-tight">
                Una casa para los que sintieron{" "}
                <span className="relative inline-block">
                  demasiado
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-lime/50 -z-10"></span>
                </span>
                .
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-navy/80 lg:col-span-7 lg:col-start-6">
              <p>
                AMTME es un espacio para quienes han sentido demasiado, han explicado
                demasiado, han esperado demasiado y un día necesitan volver a
                escucharse.
              </p>
              <p className="text-navy/65">
                No viene a darte respuestas perfectas. Viene a acompañarte mientras
                encuentras las tuyas. Aquí no hablamos desde el pedestal — hablamos
                desde el camino, con honestidad, vulnerabilidad y una mirada simbólica
                que usa el tarot como espejo de conciencia.
              </p>
              <p className="text-navy/65">
                No prometemos arreglarte. Te recordamos que no estás roto: estás
                entendiendo tarde lo que nadie te enseñó a tiempo.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("episodios")}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  <span className="relative inline-block">
                    Empieza por aquí
                    <span className="absolute bottom-0 left-0 right-0 h-2 bg-lime/50 -z-10"></span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Topics ────────────────────────────────────────────────────────── */}
        <section className="px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                  <span className="h-px w-8 bg-navy/30"></span>
                  Temas
                </div>
                <h2 className="mt-5 font-display text-navy text-4xl lg:text-6xl">
                  Lo que abordamos.
                </h2>
              </div>
              <span className="text-sm text-bluegray">09 territorios emocionales</span>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "Amor vs apego",
                "Límites",
                "Dignidad",
                "Rechazo",
                "Duelo",
                "Ansiedad emocional",
                "Rol del salvador",
                "Volver a uno mismo",
                "Tarot como espejo",
              ].map((tema, i) => (
                <button
                  key={i}
                  type="button"
                  className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
                >
                  <span className="text-bluegray mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {tema}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recent Episodes ────────────────────────────────────────────────── */}
        <section id="episodios" className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                  <span className="h-px w-8 bg-navy/30"></span>
                  Catálogo
                </div>
                <h2 className="mt-5 font-display text-navy text-4xl lg:text-6xl">
                  Episodios recientes.
                </h2>
              </div>
              <Link
                to="/episodios"
                className="text-sm font-semibold text-navy relative inline-block"
              >
                <span className="relative inline-block">
                  Ver todos los episodios →
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-lime/50 -z-10"></span>
                </span>
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  slug: "por-que-vuelves-aunque-ya-lo-sabes",
                  title: "Por qué vuelves aunque ya lo sabes",
                  tags: "Apego · Dignidad",
                  time: "48 min",
                  desc: "Sobre ese ciclo donde la mente entiende pero el cuerpo todavía busca lo que lo hirió.",
                  ep: "014",
                  img: "/amtme-editorial/episode-cover-1-C7rZERT9.jpg",
                },
                {
                  slug: "no-era-intensidad-era-una-herida",
                  title: "No era intensidad, era una herida",
                  tags: "Amor vs apego",
                  time: "52 min",
                  desc: "Cuando confundimos la urgencia emocional con conexión y llamamos amor a lo que solo era miedo.",
                  ep: "013",
                  img: "/amtme-editorial/episode-cover-2-pNgYfVr4.jpg",
                },
                {
                  slug: "soltar-sin-pedir-permiso",
                  title: "Soltar sin pedir permiso",
                  tags: "Límites · Duelo",
                  time: "41 min",
                  desc: "Una conversación íntima sobre cerrar capítulos sin necesitar la aprobación de quien te rompió.",
                  ep: "012",
                  img: "/amtme-editorial/episode-cover-3-BNB76_QL.jpg",
                },
              ].map((episode) => (
                <article
                  key={episode.slug}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    to={`/episodios/${episode.slug}`}
                    className="relative block aspect-square overflow-hidden"
                  >
                    <img
                      src={episode.img}
                      alt={episode.title}
                      width="800"
                      height="800"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                      EP {episode.ep}
                    </span>
                    <span
                      aria-label="Reproducir"
                      className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-lime text-navy opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 4l14 8-14 8V4z"></path>
                      </svg>
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="text-xs uppercase tracking-[0.18em] text-bluegray">
                      {episode.tags} · {episode.time}
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-navy">
                      <Link
                        to={`/episodios/${episode.slug}`}
                        className="hover:underline"
                      >
                        {episode.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                      {episode.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
                      <Link
                        to={`/episodios/${episode.slug}`}
                        className="text-sm font-semibold text-navy hover:text-navy/70"
                      >
                        Escuchar →
                      </Link>
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-lime"></span>
                        <span className="h-2 w-2 rounded-full bg-navy"></span>
                        <span className="h-2 w-2 rounded-full bg-amtme-red"></span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Manifesto ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-navy px-6 py-32 text-cream lg:px-12 lg:py-44">
          <div className="absolute inset-0 opacity-[0.04] [background:radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="relative mx-auto max-w-[1100px] text-center">
            <div className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-lime">
              <span className="h-px w-8 bg-lime"></span>
              Manifiesto
            </div>
            <p className="font-display text-[clamp(2rem,5.2vw,5rem)] leading-[1.02] text-cream">
              No era intensidad.
              <br />
              Era una{" "}
              <span className="relative inline-block">
                herida intentando
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-lime/50 -z-10"></span>
              </span>
              <br />
              explicar por qué dolía tanto.
            </p>

            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("featured")}
                className="inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-bold text-navy transition-transform hover:-translate-y-[2px]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 4l14 8-14 8V4z"></path>
                </svg>
                Escuchar el podcast
              </button>
              <button
                onClick={() => scrollToSection("newsletter")}
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-navy"
              >
                Unirme a la newsletter
              </button>
            </div>
          </div>
        </section>

        {/* ─── About Christian ────────────────────────────────────────────────── */}
        <section id="christian" className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-soft">
                <img
                  src="/amtme-editorial/christian-back-NyR-73YT.jpg"
                  alt="Christian Villamar de espaldas"
                  width="1200"
                  height="1400"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                  <span className="h-px w-8 bg-navy/30"></span>
                  Sobre Christian
                </div>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[0.95] text-navy lg:text-6xl">
                No hablo desde el pedestal. Hablo desde el camino.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy/75">
                <p>
                  Soy Christian Villamar. AMTME nace de todo eso que también tuve que
                  aprender tarde: amar sin desaparecer, soltar sin romperme y volver a
                  mí sin pedir permiso.
                </p>
                <p className="text-navy/60">
                  Llevo años conversando sobre vínculos, apego, ansiedad afectiva y
                  dignidad emocional. No para darte fórmulas — para acompañarte mientras
                  entiendes las tuyas.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-[2px]"
                >
                  Conocer más
                </a>
                <a
                  href="https://instagram.com/YOSOYVILLAMAR"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/30 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                >
                  @YOSOYVILLAMAR
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Newsletter ─────────────────────────────────────────────────────── */}
        <section id="newsletter" className="px-6 py-24 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] bg-lime lg:grid-cols-12">
              <div className="p-10 lg:col-span-7 lg:p-16">
                <div className="text-xs uppercase tracking-[0.25em] text-navy/60">
                  Carta emocional
                </div>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] text-navy lg:text-6xl">
                  Recibe una carta cuando haya algo que valga la pena decir.
                </h2>
                <p className="mt-6 max-w-xl text-lg text-navy/75">
                  Reflexiones, episodios nuevos y recordatorios para no volver a
                  negociarte por migajas. Sin spam. Sin ruido. Solo cuando importa.
                </p>

                <form className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    className="flex-1 rounded-full border border-navy/20 bg-cream px-6 py-4 text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-navy px-8 py-4 text-sm font-bold text-cream transition-transform hover:-translate-y-[2px]"
                  >
                    Quiero recibirla
                  </button>
                </form>
                <p className="mt-4 text-xs text-navy/55">
                  Protegemos tu correo. Te puedes dar de baja cuando quieras.
                </p>
              </div>

              <div className="relative hidden border-l border-navy/10 lg:col-span-5 lg:block">
                <div className="flex h-full flex-col justify-between p-12">
                  <div className="font-display text-[8rem] leading-none text-navy/90">
                    "
                  </div>
                  <div>
                    <p className="font-display text-3xl leading-tight text-navy">
                      Sentirse acompañado también es una forma de sanar.
                    </p>
                    <div className="mt-6 text-xs uppercase tracking-[0.2em] text-navy/60">
                      — Una oyente · México
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Platforms ──────────────────────────────────────────────────────── */}
        <section className="border-t border-navy/10 bg-cream px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
                  <span className="h-px w-8 bg-navy/30"></span>
                  Plataformas
                </div>
                <h2 className="mt-5 font-display text-navy text-3xl lg:text-4xl">
                  Escucha donde quieras.
                </h2>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
              {[
                { name: "Spotify", sub: "Principal", url: "https://open.spotify.com/" },
                { name: "Apple Podcasts", sub: "iOS", url: "https://podcasts.apple.com/" },
                { name: "YouTube", sub: "Video & audio", url: "https://youtube.com/" },
                { name: "iVoox", sub: "Comunidad ES", url: "https://www.ivoox.com/" },
                { name: "RSS", sub: "Feed directo", url: "#" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-navy/15 bg-white p-5 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-soft"
                >
                  <div>
                    <div className="font-display text-lg text-navy">{platform.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-bluegray">
                      {platform.sub}
                    </div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-navy/40 transition-all group-hover:translate-x-1 group-hover:text-navy"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ────────────────────────────────────────────────────────────── */}
      <footer className="bg-navy px-6 pb-10 pt-24 text-cream lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-display text-3xl">AMTME</div>
              <p className="mt-6 max-w-md font-display text-2xl leading-tight text-cream">
                Lo que pensamos,
                <br />
                lo que sentimos,
                <br />
                <span className="relative inline-block">
                  pero que nadie nos explicó.
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-lime/50 -z-10"></span>
                </span>
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-lime">Navegar</h4>
              <ul className="mt-5 space-y-3 text-sm text-cream/80">
                <li>
                  <Link to="/" className="hover:text-cream transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("episodios")}
                    className="hover:text-cream transition-colors"
                  >
                    Episodios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("manifiesto")}
                    className="hover:text-cream transition-colors"
                  >
                    Sobre AMTME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("christian")}
                    className="hover:text-cream transition-colors"
                  >
                    Christian
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-lime">Escuchar</h4>
              <ul className="mt-5 space-y-3 text-sm text-cream/80">
                <li>
                  <a
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://podcasts.apple.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ivoox.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream transition-colors"
                  >
                    iVoox
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-lime">Contacto</h4>
              <ul className="mt-5 space-y-3 text-sm text-cream/80">
                <li>hola@amtme.com</li>
                <li>Prensa y colaboraciones</li>
                <li>
                  <a
                    href="https://instagram.com/YOSOYVILLAMAR"
                    target="_blank"
                    rel="noreferrer"
                    className="relative inline-block"
                  >
                    <span className="relative inline-block">
                      @YOSOYVILLAMAR
                      <span className="absolute bottom-0 left-0 right-0 h-2 bg-lime/50 -z-10"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
            <div>© 2026 A Mí Tampoco Me Explicaron · Christian Villamar</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cream transition-colors">
                Aviso de privacidad
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
