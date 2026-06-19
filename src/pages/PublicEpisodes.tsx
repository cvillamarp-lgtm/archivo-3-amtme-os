import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PublicEpisodes() {
  const { slug } = useParams();

  // If accessing /episodios/:slug, show episode detail
  if (slug) {
    const episodes: Record<
      string,
      {
        title: string;
        tags: string;
        time: string;
        desc: string;
        ep: string;
        img: string;
        fullDesc: string;
      }
    > = {
      "por-que-vuelves-aunque-ya-lo-sabes": {
        title: "Por qué vuelves aunque ya lo sabes",
        tags: "Apego · Dignidad",
        time: "48 min",
        desc: "Sobre ese ciclo donde la mente entiende pero el cuerpo todavía busca lo que lo hirió.",
        ep: "014",
        img: "/amtme-editorial/episode-cover-1-C7rZERT9.jpg",
        fullDesc:
          "Esa cosa rara donde la mente entiende, el cuerpo recuerda y la historia vuelve a llamarte a la puerta. Un episodio sobre el ciclo, el cuerpo y lo que realmente se está soltando cuando crees que estás soltando.",
      },
      "no-era-intensidad-era-una-herida": {
        title: "No era intensidad, era una herida",
        tags: "Amor vs apego",
        time: "52 min",
        desc: "Cuando confundimos la urgencia emocional con conexión y llamamos amor a lo que solo era miedo.",
        ep: "013",
        img: "/amtme-editorial/episode-cover-2-pNgYfVr4.jpg",
        fullDesc:
          "Una conversación profunda sobre cómo confundimos la urgencia emocional con conexión real, y llamamos amor a lo que solo era miedo.",
      },
      "soltar-sin-pedir-permiso": {
        title: "Soltar sin pedir permiso",
        tags: "Límites · Duelo",
        time: "41 min",
        desc: "Una conversación íntima sobre cerrar capítulos sin necesitar la aprobación de quien te rompió.",
        ep: "012",
        img: "/amtme-editorial/episode-cover-3-BNB76_QL.jpg",
        fullDesc:
          "Una conversación íntima sobre cerrar capítulos sin necesitar la aprobación de quien te rompió, sin pedir permiso.",
      },
    };

    const episode = episodes[slug];

    if (!episode) {
      return (
        <div className="min-h-screen bg-cream text-navy flex flex-col items-center justify-center px-6">
          <h1 className="font-display text-4xl mb-4">Episodio no encontrado</h1>
          <Link
            to="/#episodios"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-cream font-semibold hover:bg-navy/90"
          >
            <ArrowLeft width={18} />
            Volver a episodios
          </Link>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-cream text-navy">
        <header className="border-b border-navy/10 bg-cream/85 backdrop-blur-md">
          <div className="mx-auto max-w-[1320px] px-6 py-4 lg:px-12">
            <Link
              to="/#episodios"
              className="inline-flex items-center gap-2 text-navy hover:text-navy/70 font-semibold"
            >
              <ArrowLeft width={18} />
              Volver a episodios
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-16 lg:px-12 lg:py-24">
          <article>
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray">
              <span className="h-px w-10 bg-navy/30"></span>
              Episodio {episode.ep}
            </div>

            <h1 className="font-display text-5xl lg:text-6xl text-navy mb-6">
              {episode.title}
            </h1>

            <div className="text-lg text-navy/75 mb-8">{episode.tags} · {episode.time}</div>

            <img
              src={episode.img}
              alt={episode.title}
              className="w-full rounded-3xl mb-12 border border-navy/10 shadow-soft"
            />

            <div className="prose prose-lg max-w-none text-navy/80">
              <p className="text-xl leading-relaxed mb-8">{episode.fullDesc}</p>

              <div className="mt-12 pt-12 border-t border-navy/10">
                <h2 className="font-display text-3xl text-navy mb-6">Escucha en tu plataforma favorita</h2>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href="https://open.spotify.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-navy font-semibold hover:bg-lime/90"
                  >
                    Spotify
                  </a>
                  <a
                    href="https://podcasts.apple.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-cream"
                  >
                    Apple Podcasts
                  </a>
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-cream"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.ivoox.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-navy font-semibold hover:bg-navy hover:text-cream"
                  >
                    iVoox
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // Otherwise show episodes grid
  return (
    <div className="min-h-screen bg-cream text-navy">
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-tight text-navy">AMTME</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-bluegray md:inline">
              podcast
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-navy hover:text-navy/70"
          >
            Volver a inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-6 py-24 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bluegray mb-4">
            <span className="h-px w-8 bg-navy/30"></span>
            Catálogo
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-navy">
            Todos los episodios.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    Ver episodio →
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
      </main>
    </div>
  );
}
