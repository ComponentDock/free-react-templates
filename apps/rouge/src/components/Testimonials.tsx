export function Testimonials() {
  return (
    <section className="relative bg-ink py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-sans text-4xl font-bold uppercase tracking-wide">
          Client Testimonials
        </h2>
        <figure className="mt-10">
          <blockquote className="text-lg leading-relaxed text-white/85">
            &ldquo;Amazing experience from start to finish — Rouge makes you feel like the most
            important person in the room.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-3">
            <img
              src="https://picsum.photos/seed/rouge-reviewer/96/96"
              alt="Maria Parker portrait"
              className="h-16 w-16 rounded-full border-2 border-rouge-400 object-cover"
              loading="lazy"
            />
            <span className="font-sans text-lg font-semibold uppercase tracking-wide text-rouge-300">
              Maria Parker
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
