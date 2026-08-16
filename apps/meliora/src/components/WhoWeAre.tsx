import { aboutImage } from '../data'

export function WhoWeAre() {
  return (
    <section id="about" aria-label="Who we are" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div>
          <img
            src={aboutImage.src}
            alt={aboutImage.alt}
            className="w-full rounded-[10px] object-cover shadow-lg"
          />
        </div>
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-kicker">
            About Us
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-plum md:text-[46px]">
            Who we are?
          </h2>
          <p className="mt-6 text-muted">
            Meliora is a charitable organization dedicated to improving lives through sustainable
            programs in food, health, education and shelter. We believe every person deserves a fair
            start in life and the opportunity to learn, grow and thrive.
          </p>
          <p className="mt-4 text-muted">
            Since our founding, we have worked hand-in-hand with local communities and volunteers to
            deliver help where it is needed most — transparently, efficiently and with respect.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block rounded-full bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
