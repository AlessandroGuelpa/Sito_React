import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import { Helmet } from 'react-helmet';

export default function DocsPage() {
  const [code, setCode] = useState('// esempio: console.log("ciao mondo");\n');
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("");
    const logger: unknown[] = [];
    const originalLog = console.log;

    console.log = function (...args) {
      args.forEach((arg) => {
        logger.push(arg + " ");
      });
      logger.push("\n");
      originalLog.apply(console, args);
    };

    try {
      new Function(code)();
      setOutput(logger.length > 0 ? logger.join("") : "Eseguito senza output");
    } catch (e) {
  if (e instanceof Error) {
    setOutput("Errore: " + e.message);
  } else {
    setOutput("Errore sconosciuto: " + String(e));
  }
}

    console.log = originalLog;
  };
    const pageUrl = "https://alessandroguelpa.it/javascript-compiler";
  return (
    <DefaultLayout>
        <Helmet>
        <title>Javascript Compiler | Alessandro Guelpa</title>
        <meta name="description" content="Prova il compilatore JavaScript online: scrivi, esegui e testa il tuo codice JS direttamente nel browser. Ideale per snippet rapidi, debug e apprendimento | Alessandro Guelpa" />
            <link rel="canonical" href={pageUrl} />

        {/* Tag Open Graph (per i social) */}
        <meta property="og:title" content="Javascript Compiler | Alessandro Guelpa" />
        <meta property="og:description" content="Prova il compilatore JavaScript online: scrivi, esegui e testa il tuo codice JS direttamente nel browser. Ideale per snippet rapidi, debug e apprendimento | Alessandro Guelpa" />
        <meta property="og:url" content={pageUrl} />
      </Helmet>
      <h1 className="text-4xl text-violet-600 dark:text-violet-500 font-bold text-center mb-6">
        Javascript Compiler!
      </h1>

      <div className="text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
        <textarea
          rows={10}
          cols={50}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="block w-full font-mono p-4 border-solid border-1 rounded-sm"
        />
        <button onClick={runCode} className="mt-2 px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700">
          Esegui
        </button>
        <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded whitespace-pre-wrap">
          {output}
        </pre>
      </div>
    </DefaultLayout>
  );
}
