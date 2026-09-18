export function WhoWeAre() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left text */}
          <div>
            <div className="mb-6 border-l-4 border-brand pl-4">
              <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Who We Are</h2>
            </div>
            <p className="mb-4 text-body leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugiat nostrum
              provident officiis dolorum consequuntur facere ipsa, aperiam quia eos rerum magnam
              veritatis voluptatem, sequi quibusdam unde accusantium.
            </p>
            <p className="text-body leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolorum nemo
              officiis provident earum atque voluptatem error distinctio alias nulla voluptatibus,
              vero illo, quasi iusto similique impedit.
            </p>
          </div>
          {/* Right image */}
          <div>
            <img
              src="https://picsum.photos/seed/hammerly-about/600/400"
              alt="Our construction team"
              className="w-full rounded-lg shadow-lg"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
