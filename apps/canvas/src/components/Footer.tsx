import { BRAND, COPYRIGHT, FOOTER_LINK_COLUMNS, SOCIAL_LINKS } from '../data'
import { BrandIcon } from './BrandIcon'

/* div.footer.site-section.bg-white — brand mark left (uppercase Poppins,
   bold, indigo), three plain link columns to the right (the source
   duplicates columns 2 and 3 — kept for fidelity). Below: the social band
   (five centered plain glyphs, m-2 spacing, NO circles) + centered
   copyright line. */
export function Footer() {
  return (
    <footer id="contact" aria-label="Footer" className="bg-white pt-20 pb-10 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <a
            href="#home"
            className="font-sans text-base font-bold tracking-widest text-brand uppercase md:w-1/4"
          >
            {BRAND}
          </a>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:ml-auto md:w-3/4">
            {FOOTER_LINK_COLUMNS.map((column, index) => (
              <ul key={index} className="space-y-[10px]">
                {column.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-black/50 transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center md:mt-20">
          <div className="flex items-center justify-center">
            {SOCIAL_LINKS.map(({ name, label }) => (
              <a
                key={name}
                href="#"
                aria-label={label}
                className="m-2 text-black/50 transition-colors hover:text-ink"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-[15px] text-black/50">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  )
}
