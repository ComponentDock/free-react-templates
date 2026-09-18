export function FeatureCta() {
  return (
    <section id="faq" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-heading">Help Us by Sharing Our Works</h2>
            <p className="mb-6 text-base leading-relaxed text-body-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae.
            </p>
            <p className="mb-4 text-sm font-semibold text-heading">
              Carl Anderson, Co-Founder &amp; CEO
            </p>
          </div>
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/luminary-feature/600/400"
              alt="Featured content"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
