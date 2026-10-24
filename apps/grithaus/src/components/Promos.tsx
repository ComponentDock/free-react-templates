import { ArrowRight } from 'lucide-react'
import { promos } from '../data'

const ctaClass =
  'mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-white'

export function Promos() {
  return (
    <section
      aria-label="Member offers"
      className="mx-auto mt-[100px] grid max-w-[1170px] gap-[30px] px-4 md:grid-cols-2"
    >
      {promos.map((promo) => (
        <a
          key={promo.headline}
          href={promo.href}
          data-variant={promo.variant}
          className="group relative block min-h-[280px] overflow-hidden rounded-[10px]"
        >
          {promo.variant === 'offer' ? (
            <div className="flex h-full min-h-[280px] flex-col justify-center bg-[#1f2a63] p-[40px]">
              <span className="mb-2 text-[12px] font-bold uppercase tracking-[0.3em] text-lime">
                {promo.eyebrow}
              </span>
              <span className="text-[40px] font-extrabold leading-none text-white">
                {promo.headline}
              </span>
              <p className="mb-0 mt-3 max-w-[330px] text-[13px] leading-[1.9] text-white/70">
                {promo.copy}
              </p>
              <span className={ctaClass}>
                {promo.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          ) : (
            <div className="relative h-full min-h-[280px]">
              <img src={promo.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink/45" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-end p-[40px]">
                <span className="mb-2 w-fit rounded-[4px] bg-brand px-3 py-1 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                  {promo.eyebrow}
                </span>
                <span className="text-[30px] font-extrabold leading-none text-white">
                  {promo.headline}
                </span>
                <p className="mb-0 mt-3 max-w-[330px] text-[13px] leading-[1.9] text-white/80">
                  {promo.copy}
                </p>
                <span className={ctaClass}>
                  {promo.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          )}
        </a>
      ))}
    </section>
  )
}
