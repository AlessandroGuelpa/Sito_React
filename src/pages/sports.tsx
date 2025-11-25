import DefaultLayout from "@/layouts/default";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Helmet} from "react-helmet";

export default function Sports() {
    const pageUrl = "https://alessandroguelpa.it/sports";
  return (
    <DefaultLayout>
       <Helmet>
        <title>Sports | Alessandro Guelpa</title>
        <meta name="description" content="Non solo codice: scopri la mia passione per lo sport. Una raccolta di pensieri, esperienze e traguardi sportivi che mi motivano ogni giorno a superare i miei limiti." />
      <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Sports | Alessandro Guelpa" />
        <meta property="og:description" content="Non solo codice: scopri la mia passione per lo sport. Una raccolta di pensieri, esperienze e traguardi sportivi che mi motivano ogni giorno a superare i miei limiti." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      <section className="max-w-3xl mx-auto text-center px-4 py-0 space-y-6">
        <h1 className="font-sans text-4xl text-violet-600 dark:text-violet-500 font-bold">
          Sport e Passioni
        </h1>
        <p className="font-sans text-zinc-600 dark:text-zinc-400">
          Da sempre appassionato di sport, amo mettermi alla prova attraverso
          discipline diverse. Il mio percorso è iniziato con il Karate,
          praticato per quattro anni, per poi evolversi nelle arti marziali
          miste (MMA).
          <br />
          Dopo anni di allenamento ed una lunga pausa, ho scelto di dedicarmi al
          Jujitsu, una disciplina che mi ha conquistato per tecnica e filosofia.
          <br />
          Oltre al tatami, mi alleno regolarmente in sala pesi, faccio lunghi
          trekking e pratico sport acquatici: modi diversi per mantenermi in
          forma, scaricare lo stress e spingere sempre un po’ più in là i miei
          limiti.
        </p>

        {/* Griglia principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Colonna sinistra - due foto quadrate (lazy) */}
          <div className="grid grid-rows-2 gap-6">
            <LazyLoadImage
              src="/mma5.webp"
              alt="Ishirioku Clan"
              effect="blur"
              loading="lazy"
              className="rounded-xl shadow-lg object-cover w-full h-69 transition-transform hover:scale-110"
            />
            <LazyLoadImage
              src="/mma1.webp"
              alt="Trinity Jujitsu"
              effect="blur"
              loading="lazy"
              className="rounded-xl shadow-lg object-cover w-full h-69 transition-transform hover:scale-110"
            />
          </div>

          {/* Colonna destra - immagine LCP (NO lazy, preload in index.html) */}
          <div className="md:col-span-2">
            <img
              src="/summer.webp"
              alt="Trinity Summer Camp"
              width="100%"
              height="auto"
              className="rounded-xl shadow-lg object-cover w-full h-[36rem] transition-transform hover:scale-110"
            />
          </div>
        </div>

        {/* Altre immagini (lazy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <LazyLoadImage
            src="/jujitsu.webp"
            alt="MMA senza colpi"
            effect="blur"
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 transition-transform hover:scale-110"
          />
          <LazyLoadImage
            src="/mma2.webp"
            alt="MMA senza colpi"
            effect="blur"
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 transition-transform hover:scale-110"
          />
          <LazyLoadImage
            src="/mma4.webp"
            alt="Allenamento MMA Verginelli"
            effect="blur"
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 transition-transform hover:scale-110"
          />
          <LazyLoadImage
            src="/mma3.webp"
            alt="Krav Maga"
            effect="blur"
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 transition-transform hover:scale-110"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
