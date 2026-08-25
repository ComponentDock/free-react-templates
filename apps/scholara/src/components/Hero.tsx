import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat md:min-h-[600px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/scholara-hero/1600/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
          Education &amp; School
        </p>
        <h1 className="mb-6 max-w-2xl text-4xl font-black uppercase leading-tight text-white md:text-5xl lg:text-6xl">
          Showcase Courses, Events and More!
        </h1>
        <p className="mb-8 max-w-xl text-lg text-white/80">
          Discover world-class education programs designed to empower the next generation of
          leaders. Our university offers cutting-edge courses across multiple disciplines.
        </p>
        <ButtonLink
          href="#"
          variant="primary"
          className="inline-block bg-brand px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Get Started Now
        </ButtonLink>
      </div>
    </section>
  )
}
