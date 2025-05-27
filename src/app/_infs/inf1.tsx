import Link from "next/link";

const therapeuticActions = [
  {
    action: "Antineoplásica",
    compound: "POAs (mitrafilina, isopteropodina, pteropodina)",
    mechanism:
      "Inibe crescimento de células tumorais (ex: PC-3), induz apoptose, tem seletividade por células malignas.",
  },
  {
    action: "Anti-inflamatória",
    compound: "Mitrafilina",
    mechanism:
      "Inibe citocinas inflamatórias como IL-1, IL-4, IL-17 e TNF-α. Reduz inflamação sem toxidade.",
  },
  {
    action: "Antimicrobiana",
    compound: "POAs, flavonoides, esteróides vegetais, glicosídeos",
    mechanism:
      "Inibe crescimento de bactérias como Streptococcus mutans, Staphylococcus spp., Pseudomonas aeruginosa e Candida albicans.",
  },
  {
    action: "Antioxidante",
    compound: "Compostos fenólicos",
    mechanism:
      "Elimina radicais livres, inibe superóxidos, reduz estresse oxidativo.",
  },
  {
    action: "Imunoestimulante",
    compound: "POAs",
    mechanism:
      "Aumenta produção de leucócitos, estimula resposta imune, inclusive com vacinas.",
  },
  {
    action: "Antiviral (anti-herpético)",
    compound: "Polifenóis, POAs, glicosídeos",
    mechanism: "Inibe ligação de vírus às células hospedeiras.",
  },
];

const chemicalCompounds = [
  "Alcaloides oxindólicos tetracíclicos e pentacíclicos (POAs)",
  "Flavonoides",
  "Glicosídeos de ácido quinóvico",
  "Ácidos fenólicos",
  "Proantocianidinas",
];

const variationFactors = [
  "Origem geográfica",
  "Tipo de solo (preferência por solos aluviais, arenosos ou argilosos)",
  "Clima (úmido tropical/subtropical, 17 a 25ºC, 1200 a 6000mm de chuva/ano)",
  "Altitude e estação do ano",
  "Forma de colheita, secagem e extração (ex: ultrassom preserva melhor os POAs)",
];

export default function UnhaDeGatoInfo() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Unha-de-Gato (Planta medicinal da Amazônia peruana)
      </h1>

      <p className="mb-4">
        Conhecida popularmente como “unha-de-gato” devido aos seus espinhos
        curvos, é utilizada tradicionalmente por povos indígenas. Sua casca e
        folhas são ricas em compostos bioativos com efeitos terapêuticos.
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
        Esses compostos são responsáveis pelos principais efeitos farmacológicos
        da planta.
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
          Reconhecida pela ANVISA como planta com potencial terapêutico.
        </li>
        <li>
          Usada por povos indígenas como os Asháninka há mais de 2 mil anos.
        </li>
        <li>
          Aliada potencial contra doenças como COVID-19, devido à sua ação
          imunoestimulante e antineoplásica.
        </li>
        <li>
          Pode prevenir comorbidades em pacientes imunossuprimidos.
        </li>
        <li>
          Ainda é colhida de forma extrativista, o que ameaça a biodiversidade.
        </li>
        <li>
          Necessário mais investimento em pesquisas agronômicas e padronização
          farmacêutica para garantir a eficácia e conservação da espécie.
        </li>
        <li>
          A regulamentação de fitoterápicos exige seguir normas da ANVISA,
          desde a pesquisa até a formulação final.
        </li>
      </ul>

      <p>
        <strong>Fonte:</strong>{" "}
        <Link
          href={
            "https://www.saocamilo-es.br/revista/index.php/cadernoscamilliani/article/download/597/407/"
          }
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Clique aqui...
        </Link>
      </p>
    </div>
  );
}
