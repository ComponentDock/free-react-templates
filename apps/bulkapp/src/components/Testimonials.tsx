export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <figure className="mx-auto mt-12 max-w-2xl rounded-lg bg-white p-10 text-center shadow-sm dark:bg-gray-900">
          <blockquote className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            &ldquo;Accessories Here you can find the best computer accessory for your laptop,
            monitor, printer, scanner, speaker, projector, hardware.&rdquo;
          </blockquote>
          <figcaption className="mt-8">
            <img
              src="https://picsum.photos/seed/bulkapp-avatar/64/64"
              alt="Mark Alviro Wiens"
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-4 font-display font-semibold text-gray-900 dark:text-white">
              Mark Alviro Wiens
            </p>
            <p className="mt-1 text-sm text-muted">CEO at Google</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
