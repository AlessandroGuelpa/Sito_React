//import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { FaDownload } from "react-icons/fa";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <h1 className="text-4xl text-violet-600 dark:text-violet-500 font-bold text-center">Chi sono</h1>
      <p className="text-center text-zinc-500 dark:text-zinc-400 mb-8">
        Una breve introduzione su di me.
      </p>

      <div className="text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
        <p>
          Mi chiamo Alessandro e sono uno sviluppatore full-stack con una forte
          propensione al front-end e una curiosità instancabile per tutto ciò
          che riguarda lo sviluppo web.
        </p>
        <p>
          Attualmente lavoro su progetti e-commerce e soluzioni digitali che
          integrano tecnologie moderne come React, Tailwind CSS e Ruby on Rails.
        </p>
        <p>
          Nel tempo libero pratico Jujitsu, mi appassionano le auto e adoro
          sperimentare con nuove idee e tecnologie.
        </p>
      </div>
      <div className="my-8 border-t border-muted-dark" />
      <h2 className="text-4xl text-violet-600 dark:text-violet-500 font-bold text-center mb-6">Il mio CV?</h2>
      <div className="mt-10 mb-10 flex flex-col items-center gap-4">
        <button
          onClick={() => window.open("/AlessandroGuelpa_CV.pdf", "_blank")}
          className="inline-flex items-center justify-center bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
          Scarica il CV
          <FaDownload className="mr-2 svg_custom" />
        </button>
      </div>
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="/AlessandroGuelpa_CV.pdf"
          title="CV Alessandro"
          className="w-full h-[800px]"
          style={{ border: "none" }}
        />
      </div>
    </DefaultLayout>
  );
}
