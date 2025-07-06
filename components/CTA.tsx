'use client'

import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Success and growth" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Připraveni získat zpět svůj čas?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Začněte ještě dnes a uvidíte první výsledky už za 48 hodin
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Rychlý start</h3>
              <p className="text-gray-300">Začneme během 24 hodin</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Bez závazků</h3>
              <p className="text-gray-300">Můžete kdykoli ukončit</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Garantované výsledky</h3>
              <p className="text-gray-300">Nebo vrátíme peníze</p>
            </div>
          </div>
        </div>
        
        <ContactForm />
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <span className="text-gray-300 text-sm">⚡ Odpovíme do 2 hodin</span>
            <span className="text-gray-300 text-sm">🔒 Vaše data jsou v bezpečí</span>
            <span className="text-gray-300 text-sm">📞 Zdarma konzultace</span>
          </div>
        </div>
      </div>
    </section>
  )
}