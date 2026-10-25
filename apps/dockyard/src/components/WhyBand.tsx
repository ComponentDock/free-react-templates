import { Check } from 'lucide-react'
import { why } from '../data'

/** Gutters-free split: text on the left, the photograph filling the right half to the edge. */
export function WhyBand() {
  return (
    <section
      id="why-us"
      aria-label="Why Dockyard"
      className="grid border-t border-line bg-white lg:grid-cols-2"
    >
      <div className="order-2 lg:order-1 lg:col-span-1 lg:pr-0">
        <div className="mx-auto max-w-[475px] px-4 py-12 lg:px-0 lg:py-[3rem] lg:pl-8">
          <h2 className="text-[32px] font-medium text-ink uppercase">{why.title}</h2>
          <p className="mt-4 text-[16px] text-body">{why.blurb}</p>
          <ul className="mt-6 space-y-3">
            {why.items.map((item) => (
              <li key={item} className="flex items-start gap-3 pl-[35px] text-[16px] text-body">
                <Check aria-hidden="true" className="-ml-[35px] mt-1 size-5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src={why.image}
          alt="Containers stacked on a quay beside a berthed vessel"
          width={1110}
          height={1036}
          loading="lazy"
          className="h-[400px] w-full object-cover lg:h-full"
        />
      </div>
    </section>
  )
}
