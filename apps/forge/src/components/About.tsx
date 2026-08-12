/* About recreated from the source's "Who We Are" section: eyebrow +
   black divider bar + uppercase two-part heading with a bold span, two
   paragraphs, an outline-black "Learn More" button, and a right-hand
   photo with a 10px #eee offset shadow over a dotted backdrop. */

export function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="mr-auto max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Who We Are
          </span>
          <span className="mt-4 block h-1.5 w-[70px] bg-black" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-light uppercase leading-snug text-body lg:text-5xl lg:leading-tight">
            We Are <strong className="font-bold">Design Agency</strong> That Bring Your Ideas Alive
          </h2>
          <p className="mt-6 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nihil numquam aspernatur
            inventore sint eligendi nostrum, explicabo aperiam tenetur officia.
          </p>
          <p className="mt-4 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio
            voluptatibus libero officia neque magnam recusandae dolorum, esse eaque.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block border-2 border-black px-5 py-2.5 text-sm font-bold uppercase text-body transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Learn More
          </a>
        </div>
        <figure className="shadow-[10px_10px_0_#eee]">
          <img
            src="https://picsum.photos/seed/forge-2/800/600"
            alt="Our design team at work"
            className="block w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
