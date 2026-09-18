import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/stitchly-about/600/500"
              alt="Tailor working at the studio"
              className="w-full rounded-none object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl dark:text-white">
              About our tailor house
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist">
              We bring years of craftsmanship and passion to every stitch. Our experienced tailors
              blend traditional techniques with modern precision to create garments that look and
              feel extraordinary.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              Whether you need a bespoke suit, a perfect alteration, or a complete wardrobe refresh,
              we are dedicated to delivering quality that exceeds expectations.
            </p>
            <ButtonLink
              href="#contact"
              className="mt-8 inline-flex rounded-none bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
            >
              More About Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
