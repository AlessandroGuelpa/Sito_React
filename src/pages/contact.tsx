import DefaultLayout from "@/layouts/default";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Helmet} from "react-helmet";

export default function Contact() {
      const pageUrl = "https://alessandroguelpa.it/contact";
  return (
    <DefaultLayout>
                    <Helmet>
        <title>Contatti | Alessandro Guelpa</title>
        <meta name="description" content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo." />
           <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Contatti | Alessandro Guelpa" />
        <meta property="og:description" content="Hai un'idea o un progetto da propormi? Contattami per richieste o semplicemente per scambiare due chiacchiere su tecnologia e sviluppo." />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      <section className="max-w-2xl mx-auto text-center px-4 py-12 space-y-6">
        <h1 className="text-4xl text-violet-600 dark:text-violet-500 font-bold">Contatti</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Se vuoi metterti in contatto con me, scrivimi o visita il mio profilo su LinkedIn.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="mailto:alessandroguelpa@icloud.com"
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-md"
            aria-label="Inviami una mail"
          >
            <MdEmail size={22} />
            <span className="font-medium">Email</span>
          </a>

          <a
            href="www.linkedin.com/in/alessandro-guelpa-6434551b4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-md"
            aria-label="Visita il mio profilo LinkedIn"
          >
            <FaLinkedin size={22} />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/ale.guelpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-md"
            aria-label="Visita il mio profilo Instagram"
          >
            <FaInstagram size={22} />
            <span className="font-medium">Instagram</span>
          </a>
          
        </div>
      </section>
    </DefaultLayout>
  );
}
