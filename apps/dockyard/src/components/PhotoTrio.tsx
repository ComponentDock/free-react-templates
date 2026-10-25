import { photoTrio } from '../data'

/** Three photo cards under the hero: the photograph lifts 5px on hover or keyboard focus. */
export function PhotoTrio() {
  return (
    <section aria-label="What we cover" className="bg-white pt-[5em] pb-[4em]">
      <ul className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-3">
        {photoTrio.map((card) => (
          <li key={card.title} className="group text-center">
            <a href="#services" className="block focus-visible:outline-none">
              <img
                src={card.src}
                alt={card.title}
                width={800}
                height={500}
                loading="lazy"
                className="mb-[30px] w-full rounded-[4px] transition-all duration-300 ease-in-out group-hover:-translate-y-[5px] group-focus-within:-translate-y-[5px]"
              />
              <h3 className="text-[22.4px] font-medium text-ink uppercase">{card.title}</h3>
            </a>
            <p className="mt-3 text-[16px] text-meta">{card.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
