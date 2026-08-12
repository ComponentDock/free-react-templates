const BUILD_IMAGE = 'https://picsum.photos/seed/axiom-build/800/600'

/* Build band recreated from the source's split build_product section: an
   image on the left and, on the right, the headline, a grey description,
   and a yellow-underlined "Visit Our Profile" link. */

export function Build() {
  return (
    <section id="about" aria-label="Build" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src={BUILD_IMAGE}
            alt="Product and brand building workspace"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="lg:pl-8">
          <h2 className="text-3xl font-semibold leading-tight text-ink lg:text-[46px] lg:leading-[58px]">
            We Help you to Build your Product and Brand For Big or Small
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-body">
            From the first sketch to the final release, our team partners with startups and
            enterprises alike to design, build, and grow products people love.
          </p>
          <a
            href="#work"
            className="relative mt-10 inline-block px-2 py-1.5 text-base text-ink after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:bg-yellow"
          >
            Visit Our Profile
          </a>
        </div>
      </div>
    </section>
  )
}
