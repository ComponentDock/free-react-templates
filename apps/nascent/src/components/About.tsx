export function About() {
  return (
    <section id="about" data-testid="about" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left image */}
        <div>
          <img
            src="https://picsum.photos/seed/nascent-about/600/450"
            alt="Our philosophy"
            className="w-full rounded object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Our Philosophy</h2>
          <p className="leading-relaxed text-body">
            We believe in building products that put users first. Every decision we make is guided
            by empathy and a relentless focus on quality. Our philosophy is simple: create tools
            that make people&apos;s lives better.
          </p>
          <p className="leading-relaxed text-body">
            From early-stage startups to established enterprises, we partner with teams who share
            our passion for meaningful innovation. Together we turn ambitious visions into everyday
            realities.
          </p>
          <div className="pt-4">
            <p className="font-bold font-heading text-gray-900">James Carter</p>
            <p className="text-sm text-orange-400">CEO, Nascent</p>
          </div>
        </div>
      </div>
    </section>
  )
}
