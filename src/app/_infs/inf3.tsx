import Link from "next/link";

const chemicalCompounds = [
  "Compostos fenólicos (polifenóis)",
  "Alcaloides",
  "Barbatusina",
  "Forscolina",
];

const therapeuticActions = [
  {
    action: "Antioxidante",
    compound: "Barbatusina, forscolina, polifenóis",
    mechanism:
      "Combate radicais livres, reduz danos celulares e retarda o envelhecimento precoce.",
  },
  {
    action: "Prevenção de doenças",
    compound: "Compostos fenólicos e alcaloides",
    mechanism:
      "Ajuda a prevenir doenças relacionadas ao excesso de radicais livres, como Alzheimer, aterosclerose e câncer.",
  },
];

const taxonomicLevel = [
  "Reino: Plantae",
  "Classe: Magnoliopsida",
  "Ordem: Lamiales",
  "Família: Lamiaceae (Labiadas)",
  "Gênero: Plectranthus",
];

const otherUses = [
  "Aromatizante em bebidas alcoólicas",
  "Em algumas culturas, utilizado como papel higiênico (relatos em áreas rurais do Quênia)",
];

export default function BoldoInfo() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Boldo (<i>Plectranthus spp.</i>)
      </h1>
      <p className="mb-6">
        O boldo pode ser consumido na forma de cápsulas, chás, sucos ou
        tinturas, utilizando as folhas frescas da planta.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Compostos químicos principais
      </h2>
      <ul className="list-disc list-inside mb-4">
        {chemicalCompounds.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="mb-6">
        Esses compostos são responsáveis pelos principais efeitos terapêuticos e
        farmacológicos da planta.
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
                <td className="border border-gray-300 p-2">
                  {item.compound}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.mechanism}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-2">Nível taxonômico</h2>
      <ul className="list-disc list-inside mb-6">
        {taxonomicLevel.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Usos além da medicina</h2>
      <ul className="list-disc list-inside mb-6">
        {otherUses.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>

      <p>
        <strong>Fontes:</strong>{" "}
        <Link
          href="https://canaltech.com.br/saude/folha-de-boldo-e-alternativa-sustentavel-ao-papel-higienico-286631/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Canaltech
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.tuasaude.com/beneficios-do-cha-de-boldo/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Tua Saúde
        </Link>
      </p>
    </div>
  );
}
