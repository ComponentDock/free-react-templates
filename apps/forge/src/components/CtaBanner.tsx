/* CTA recreated from the source's full-width teal band: heading + copy
   centered with an outline-white "Get In Touch!" button. */

export function CtaBanner() {
  return (
    <section aria-label="Do You Have An Awesome Project In Mind?" className="bg-brand py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-2xl font-normal text-white lg:text-3xl">
          Do You Have An Awesome Project In Mind?
        </h3>
        <p className="mt-4 text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, nisi vitae
          fringilla.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block border-2 border-white px-5 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          Get In Touch!
        </a>
      </div>
    </section>
  )
}
