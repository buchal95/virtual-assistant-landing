import { ClockIcon, ExclamationTriangleIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const painPoints = [
  {
    icon: ClockIcon,
    title: "Ztrácíte 3+ hodiny denně",
    description: "E-maily, administrativa a rutinní úkoly vás zbavují času na důležité věci",
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Klienti čekají na odpovědi",
    description: "Zatímco vy řešíte rutinu, důležití klienti ztrácejí trpělivost",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    icon: ChartBarIcon,
    title: "Pomalý růst byznysu",
    description: "Nemůžete se soustředit na strategii a rozvoj, protože všechno děláte sami",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Vysoké náklady",
    description: "Přeplácíte za kancelář a zaměstnance na plný úvazek, které nepotřebujete 24/7",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  }
]

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Stressed businessman" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={index} className={`${point.bgColor} ${point.borderColor} border-2 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm`}>
              <div className={`w-16 h-16 ${point.color} mb-6 mx-auto`}>
                <point.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {point.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-200 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-4xl mb-4">😰</div>
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