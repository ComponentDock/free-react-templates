/* CTA split recreated from the source's about-area2: an image on the
   right and a heading, paragraph, and orange "Join now for Free" button
   on the left. */

export function CtaBanner() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-indigo dark:text-white sm:text-4xl">
            Take the next step toward your personal and professional goals with us.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            The automated process all your website tasks. Join thousands of learners building
            in-demand skills with courses from world-class educators.
          </p>
          <a
            href="#join"
            className="mt-9 inline-block rounded bg-accent px-10 py-4 font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Join now for Free
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/edify-next-step/560/420"
            alt="Take the next step with Edify"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
