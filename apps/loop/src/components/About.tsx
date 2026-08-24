export function About() {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(16,42,67,0.85), rgba(16,42,67,0.9)), url(https://picsum.photos/seed/loop-about/1600/900)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-coral-400">
              About Us
            </span>
            <h2 className="mb-8 max-w-md text-4xl font-bold text-white">
              We are here to help grow your business
            </h2>
            <img
              src="https://picsum.photos/seed/loop-about-img/600/400"
              alt="About Loop agency"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border-l-2 border-coral-400 pl-6">
              <p className="mb-6 text-base leading-relaxed text-navy-200">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean.
              </p>
              <p className="mb-6 text-base leading-relaxed text-navy-200">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean.
              </p>
              <p className="text-base leading-relaxed text-navy-200">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
