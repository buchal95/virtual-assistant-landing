import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    quote: "Díky VA jsem zdvojnásobil tržby za 6 měsíců",
    author: "Majitel e-shopu",
    details: "Virtuální asistent mi vyřídil všechnu zákaznickou podporu a administrativu. Mohl jsem se konečně soustředit na marketing a rozvoj produktů.",
    rating: 5,
    results: "2x vyšší tržby",
    avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
  },
  {
    quote: "Konečně mám čas na rodinu a byznys roste",
    author: "Podnikatel",
    details: "Předtím jsem pracoval 12 hodin denně. Teď mám čas na děti a přitom vydělávám víc než kdy předtím.",
    rating: 5,
    results: "50% více volného času",
    avatar: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
  },
  {
    quote: "Nejlepší investice do mého podnikání",
    author: "Startup founder",
    details: "VA mi pomohl s fundraisingem, prezentacemi a komunikací s investory. Bez něj bych to nezvládl.",
    rating: 5,
    results: "Úspěšný fundraising",
    avatar: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Co říkají naši klienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reálné příběhy úspěchu od lidí, kteří změnili svůj byznys
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 min-h-[400px] flex flex-col">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl font-bold text-gray-900 mb-6 flex-shrink-0">
                "{testimonial.quote}"
              </blockquote>
              
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {testimonial.details}
              </p>
              
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200 flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 text-center">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <div className="text-left ml-2">
                <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                <p className="text-gray-600 text-sm">Průměrné hodnocení</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600 text-sm">Spokojených klientů</p>
            </div>
            
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-emerald-200 flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2" 
                alt="Happy clients" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}