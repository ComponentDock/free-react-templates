import { galleryImages } from '../data'
import { InstagramIcon } from './social-icons'

/** "Follow Us On Instagram" strip: centered heading + blurb and six
 *  270px photo tiles edge-to-edge (6 across on lg, 3 on md, 2 on sm)
 *  with an Instagram glyph on hover. */
export function Gallery() {
  return (
    <section data-testid="gallery" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 pb-14 pt-16 text-center md:px-8 md:pb-16">
        <h2 className="mb-4 text-[40px] font-semibold text-ink">Follow Us On Instagram</h2>
        <p className="mx-auto max-w-2xl text-body">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {galleryImages.map((image) => (
          <a
            key={image}
            href="#"
            onClick={(event) => event.preventDefault()}
            className="group relative block h-[270px] overflow-hidden"
          >
            <img
              src={image}
              alt="Sneakly on Instagram"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            >
              <InstagramIcon className="h-8 w-8 text-white" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
