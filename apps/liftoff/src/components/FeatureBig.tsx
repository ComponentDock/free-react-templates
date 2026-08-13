import { Check } from 'lucide-react'
import { featureBig } from '../data'

/** Feature-big rows (reference `.feature-big`): two alternating rows, each
 *  with a device illustration, a 40px-900 black heading, a paragraph, a
 *  green-checked two-item list and a white author quote box. The second row
 *  reverses the column order on desktop. */
export function FeatureBig() {
  return (
    <section aria-label="Features detail" className="bg-paper">
      {featureBig.rows.map((row, index) => (
        <div key={row.author.name} className="border-b border-border py-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-12 lg:px-8">
            <div className={index % 2 === 1 ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}>
              <img
                src={row.image}
                alt=""
                aria-hidden="true"
                className="h-auto w-full rounded-[5px]"
                loading="lazy"
              />
            </div>
            <div
              className={
                index % 2 === 1 ? 'lg:order-1 lg:col-span-5 lg:pr-10' : 'lg:col-span-5 lg:pl-10'
              }
            >
              <h2 className="font-heading text-[30px] font-black text-ink lg:text-[40px]">
                {row.heading}
              </h2>
              <p className="mt-5 mb-4 text-muted">{row.paragraph}</p>
              <ul className="mb-5 list-none space-y-3">
                {row.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 pl-[5px]">
                    <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-check" />
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-[4px] border border-[#eee] p-5 shadow-[0_5px_15px_-2px_rgba(0,0,0,0.1)]">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={row.author.avatar}
                    alt={row.author.name}
                    className="h-[50px] w-[50px] max-w-[50px] rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-ink">
                    <strong>{row.author.name}</strong>
                    <br />
                    {row.author.role}
                  </div>
                </div>
                <blockquote className="text-ink italic">{row.author.quote}</blockquote>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
