import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[560px] items-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/pose-hero/1600/900')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 text-center lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-200">
          Welcome to
        </p>
        <h1 className="font-display text-6xl font-extrabold uppercase tracking-tight text-white sm:text-7xl">
          Pose
        </h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-200">
          A Professional Model Agency
        </p>
        <ButtonLink
          href="#appointment"
          className="mt-10 rounded-full bg-brand px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-transparent hover:text-brand"
        >
          Become A Model
        </ButtonLink>
      </div>
    </section>
  )
}
