export function ProductiveSection() {
  return (
    <section className="bg-surface-light py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-stretch gap-12 lg:grid-cols-5">
          {/* Left: white card */}
          <div className="lg:col-span-3">
            <div className="h-full rounded bg-white p-8">
              <div className="ml-auto w-4/5">
                <h2 className="mb-5 text-4xl font-bold text-brand-teal">Productive with Thrive</h2>
                <p className="mb-4 text-text-black-50">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  right at the coast of the large language ocean.
                </p>
                <p className="mb-8 text-text-black-50">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted parts of sentences fly
                  into your mouth.
                </p>

                {/* Testimonial */}
                <div className="flex items-start gap-4">
                  <img
                    src="https://picsum.photos/seed/thrive-avatar/100/100"
                    alt="John Doe"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="italic text-text-black-50">
                      &ldquo;A small river named Duden flows by their place and supplies it with the
                      necessary regelialia.&rdquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      John Doe <span className="font-normal text-text-black-50">/ XYZ Inc.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="lg:col-span-2">
            <div className="h-full rounded bg-brand-orange p-10">
              <img
                src="https://picsum.photos/seed/thrive-productive/500/400"
                alt="Productive illustration"
                className="h-auto w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
