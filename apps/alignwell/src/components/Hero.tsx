import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/alignwell-hero1/1600/900',
    title: 'Welcome to our chiropractic centre',
    description:
      'Professional spinal care and wellness treatments to help you live pain-free. Our experienced team is dedicated to your health.',
  },
  {
    image: 'https://picsum.photos/seed/alignwell-hero2/1600/900',
    title: 'Chiropractic care for the whole family',
    description:
      'From children to seniors, we provide gentle and effective chiropractic treatments tailored to every age group.',
  },
] as const

export function Hero() {
  return (
    <section id="home" className="relative bg-ink">
      <div className="relative h-[600px] overflow-hidden md:h-[700px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-end px-4 sm:px-6">
          <div className="w-full max-w-lg text-right text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{slides[0].title}</h1>
            <p className="mt-4 text-lg text-gray-200">{slides[0].description}</p>
            <div className="mt-6">
              <ButtonLink
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3 font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
