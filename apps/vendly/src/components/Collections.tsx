import { COLLECTIONS } from '../data'

/* site-blocks-2 — three image collection cards (Women / Children / Men)
   with a bottom black gradient overlay, a 12px "Collections" label and a
   40px white name; the image zooms to 1.1 on hover. */
export function Collections() {
  return (
    <section id="catalogue" className="py-[40px] md:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {COLLECTIONS.map(({ label, image, href }) => (
          <a key={label} href={href} className="group relative block overflow-hidden">
            <img
              src={image}
              alt={`${label} collection`}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"
            />
            <span className="absolute bottom-0 left-0 p-5 text-left">
              <span className="block text-[12px] font-black uppercase tracking-[0.1em] text-white">
                Collections
              </span>
              <span className="block text-[40px] leading-tight text-white">{label}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
