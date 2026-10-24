import { ButtonLink } from '@free-react-templates/ui'
import { hero, photo } from '../data'

interface SplitHeroProps {
  id: string
  title: string
  seed: string
}

/** Light-gray hero band: bottom-aligned campaign photo in one column and the
 *  centered eyebrow / oversized uppercase headline / black CTA in the other.
 *  Used twice — the opening "Arrivals Sales" band and the "New Shoes" band
 *  further down the page — exactly as the reference layout repeats it. */
export function SplitHero({ id, title, seed }: SplitHeroProps) {
  return (
    <section id={id} className="bg-surface">
      <div className="mx-auto grid w-full max-w-[1200px] items-end gap-8 px-4 md:grid-cols-2 md:px-8">
        <img
          src={photo(seed, 900, 1000)}
          alt={`${title} campaign photo`}
          loading="lazy"
          decoding="async"
          className="order-1 w-full self-end object-cover"
        />
        <div className="order-2 px-2 py-16 text-center md:py-24">
          <h2 className="text-xs font-normal tracking-[0.2em] text-black/80 uppercase">
            {hero.eyebrow}
          </h2>
          <h1 className="mt-6 text-[50px] leading-[0.95] font-black tracking-[-0.01em] text-black uppercase md:text-[62px]">
            {title}
          </h1>
          <p className="mt-8">
            <ButtonLink
              href="#popular"
              className="rounded-none bg-black px-[30px] py-3 text-[13px] tracking-[0.15em] text-white uppercase hover:bg-[#333333]"
            >
              {hero.cta}
            </ButtonLink>
          </p>
        </div>
      </div>
    </section>
  )
}
