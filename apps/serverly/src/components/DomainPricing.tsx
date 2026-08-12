import { domainPrices } from '../data'

/* White rounded strip overlapping the hero (margin-top -80px in the
   original), listing five domain extensions: green dot + per-item colored
   TLD name + grey price. */
export function DomainPricing() {
  return (
    <div className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[50px] bg-white px-6 py-8 shadow-xl sm:px-12">
        <ul className="flex flex-wrap items-center justify-between gap-y-4">
          {domainPrices.map((item) => (
            <li key={item.tld}>
              <a
                href="#domain"
                className="flex items-baseline gap-1"
                aria-label={`${item.tld} ${item.price}`}
              >
                <span className="text-[30px] font-semibold leading-none text-tld-green">.</span>
                <span className="text-2xl font-bold leading-none" style={{ color: item.color }}>
                  {item.tld.replace(/^\./, '')}
                </span>
                <span className="ml-1 text-lg text-steel-500">{item.price}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
