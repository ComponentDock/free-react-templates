import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          {/* Left column */}
          <div>
            <span className="font-serif text-sm font-semibold uppercase text-gold-400">
              About Us
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-dark">Hair Salon</h2>
            <p className="mt-2 text-muted">The House of Hair Salon &amp; Spa</p>
          </div>

          {/* Middle column — image */}
          <div>
            <img
              src="https://picsum.photos/seed/shearglow-about/600/400"
              alt="ShearGlow salon interior"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Right column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-dark">
              Beautiful Hair Comes From A Legendary.
            </h3>
            <p className="mt-4 text-muted">
              Our skilled stylists combine artistry with premium products to deliver a look
              that&apos;s uniquely yours. From precision cuts to vibrant color, we bring your vision
              to life.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="mt-6 rounded-sm border-dark font-serif uppercase hover:border-gold-400 hover:bg-gold-400 hover:text-white"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
