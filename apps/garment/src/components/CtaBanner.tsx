import { ButtonLink } from '@free-react-templates/ui'

const ctaImage = 'https://picsum.photos/id/65/1600/700'

export function CtaBanner() {
  return (
    <section
      aria-label="Global sale"
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-white/85 via-white/60 to-transparent dark:from-gray-950/85 dark:via-gray-950/60" />
      <div className="relative mx-auto flex max-w-7xl justify-end px-4 sm:px-6">
        <div className="max-w-xl text-right">
          <p className="font-display text-2xl font-bold text-accent">-60%</p>
          <h2 className="mt-2 font-display text-6xl font-bold text-ink dark:text-white">
            Global Sale
          </h2>
          <ButtonLink
            href="#shop"
            className="mt-8 h-[50px] min-w-[170px] rounded-none bg-brand px-10 text-xs font-medium uppercase tracking-[1.5px] hover:bg-accent"
          >
            Buy Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
