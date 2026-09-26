import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://picsum.photos/seed/forger-hero/1920/1080')" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="mb-4 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
            Hello
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            I&apos;m <span className="text-brand">Alex Forger</span>
          </h1>
          <h2 className="mt-3 text-xl text-gray-300 sm:text-2xl">A Freelance Web Developer</h2>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Hire me
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
