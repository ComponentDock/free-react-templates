import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const slides = [
  { heading: 'Banking Solutions', sub: 'Comprehensive financial services for your growth.' },
  { heading: 'Financing Solutions', sub: 'Flexible loans and credit options.' },
  { heading: 'Savings Accounts', sub: 'Grow your wealth with competitive rates.' },
]

function scrollToNext() {
  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/banknote-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
        <h1 className="mb-4 text-4xl font-black uppercase leading-tight md:text-5xl lg:text-7xl">
          {slides[current]?.heading}
        </h1>
        <p className="mb-8 text-lg text-gray-300">{slides[current]?.sub}</p>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-brand"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </button>
    </section>
  )
}
