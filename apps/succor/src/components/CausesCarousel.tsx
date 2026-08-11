import { CAUSES } from '../data'

/* carousel-causes — a row of 5 cause items (200px circular photos,
   margin 0 auto 20px, title 20px w900 below; hover: card lifts -10px and
   the photo gets an 80%-opacity overlay). Recreated as a horizontally
   scrollable row (the source is an owl.carousel). */
export function CausesCarousel() {
  return (
    <section id="causes" aria-label="Causes" className="bg-white py-[7em]">
      <div className="mx-auto max-w-6xl px-4">
        {/* heading-section — centered heading + lorem paragraph. */}
        <div className="mx-auto max-w-[830px] pb-3 text-center">
          <h2 className="text-[32px] font-black leading-[1.1] text-black lg:text-[50px]">
            Let&apos;s build the world without child abuse and neglect
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-gray-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </p>
        </div>

        {/* .carousel-causes — the five circular cause cards. */}
        <div className="mt-10 flex gap-8 overflow-x-auto pb-4">
          {CAUSES.map((cause, index) => (
            <a
              key={cause.title}
              href="#causes"
              className="group block min-w-[220px] text-center transition-all duration-300 hover:-mt-[10px]"
            >
              {/* .img — 200×200 circle, overflow hidden, margin 0 auto 20px;
                  hover overlay at 80% opacity (source .img:after). */}
              <div className="relative mx-auto mb-5 h-[200px] w-[200px] overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${cause.seed}/400/400`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <h3 className="text-[20px] font-black leading-snug text-black">{cause.title}</h3>
              {/* Decorative index label mirroring the source's numbering. */}
              <span className="sr-only">Cause {index + 1}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
