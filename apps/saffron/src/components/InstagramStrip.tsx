import { instagramStripSeeds, instagramStripTitle } from '../data'

export function InstagramStrip() {
  return (
    <section aria-label={instagramStripTitle} className="mt-[40px] border-t border-[#cccccc]">
      <h2 className="py-5 text-center text-[1.2rem] font-medium text-ink">
        {instagramStripTitle}
      </h2>
      <ul className="grid grid-cols-4 sm:grid-cols-7">
        {instagramStripSeeds.map((seed, index) => (
          <li key={seed}>
            <a href="#blog" aria-label={`Instagram photo ${index + 1}`} className="block">
              <img
                src={`https://picsum.photos/seed/${seed}/300/400`}
                alt=""
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
