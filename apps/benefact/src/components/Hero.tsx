import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { heroSlides, heroHeadline } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {heroSlides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="box-92819 max-w-[700px] text-center">
          <h1 className="font-script text-5xl font-black leading-tight text-white md:text-7xl">
            {heroHeadline}
          </h1>
          <div className="mt-8">
            <ButtonLink
              href="#donate"
              className="rounded-none bg-primary px-8 py-4 text-base text-white hover:bg-primary-700"
            >
              Donate Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
