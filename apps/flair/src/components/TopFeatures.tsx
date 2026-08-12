import { FEATURES } from '../data'

/* TopFeatures — the signature floating card: a white 3-card strip that
   straddles the hero's bottom edge (absolutely positioned, z-index above
   the hero, soft shadow, 1px vertical dividers between cards). */
export function TopFeatures() {
  return (
    <section aria-label="Top features" className="relative z-[99] bg-gray-100">
      <div className="absolute inset-x-0 bottom-1/2 z-[99] translate-y-1/2 px-6">
        <div className="mx-auto grid max-w-[1170px] divide-y divide-line rounded-[2px] bg-white shadow-[2px_3px_10px_rgba(0,0,0,0.15)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="p-[45px]">
              <feature.icon aria-hidden="true" className="h-10 w-10 text-accent" />
              <h3 className="mt-5 text-[18px] font-semibold text-heading">{feature.title}</h3>
              <p className="mt-4 text-sm leading-[1.8] text-body">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
