import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    quote: "Díky VA jsem zdvojnásobil tržby za 6 měsíců",
    author: "Majitel e-shopu",
    details: "Virtuální asistent mi vyřídil všechnu zákaznickou podporu a administrativu. Mohl jsem se konečně soustředit na marketing a rozvoj produktů.",
    rating: 5,
    results: "2x vyšší tržby"
  },
  {
    quote: "Konečně mám čas na rodinu a byznys roste",
    author: "Freelancer",
    details: "Předtím jsem pracoval 12 hodin denně. Teď mám čas na děti a přitom vydělávám víc než kdy předtím.",
    rating: 5,
    results: "50% více volného času"
  },
  {
    quote: "Nejlepší investice do mého podnikání",
    author: "Startup founder",
    details: "VA mi pomohl s fundraisingem, prezentacemi a komunikací s investory. Bez něj bych to nezvládl.",
    rating: 5,
    results: "Úspěšný fundraising"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl font-bold text-gray-900 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.details}
              </p>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-600">Průměrné hodnocení</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Spokojených klientů</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}