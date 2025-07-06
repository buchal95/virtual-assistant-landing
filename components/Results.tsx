import { CheckCircleIcon } from '@heroicons/react/24/solid'

const results = [
  {
    icon: "⚡",
    title: "E-maily zodpovězené do 2 hodin",
    subtitle: "(ne 2 dnů)",
    description: "Rychlá komunikace = spokojení klienti"
  },
  {
    icon: "📈",
    title: "30% nárůst produktivity",
    subtitle: "už první měsíc",
    description: "Měřitelné výsledky od prvního dne"
  },
  {
    icon: "✅",
    title: "150+ úkolů vyřízených",
    subtitle: "za vás měsíčně",
    description: "Od administrativy po zákaznickou podporu"
  },
  {
    icon: "💰",
    title: "0 Kč náklady navíc",
    subtitle: "na vybavení a školení",
    description: "Žádné skryté poplatky nebo dodatečné náklady"
  }
]

export default function Results() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Konkrétní výsledky, které uvidíte
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nejsou to jen sliby - toto jsou reálné výsledky našich klientů
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {result.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {result.title}
              </h3>
              <p className="text-yellow-400 font-semibold mb-4 text-lg">
                {result.subtitle}
              </p>
              <p className="text-gray-300">
                {result.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircleIcon className="w-16 h-16 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Garance spokojenosti
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pokud nebudete spokojeni s našimi službami během prvních 30 dnů, 
            vrátíme vám peníze bez ptaní
          </p>
          <div className="text-lg font-semibold bg-white/20 inline-block px-6 py-3 rounded-full">
            30denní záruka vrácení peněz
          </div>
        </div>
      </div>
    </section>
  )
}