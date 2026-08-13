import { instagram } from '../data'

/* Reference: section.instagram — #F8F8F9 strip with the centered 36px
   follow heading and a row of square placeholder photos (the demo
   injects the grid via JS; keep the strip feel). */
export function Instagram() {
  return (
    <section aria-label="Instagram" className="bg-light py-12 text-center">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-[28px] font-normal text-black lg:text-[36px]">{instagram.heading}</h2>
        <ul className="mt-8 grid grid-cols-3 gap-2 lg:grid-cols-6">
          {instagram.photos.map((item) => (
            <li key={item.photo}>
              <img
                src={item.photo}
                alt={item.alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
