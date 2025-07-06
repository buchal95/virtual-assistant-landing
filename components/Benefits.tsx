import { ClockIcon, CurrencyDollarIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    icon: ClockIcon,
    title: "Až 20 hodin týdně navíc",
    description: "Pro strategické projekty, rozvoj byznysu a osobní život",
    highlight: "20 hodin"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Ušetříte až 70% nákladů",
    description: "Žádné náklady na zaměstnance, kancelář, vybavení nebo benefity",
    highlight: "70% úspora"
  },
  {
    icon: ChartBarIcon,
    title: "Okamžitá škálovatelnost",
    description: "Od 5 hodin měsíčně po full-time podle vašich potřeb",
    highlight: "Flexibilita"
  },
  {
    icon: GlobeAltIcon,
    title: "24/7 pokrytí",
    description: "Různá časová pásma zajistí nepřetržitou podporu vašeho byznysu",
    highlight: "Non-stop"
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Co získáte s našimi
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> virtuálními asistenty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionální podpora bez starostí a vysokých nákladů
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Představte si, že máte najednou čas na to, co vás baví
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Zatímco váš virtuální asistent řeší rutinu, vy se můžete soustředit na růst a strategii
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <span className="bg-white/20 px-4 py-2 rounded-full">✨ Více času na rodinu</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🚀 Rychlejší růst byznysu</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">😌 Méně stresu</span>
          </div>
        </div>
      </div>
    </section>
  )
}