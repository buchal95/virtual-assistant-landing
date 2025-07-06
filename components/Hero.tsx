'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 lg:opacity-30">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/50 to-blue-900"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium">Více než 500 spokojených klientů</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Získejte zpět
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              20+ hodin týdně
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl leading-relaxed">
            Virtuální asistenti, kteří vám vyřeší administrativu, e-maily a rutinní úkoly. 
            Ušetříte až 70% nákladů oproti zaměstnanci na plný úvazek.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
            <button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
            >
              Získat ZDARMA konzultaci
            </button>
            
            <div className="flex items-center text-blue-200 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm">⚡ Odpovíme do 2 hodin</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              500+ spokojených klientů
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Průměrné hodnocení 4.9/5
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Garance spokojenosti
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-6 h-6 text-blue-300" />
        </div>
      </div>
    </section>
  )
}