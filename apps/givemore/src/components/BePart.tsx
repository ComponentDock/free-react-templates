export function BePart() {
  return (
    <section className="relative bg-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-bold leading-snug text-ink md:text-4xl">
              Be a part of the breakthrough and make someone&apos;s dream come true
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Our mission is to bring hope and tangible support to communities worldwide. Whether
              through education, clean water access, or emergency relief, every effort counts. Join
              us in creating lasting change that transforms lives.
            </p>
            <a
              href="#causes"
              className="mt-6 inline-block rounded bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full max-w-md lg:w-1/2">
            <img
              src="https://picsum.photos/seed/givemore-bepart/600/400"
              alt="Volunteers working together"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
