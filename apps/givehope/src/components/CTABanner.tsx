import { ButtonLink } from '@free-react-templates/ui'

export function CTABanner() {
  return (
    <section
      className="relative flex min-h-[350px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/givehope-cta/1920/480)' }}
    >
      <div className="absolute inset-0 bg-primary-400/80" />
      <div className="relative flex flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Forget what you can get and see what you can give
        </h2>
        <ButtonLink
          href="#contact"
          className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-400 transition-colors hover:bg-white/90"
        >
          Become a Volunteer
        </ButtonLink>
      </div>
    </section>
  )
}
