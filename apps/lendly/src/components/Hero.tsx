import { useEffect, useState, type FormEvent } from 'react'
import { hero, heroSlides } from '../data'

export function Hero() {
  const [slide, setSlide] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pb-24 pt-44">
      {heroSlides.map((slideData, index) => (
        <div
          key={slideData.image}
          role="group"
          aria-label={`Slide ${index + 1}`}
          aria-hidden={index !== slide}
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${slideData.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/50" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1176px] gap-12 px-4 lg:grid-cols-2">
        <div className="pt-6 pr-2">
          <h2 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[60px]">
            {hero.headline}
          </h2>
          <p className="mb-8 text-white">{hero.paragraph}</p>
          <a
            href={hero.cta.href}
            className="inline-block min-w-[188px] rounded-full bg-ink px-9 py-6 text-center text-sm font-semibold uppercase text-white transition-colors hover:bg-graphite"
          >
            {hero.cta.label}
          </a>
        </div>
        {submitted ? (
          <div role="status" className="bg-ink p-10 text-white">
            <p className="text-lg font-semibold">{hero.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-ink px-10 py-14">
            <input
              type="text"
              placeholder={hero.form.namePlaceholder}
              className="mb-7 h-[49px] w-full bg-white px-6 text-sm italic text-inputtext"
            />
            <input
              type="text"
              placeholder={hero.form.emailPlaceholder}
              className="mb-7 h-[49px] w-full bg-white px-6 text-sm italic text-inputtext"
            />
            <input
              type="text"
              placeholder={hero.form.phonePlaceholder}
              className="mb-7 h-[49px] w-full bg-white px-6 text-sm italic text-inputtext"
            />
            <p className="mb-6 text-[11px] italic text-muted">{hero.form.disclaimer}</p>
            <button
              type="submit"
              className="w-full min-w-[188px] rounded-full bg-brand px-9 py-6 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand/90"
            >
              {hero.form.submitLabel}
            </button>
          </form>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setSlide(index)}
            className={`h-2 w-2 rounded-full ${index === slide ? 'bg-brand' : 'bg-white'}`}
          />
        ))}
      </div>
    </section>
  )
}
