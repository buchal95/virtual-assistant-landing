'use client'

import ContactForm from './ContactForm'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Připraveni získat zpět svůj čas?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Začněte ještě dnes a uvidíte první výsledky už za 48 hodin
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Rychlý start</h3>
              <p className="text-blue-200">Začneme během 24 hodin</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Bez závazků</h3>
              <p className="text-blue-200">Můžete kdykoli ukončit</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Garantované výsledky</h3>
              <p className="text-blue-200">Nebo vrátíme peníze</p>
            </div>
          </div>
        </div>
        
        <ContactForm />
        
        <div className="text-center mt-12">
          <p className="text-blue-200 text-sm">
            ⚡ Odpovíme do 2 hodin • 🔒 Vaše data jsou v bezpečí • 📞 Zdarma konzultace
          </p>
        </div>
      </div>
    </section>
  )
}