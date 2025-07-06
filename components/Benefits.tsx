import { ClockIcon, CurrencyDollarIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const benefits = [
  {
    icon: ClockIcon,
    title: "Až 20 hodin týdně navíc",
    description: "Pro strategické projekty, rozvoj byznysu a osobní život",
    highlight: "20 hodin",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Ušetříte až 70% nákladů",
    description: "Žádné náklady na zaměstnance, kancelář, vybavení nebo benefity",
    highlight: "70% úspora",
    image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    icon: ChartBarIcon,
    title: "Okamžitá škálovatelnost",
    description: "Od 5 hodin měsíčně po full-time podle vašich potřeb",
    highlight: "Flexibilita",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  },
  {
    icon: GlobeAltIcon,
    title: "24/7 pokrytí",
    description: "Různá časová pásma zajistí nepřetržitou podporu vašeho byznysu",
    highlight: "Non-stop",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Happy businessman" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-blue-600/80"></div>
          </div>
          
          <div className="relative">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Představte si, že máte najednou čas na to, co vás baví
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Zatímco váš virtuální asistent řeší rutinu, vy se můžete soustředit na růst a strategii
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">✨ Více času na rodinu</span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">🚀 Rychlejší růst byznysu</span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">😌 Méně stresu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}