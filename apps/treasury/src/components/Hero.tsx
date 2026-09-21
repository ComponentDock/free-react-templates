import { useEffect, useState } from 'react'

const headings = ['Banking Solutions', 'Financing Solutions', 'Savings Accounts'] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/treasury-hero/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl font-bold uppercase tracking-wide md:text-6xl">
          {headings[index]}
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Trusted financial partner for your business growth
        </p>
        <a
          href="#features"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
