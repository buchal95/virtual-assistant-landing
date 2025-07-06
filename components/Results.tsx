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
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Business success" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
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
        
        <div className="relative bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Guarantee" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
          </div>
          
          <div className="relative">
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
            <div className="text-lg font-semibold bg-white/20 backdrop-blur-sm inline-block px-6 py-3 rounded-full border border-white/30">
              30denní záruka vrácení peněz
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}