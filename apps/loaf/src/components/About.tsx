import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-heading sm:text-4xl">
            Brand new app to blow your mind
          </h2>
          <p className="mb-6 text-body">
            We bring you the freshest baked goods made with love and care. Our artisans craft every
            item using traditional recipes passed down through generations, combined with modern
            techniques for the perfect texture and flavor.
          </p>
          <p className="mb-8 text-body">
            From crusty sourdough loaves to delicate pastries, every bite is a journey through the
            art of baking. We believe in quality ingredients and honest baking — no shortcuts, just
            pure craft.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-full bg-brand px-8 py-3 text-white hover:bg-brand-dark"
          >
            Get Started Now
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/loaf-about/600/400"
            alt="Freshly baked bread on a wooden table"
            className="w-full max-w-md rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
