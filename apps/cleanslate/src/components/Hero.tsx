import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] flex items-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/cleanslate-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl">
          <p className="text-brand-accent text-lg mb-2 font-medium">
            Leave the house cleaning chores to us
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let us do the dirty work, so you don&apos;t have to.
          </h1>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand-primary text-white py-3 px-6 rounded hover:bg-brand-primary-dark transition-colors font-medium"
          >
            Learn more <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
