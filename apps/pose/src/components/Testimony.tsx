export function Testimony() {
  return (
    <section id="testimony" className="relative overflow-hidden bg-ink py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/pose-testimony/1600/700')" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <blockquote className="text-lg leading-relaxed text-gray-200">
          &ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
          the coast of the Semantics, a large language ocean.&rdquo;
        </blockquote>
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-white">Mike Lewis</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Architect
          </p>
        </div>
      </div>
    </section>
  )
}
