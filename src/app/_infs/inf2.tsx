import Link from "next/link";

const taxonomia = [
  { label: "Reino", value: "Plantae" },
  { label: "Ordem", value: "Scrophulariales" },
  { label: "Família", value: "Scrophulariaceae" },
  { label: "Género", value: "Veronica" },
  { label: "Espécie", value: "V. officinalis" },
];

const ocorrencia = [
  "Ocorre em diversas áreas, principalmente em regiões de clima subtropical, temperado e mediterrânico.",
  "Pode ser encontrada em jardins, pomares, hortas e terrenos baldios, sendo considerada uma planta daninha em algumas áreas.",
  "Em áreas montanhosas acima de 900m de altitude, também pode ser encontrada, especialmente em solos litólicos associados a afloramentos de quartzito, arenito ou minérios de ferro e manganês, geralmente em regiões de Cerrado e Caatinga.",
];

const principiosAtivos = [
  "Flavonoides (propriedades antioxidantes e anti-inflamatórias)",
  "Óleos voláteis (carvona, geranil, mentona, isomentona e cariofileno)",
  "Saponinas (efeito expectorante e antisséptico)",
  "Ácidos orgânicos",
  "Polissacarídeos",
  "Betacaroteno",
];

const efeitos = [
  "Expectorante, tônica e diurética",
  "Recomendada para tratar tosse, catarro e problemas cutâneos, hepáticos e renais",
  "Sua ação é considerada leve",
];

const curiosidades = [
  "É tida como uma das primeiras plantas medicinais que se tem notícia e passou a ser conhecida como a “erva dos leprosos”.",
  "A procura por remédios naturais à base de flores, como a verônica, no Sistema Único de Saúde (SUS) tem mostrado crescimento contínuo desde os dados divulgados em 2016, que apontavam um aumento de mais de 160% em dois anos.",
  "Atualmente, o Ministério da Saúde está intensificando esforços para expandir o uso de fitoterápicos e plantas medicinais na rede pública de saúde.",
];

export default function VeronicaOfficinalisInfo() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Verônica (<i>Veronica officinalis</i>)
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Taxonomia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {taxonomia.map((item) => (
            <div
              key={item.label}
              className="border rounded-lg p-3 bg-white shadow-sm"
            >
              <strong>{item.label}:</strong> {item.value}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Áreas de ocorrência</h2>
        <ul className="list-disc list-inside space-y-1">
          {ocorrencia.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Principais princípios ativos
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {principiosAtivos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-2">
          Estes compostos contribuem para as propriedades medicinais da planta,
          como efeito calmante, anti-inflamatório, cicatrizante e anti-reumático.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Efeitos no organismo</h2>
        <ul className="list-disc list-inside space-y-1">
          {efeitos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Curiosidades</h2>
        <ul className="list-disc list-inside space-y-1">
          {curiosidades.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p>
        <strong>Fontes:</strong>{" "}
        <Link
          href="https://www.unisantos.br/wp-content/uploads/2014/02/farmacia-verde-livro.pdf"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Fonte 1
        </Link>{" "}
        |{" "}
        <Link
          href="http://www.biorede.pt/page.asp?id=2520"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Fonte 2
        </Link>{" "}
        |{" "}
        <Link
          href="https://www.agro20.com.br/veronica/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Fonte 3
        </Link>
      </p>
    </div>
  );
}
