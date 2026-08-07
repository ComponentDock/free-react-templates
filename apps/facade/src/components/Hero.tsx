import { ButtonLink } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[640px] items-center bg-coal">
      <img
        src="https://picsum.photos/seed/arclabs-hero/1600/900"
        alt="City skyline at dusk with modern architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[#050a34]/60" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="font-display text-lg font-semibold uppercase tracking-[0.3em] text-brand">
          Building for Society
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
          Future Architechure
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ButtonLink
            href="#projects"
            className="rounded-none border border-white bg-transparent px-9 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-brand hover:bg-transparent hover:text-brand"
          >
            View project
          </ButtonLink>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
