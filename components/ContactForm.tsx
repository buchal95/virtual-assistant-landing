'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    hoursNeeded: '5-10'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div id="contact-form" className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-gray-200">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Děkujeme za váš zájem!
        </h3>
        <p className="text-xl text-gray-600 mb-6">
          Ozveme se vám do 2 hodin s návrhem řešení přesně pro vaše potřeby.
        </p>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
          <p className="text-emerald-800 font-semibold">
            ✅ Vaše zpráva byla úspěšně odeslána
          </p>
          <p className="text-emerald-700 mt-2">
            Připravte si seznam úkolů, které byste chtěli delegovat
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="contact-form" className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">💬</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Získejte ZDARMA konzultaci
        </h3>
        <p className="text-gray-600 text-lg">
          Vyplňte formulář a my vám do 2 hodin pošleme návrh řešení přesně pro vaše potřeby
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Jméno a příjmení *
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white"
                placeholder="Jan Novák"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail *
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white"
                placeholder="jan@example.com"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Telefon
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white"
                placeholder="+420 123 456 789"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Společnost
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white"
              placeholder="Název společnosti"
            />
          </div>
        </div>

        <div>
          <label htmlFor="hoursNeeded" className="block text-sm font-semibold text-gray-700 mb-2">
            Kolik hodin podpory měsíčně potřebujete?
          </label>
          <select
            id="hoursNeeded"
            name="hoursNeeded"
            value={formData.hoursNeeded}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white"
          >
            <option value="5-10">5-10 hodin měsíčně</option>
            <option value="10-20">10-20 hodin měsíčně</option>
            <option value="20-40">20-40 hodin měsíčně</option>
            <option value="40+">40+ hodin měsíčně (part-time)</option>
            <option value="full-time">Full-time (160+ hodin)</option>
            <option value="not-sure">Nejsem si jistý</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Popište vaše potřeby
          </label>
          <div className="relative">
            <ChatBubbleLeftRightIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
              placeholder="Jaké úkoly byste chtěli delegovat? (e-maily, administrativa, zákaznická podpora, research...)"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Odesílám...
            </span>
          ) : (
            'Získat ZDARMA konzultaci'
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          * Povinné údaje. Vaše data jsou chráněna a nebudou sdílena s třetími stranami.
        </p>
      </form>
    </div>
  )
}