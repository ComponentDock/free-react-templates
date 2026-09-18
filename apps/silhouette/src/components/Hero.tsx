import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-6xl">
            Define Your
            <br />
            Own Style
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-400">
            Discover the latest trends in fashion. Curated collections for the modern wardrobe —
            quality, comfort, and timeless elegance.
          </p>
          <Button className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark">
            Shop Now
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/silhouette-hero/600/700"
            alt="Fashion model wearing contemporary apparel"
            className="rounded-2xl object-cover shadow-2xl"
            width={600}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}
