import { ButtonLink } from '@free-react-templates/ui'

export function Callout() {
  return (
    <section
      className="relative flex min-h-[400px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/givehope-callout/1920/480)' }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:w-3/5 lg:py-0">
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Be a part of the breakthrough and make someone's dream come true
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-white/80">
          Heaven fruitful lesser days appear creeping seasons so behold bearing days open. Let your
          generosity change lives and build stronger communities together.
        </p>
        <ButtonLink
          href="#causes"
          className="inline-flex rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
