export function Quote() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sacredgate-quote-bg/1600/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Quote of the day</h2>
        <blockquote className="mt-8 font-display text-2xl leading-relaxed text-white italic sm:text-3xl">
          &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-widest text-gray-300">— Matthew 18:20</p>
      </div>
    </section>
  )
}
