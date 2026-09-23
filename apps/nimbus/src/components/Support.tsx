export function Support() {
  return (
    <section>
      <div className="grid items-center md:grid-cols-2">
        <div
          className="relative min-h-[300px] bg-cover bg-center md:min-h-[500px]"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/nimbus-support/800/600)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="px-8 py-16 md:px-16 md:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-primary-400">
            24/7 Support system
          </p>
          <h2 className="mb-6 text-3xl font-semibold leading-snug text-ink">
            A Handy support
            <br />
            system for the Software
          </h2>
          <p className="mb-4 font-medium text-ink">
            We are here to listen from you deliver excellence
          </p>
          <p className="leading-relaxed text-smoke">
            Our dedicated support team is available around the clock to help you resolve any issues
            quickly. Whether it's a technical question or a feature request, we've got you covered
            with fast, friendly assistance.
          </p>
        </div>
      </div>
    </section>
  )
}
