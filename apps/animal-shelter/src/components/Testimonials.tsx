export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white lg:text-4xl">
          Testimonials from our guardians
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Real stories from families who found their new best friend here.
        </p>
        <figure className="mt-14 rounded bg-white p-10 text-center shadow-sm dark:bg-gray-800">
          <img
            src="https://picsum.photos/seed/animal-shelter-guardian/80/80"
            alt="Mark Alviro Wiens"
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <blockquote className="mt-6 text-sm font-light leading-relaxed text-mist dark:text-gray-300">
            Adopting from this shelter changed our home forever. The team guided us through every
            step and matched us with the perfect companion — we could not be happier.
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-gray-900 dark:text-white">Mark Alviro Wiens</p>
            <p className="text-sm text-brand">CEO at Google</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
