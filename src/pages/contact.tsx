import DefaultLayout from "@/layouts/default";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <DefaultLayout>
      <section className="max-w-2xl mx-auto text-center px-4 py-12 space-y-6">
        <h1 className="text-4xl text-violet-600 dark:text-violet-500 font-bold">Contatti</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Se vuoi metterti in contatto con me, scrivimi o visitami su LinkedIn.
        </p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="mailto:alexander.guelpa@icloud.com"
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-md"
            aria-label="Invia una email ad Alessandro"
          >
            <MdEmail size={22} />
            <span className="font-medium">alexander.guelpa@icloud.com</span>
          </a>

          <a
            href="www.linkedin.com/in/alessandro-guelpa-6434551b4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-md"
            aria-label="Visita il profilo LinkedIn di Alessandro"
          >
            <FaLinkedin size={22} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </section>
    </DefaultLayout>
  );
}
