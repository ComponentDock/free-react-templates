import { Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-warm-gray py-16 text-center">
      <div className="mx-auto max-w-[1170px] px-4">
        <h1 className="font-heading text-3xl leading-tight font-bold text-charcoal md:text-4xl">
          Handpicked <span className="font-bold">design resources</span> crafted with much{' '}
          <Heart className="inline h-5 w-5 fill-rose-accent text-rose-accent" aria-label="love" />{' '}
          and care for every detail
        </h1>
        <p className="mt-4 text-base text-muted">free downloads only on fridays</p>
      </div>
    </section>
  )
}
