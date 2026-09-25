import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/lens-hero/1920/1080')",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold uppercase text-white md:text-7xl">Welcome</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore animi accusantium
          voluptatum saepe. Natus nihil, facere corporis numquam, architecto dolorum.
        </p>
        <ButtonLink
          href="#contact"
          className="rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-brand-hover"
        >
          Contact Me
        </ButtonLink>
      </div>
    </section>
  )
}
