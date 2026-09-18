export function About() {
  return (
    <section className="bg-bg-gray py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/jobhunt-about/600/500"
              alt="About JobHunt"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-brand-dark text-3xl lg:text-4xl font-bold leading-snug mb-8">
              We Build Lasting Relationships Between Candidates &amp; Businesses
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes. Placeholder text commonly used in the graphic, print, and
              publishing industries for previewing visual layout.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              The automated process starts as soon as your clothes go into the machine. The outcome
              is gleaming clothes. Placeholder text commonly used.
            </p>
            <a
              href="#"
              className="inline-block bg-brand-green text-white px-10 py-5 rounded text-sm font-bold uppercase hover:opacity-90 transition-opacity"
            >
              Find Talent
            </a>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-brand/5 text-[140px] font-bold uppercase pointer-events-none select-none">
        Talents
      </div>
    </section>
  )
}
