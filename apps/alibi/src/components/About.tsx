export function About() {
  return (
    <section id="about" className="bg-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Why We Are The Best
          </h2>
          <p className="mt-4 font-display text-lg italic text-mist">
            &ldquo;Justice delayed is justice denied.&rdquo;
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/seed/counsel-about-1/600/400"
              alt="Lawyers discussing case"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/seed/counsel-about-2/600/400"
              alt="Courtroom proceedings"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-mist">
            With over 25 years of experience, our firm has successfully represented thousands of
            clients in complex legal matters. We combine deep expertise with compassionate
            representation to deliver results that matter. Our commitment to excellence has earned
            us recognition among the top law firms in the nation.
          </p>
        </div>
      </div>
    </section>
  )
}
