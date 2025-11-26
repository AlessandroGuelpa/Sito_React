import DefaultLayout from "@/layouts/default";
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
//import { Helmet } from "react-helmet";

// Interfaccia per i props della Card (così TypeScript è felice)
interface SportCardProps {
  src: string;
  alt: string;
  className?: string;
  isLcp?: boolean; // True se è l'immagine principale (non lazy)
}

// Componente riutilizzabile per le Card
const SportCard = ({ src, alt, className = "", isLcp = false }: SportCardProps) => {
  return (
    <div
      className={`
        relative w-full rounded-xl overflow-visible cursor-pointer bg-gray-200 dark:bg-zinc-800
        transition-all duration-300 ease-out
        
        /* ORA ASCOLTIAMO 'group/photos' INVECE DI 'group/grid' */
        group-hover/photos:scale-95 group-hover/photos:opacity-60 group-hover/photos:blur-sm
        
        hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:!z-10 hover:shadow-2xl hover:-rotate-1
        
        ${className}
      `}
    >
    {/* ... resto del componente uguale a prima ... */}
      {isLcp ? (
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl shadow-lg" />
      ) : (
        <LazyLoadImage src={src} alt={alt} effect="blur" wrapperClassName="w-full h-full !block" className="w-full h-full object-cover rounded-xl shadow-lg" />
      )}
    </div>
  );
};

export default function Sports() {
  //const pageUrl = "https://alessandroguelpa.it/sports";

  return (
    <DefaultLayout>
      {/* ... Helmet e testi uguali a prima ... */}
      
      <section className="max-w-3xl mx-auto text-center px-4 py-0 space-y-6">
        {/* ... Titolo e Paragrafo ... */}
        
        {/* NUOVO CONTENITORE PADRE "group/photos"
           1. Racchiude entrambe le griglie.
           2. Gestisce lo spazio tra le griglie con 'space-y-10'.
           3. 'mt-10' sposta tutto il blocco foto giù dal testo.
        */}
        <div className="group/photos mt-10 space-y-10">
          
          {/* --- GRIGLIA 1 (Ho rimosso group/grid da qui) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="grid grid-rows-2 gap-6">
              <SportCard src="/mma5.webp" alt="Ishirioku Clan" className="h-69" />
              <SportCard src="/mma1.webp" alt="Trinity Jujitsu" className="h-69" />
            </div>
            <div className="md:col-span-2">
              <SportCard src="/summer.webp" alt="Trinity Summer Camp" className="h-[36rem]" isLcp={true} />
            </div>
          </div>

          {/* --- GRIGLIA 2 (Ho rimosso group/grid da qui) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SportCard src="/jujitsu.webp" alt="Jujitsu" className="h-64" />
            <SportCard src="/mma2.webp" alt="MMA" className="h-64" />
            <SportCard src="/mma4.webp" alt="Allenamento" className="h-64" />
            <SportCard src="/mma3.webp" alt="Krav Maga" className="h-64" />
          </div>

        </div> 
        {/* Fine del wrapper group/photos */}

      </section>
    </DefaultLayout>
  );
}