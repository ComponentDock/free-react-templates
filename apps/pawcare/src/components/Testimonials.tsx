export function Testimonials() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <figure className="rounded bg-white p-10 text-center shadow-sm dark:bg-gray-800">
          <img
            src="https://picsum.photos/seed/pawcare-guardian/80/80"
            alt="Jhon Walker"
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <blockquote className="mt-6 text-sm font-light leading-relaxed text-mist dark:text-gray-300">
            Pawcare has been a blessing for our family. Their team treats our dog like royalty, and
            the spa days are his absolute favorite — we would not trust anyone else.
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-ink dark:text-white">Jhon Walker</p>
            <p className="text-sm text-brand">Head of web design</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
