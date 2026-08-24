import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/havenridge-hero-1/1200/600',
    heading: 'Find Your Dream Home',
    description:
      'Discover a wide range of properties that match your lifestyle and budget. Your perfect home is just a click away.',
  },
  {
    image: 'https://picsum.photos/seed/havenridge-hero-2/1200/600',
    heading: 'Premium Properties For You',
    description:
      'Explore luxury homes, apartments, and commercial spaces in the most sought-after locations.',
  },
  {
    image: 'https://picsum.photos/seed/havenridge-hero-3/1200/600',
    heading: 'Your Trusted Real Estate Partner',
    description:
      'With decades of experience, we help you navigate the real estate market with confidence.',
  },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]!

  return (
    <section
      id="home"
      className="relative flex h-[600px] items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.heading}
          className="h-full w-full object-cover opacity-60 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h2 className="mb-4 text-4xl font-extrabold sm:text-5xl">{slide.heading}</h2>
        <p className="mb-8 text-lg text-gray-200">{slide.description}</p>
        <ButtonLink
          href="#about"
          className="inline-flex rounded bg-primary-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
