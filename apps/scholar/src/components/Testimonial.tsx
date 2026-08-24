export function Testimonial() {
  return (
    <section className="bg-section-bg">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
          Student says about us
        </h2>

        <blockquote className="mt-8 text-lg italic text-body">
          &ldquo;Scholar has completely transformed my career. The courses are well-structured, the
          instructors are world-class, and I was able to land my dream job within three months of
          completing my first course. I highly recommend it to anyone looking to upskill.&rdquo;
        </blockquote>

        <div className="mt-8 flex flex-col items-center gap-3">
          <img
            src="https://picsum.photos/seed/scholar-avatar/80/80"
            alt="Petey Cruiser"
            className="h-16 w-16 rounded-full object-cover"
            width={80}
            height={80}
          />
          <div>
            <p className="font-display text-base font-semibold text-heading">Petey Cruiser</p>
            <p className="text-sm text-subtitle">Student at Scholar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
