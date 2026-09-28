export function OurStory() {
  return (
    <section id="about" className="relative py-20">
      {/* Decorative side panels */}
      <div className="absolute top-0 left-0 hidden h-full w-1/5 bg-brand/10 lg:block" />
      <div className="absolute top-0 right-0 hidden h-full w-1/5 bg-brand/5 lg:block" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-8 w-8 rotate-45 border-2 border-brand" />
          <h2 className="text-3xl font-bold text-ink">Our Story</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <p className="leading-relaxed text-body">
            Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi
            maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis,
            eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus
            et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,
            blandit ex. Vestibulum id dapibus dolor, ac cursus nulla.
          </p>
          <p className="leading-relaxed text-body">
            Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi
            maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis,
            eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus
            et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae,
            blandit ex. Vestibulum id dapibus dolor, ac cursus nulla.
          </p>
        </div>
      </div>
    </section>
  )
}
