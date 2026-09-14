import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/sudsy-about/700/500"
              alt="Car wash equipment and workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-lg bg-brand/20 lg:block" />
          </div>
          <div className="relative -ml-0 rounded-lg bg-white p-8 shadow-lg lg:-ml-12 lg:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              About Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink">
              We have the latest equipment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist">
              Our state-of-the-art facility is equipped with the latest car wash and detailing
              technology. From high-pressure water systems to premium wax coatings, we use only the
              best tools to ensure your vehicle looks showroom-new every time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              With years of experience and a passion for perfection, our team of professionals
              treats every vehicle with the care it deserves.
            </p>
            <ButtonLink
              href="#contact"
              className="mt-6 inline-flex rounded-[30px] bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark"
            >
              About Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
