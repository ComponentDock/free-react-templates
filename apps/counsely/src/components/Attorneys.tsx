import { attorneys } from '../data'
import { BrandIcon } from './BrandIcon'

/** Centered-heading section with four attorney flip cards: photo + name +
 *  role on the front, a gold back panel with a quote, author row, and
 *  social icons revealed on hover/focus. */
export function Attorneys() {
  return (
    <section id="attorneys" aria-label="Attorneys" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {attorneys.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-ink">{attorneys.headline}</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.members.map((attorney) => (
            <div key={attorney.name} className="group h-[400px] [perspective:1200px]">
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={attorney.photo}
                    alt={attorney.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-5 bottom-5 bg-white/95 px-4 py-3">
                    <h3 className="text-lg font-bold text-ink">{attorney.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-brand">{attorney.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand p-6 text-center shadow-[0_0_70px_-10px_rgba(0,0,0,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <blockquote className="text-sm leading-relaxed text-white">
                    &ldquo;{attorney.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={attorney.photo}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">{attorney.name}</p>
                      <span className="text-xs font-medium text-white/80">{attorney.role}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                      <BrandIcon name="twitter" className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                      <BrandIcon name="facebook" className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                      <BrandIcon name="instagram" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
