export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/batterly-about/600/500"
          alt="Freshly baked pastries on a wooden table"
          width={600}
          height={500}
          className="w-full rounded-lg object-cover"
        />
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
            Fresh &amp; Delicious
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            A Simple Way to Eating Delicious
          </h2>
          <p className="mt-6 leading-relaxed text-gray-600">
            We use only the finest ingredients — farm-fresh eggs, premium cocoa, and hand-selected
            seasonal fruits. Every cake is crafted from scratch by our master bakers who bring
            decades of experience to each creation.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-gradient-to-l from-brand to-brand-dark px-8 py-3 font-heading text-sm font-bold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-105"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}
