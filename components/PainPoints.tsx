import { ClockIcon, ExclamationTriangleIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const painPoints = [
  {
    icon: ClockIcon,
    title: "Ztrácíte 3+ hodiny denně",
    description: "E-maily, administrativa a rutinní úkoly vás zbavují času na důležité věci",
    color: "text-red-500"
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Klienti čekají na odpovědi",
    description: "Zatímco vy řešíte rutinu, důležití klienti ztrácejí trpělivost",
    color: "text-orange-500"
  },
  {
    icon: ChartBarIcon,
    title: "Pomalý růst byznysu",
    description: "Nemůžete se soustředit na strategii a rozvoj, protože všechno děláte sami",
    color: "text-yellow-500"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Vysoké náklady",
    description: "Přeplácíte za kancelář a zaměstnance na plný úvazek, které nepotřebujete 24/7",
    color: "text-red-600"
  }
]

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Poznáváte se v těchto problémech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Většina podnikatelů a freelancerů se potýká s těmito výzvami každý den
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${point.color} mb-6 mx-auto`}>
                <point.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {point.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-red-100 border border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Výsledek? Vyhoření a stagnace byznysu
            </h3>
            <p className="text-red-700 text-lg">
              Ale co kdyby existovalo řešení, které vám vrátí čas a ušetří peníze?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}