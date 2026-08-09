import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gearly-hero/1920/900')" }}
    >
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Best options for you
        </p>
        <h1 className="mt-4 font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-6xl">
          Drive safe &amp; get license
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
          Join our driving school and learn to drive with certified instructors, flexible schedules,
          and modern cars built for every level.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#contact" className="px-8 uppercase">
            Contact us
          </ButtonLink>
          <ButtonLink
            href="#courses"
            variant="outline"
            className="border-white/60 bg-transparent px-8 text-white hover:bg-white/10 dark:border-white/60 dark:text-white dark:hover:bg-white/10"
          >
            See Courses
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
