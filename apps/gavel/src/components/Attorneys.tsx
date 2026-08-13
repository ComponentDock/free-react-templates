import { attorneys } from '../data'

/** Centered-heading section with four flip cards: photo + name + role on the
 *  front, a client quote on the back revealed on hover. */
export function Attorneys() {
  return (
    <section id="attorneys" aria-label="Attorneys" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Attorney</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Our Legal Attorneys</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="group h-[420px] [perspective:1200px]">
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col overflow-hidden bg-white shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)] [backface-visibility:hidden]">
                  <img
                    src={attorney.photo}
                    alt={attorney.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{attorney.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand">{attorney.role}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm leading-relaxed text-white/85">
                    &ldquo;{attorney.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-semibold text-brand">{attorney.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
