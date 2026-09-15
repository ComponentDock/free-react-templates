import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center sm:min-h-[600px] lg:min-h-[750px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/givehope-hero/1920/950)' }}
    >
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:w-1/2 lg:py-0">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Bless others with your gift
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
          Heaven fruitful lesser days appear creeping seasons so behold bearing days open. Let every
          kindness multiply and change the world one donation at a time.
        </p>
        <ButtonLink
          href="#causes"
          className="inline-flex rounded-full bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Start Donation
        </ButtonLink>
      </div>
    </section>
  )
}
