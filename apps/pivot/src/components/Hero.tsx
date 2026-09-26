import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/pivot-hero1/1200/800',
    headline: "I'm a developer from Berlin.",
  },
  {
    image: 'https://picsum.photos/seed/pivot-hero2/1200/800',
    headline: "I'm a Digital Product Designer & Art Director.",
  },
]

const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Dribbble', href: '#' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen">
      {/* Social media sidebar */}
      <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-12">
        <ul className="flex flex-col gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-light text-ink/70 transition-colors hover:text-primary-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Background image */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {/* Text overlay */}
      <div className="relative z-10 flex items-center bg-surface/90 px-8 md:ml-auto md:w-1/3 md:px-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-light leading-tight text-ink md:text-4xl">
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            {SLIDES[current]!.headline}
          </h1>
          <a
            href="#work"
            className="inline-flex items-center gap-2 border-2 border-primary-400 bg-primary-400 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-primary-500 hover:border-primary-500"
          >
            Hire me now <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
