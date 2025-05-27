import Link from "next/link";

const chemicalCompounds = [
  "Antocianinas (flavonoides responsáveis pela cor roxa-escura e propriedades antioxidantes)",
  "Polifenóis",
  "Outros flavonoides",
];

const therapeuticActions = [
  {
    action: "Antioxidante",
    compound: "Antocianinas, polifenóis",
    mechanism:
      "Neutralizam radicais livres, protegendo as células contra danos oxidativos.",
  },
  {
    action: "Anti-inflamatória",
    compound: "Polifenóis, flavonoides",
    mechanism:
      "Reduzem a produção de mediadores inflamatórios, auxiliando na prevenção de doenças crônicas.",
  },
  {
    action: "Cardioprotetora",
    compound: "Antocianinas",
    mechanism:
      "Contribuem para a saúde cardiovascular ao melhorar o perfil lipídico e reduzir o estresse oxidativo.",
  },
];

const variationFactors = [
  "Origem geográfica",
  "Tipo de solo e clima da região amazônica",
  "Método de colheita e processamento do fruto",
];

export default function AcaiInfo() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Açaí (<i>Euterpe oleracea</i>)
      </h1>

      <p className="mb-4">
        O açaí é uma palmeira nativa da Amazônia cujo fruto roxo-escuro é
        amplamente utilizado na alimentação e conhecido por seu alto teor de
        antioxidantes.
      </p>

      <h2 className="text-xl font-semibold mb-2">Classificação botânica</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Reino:</strong> Plantae</li>
        <li><strong>Divisão:</strong> Magnoliophyta</li>
        <li><strong>Classe:</strong> Liliopsida</li>
        <li><strong>Ordem:</strong> Arecales</li>
        <li><strong>Família:</strong> Arecaceae</li>
        <li><strong>Gênero:</strong> Euterpe</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Compostos químicos principais</h2>
      <ul className="list-disc list-inside mb-4">
        {chemicalCompounds.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="mb-6">
        Esses compostos conferem ao açaí seu potencial terapêutico e funcional.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ações terapêuticas</h2>

      {/* Mobile: Cards */}
      <div className="space-y-4 sm:hidden">
        {therapeuticActions.map((item) => (
          <div
            key={item.action}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p>
              <span className="font-semibold">Ação:</span> {item.action}
            </p>
            <p>
              <span className="font-semibold">Composto:</span> {item.compound}
            </p>
            <p>
              <span className="font-semibold">Mecanismo:</span>{" "}
              {item.mechanism}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: Tabela */}
      <div className="hidden sm:block overflow-x-auto mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">Ação</th>
              <th className="border border-gray-300 p-2">
                Composto responsável
              </th>
              <th className="border border-gray-300 p-2">Como age no corpo</th>
            </tr>
          </thead>
          <tbody>
            {therapeuticActions.map((item) => (
              <tr key={item.action}>
                <td className="border border-gray-300 p-2">{item.action}</td>
                <td className="border border-gray-300 p-2">{item.compound}</td>
                <td className="border border-gray-300 p-2">
                  {item.mechanism}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-2">
        Fatores que influenciam a composição química
      </h2>
      <ul className="list-disc list-inside mb-6">
        {variationFactors.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Curiosidades e contexto</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          As folhas e troncos do açaizeiro são usados na construção e no
          artesanato.
        </li>
        <li>
          O fruto é consumido na forma de polpa, sucos e bebidas energéticas.
        </li>
        <li>
          É considerado um alimento funcional por seu alto teor de antioxidantes.
        </li>
      </ul>

      <p>
        <strong>Fontes:</strong>{" "}
        <Link
          href="https://pt.wikipedia.org/wiki/A%C3%A7a%C3%AD"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Wikipedia
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.tuasaude.com/beneficios-do-cha-de-boldo/#:~:text=O%20boldo%20%C3%A9%20rico%20em,reduzindo%20os%20danos%20nas%20c%C3%A9lulas."
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Tua Saúde
        </Link>
      </p>
    </div>
  );
}
