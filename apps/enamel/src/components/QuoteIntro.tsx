/** Parallax-style photo band with a single headline and paragraph (the
    source .intro section with a stellar parallax background). */
export function QuoteIntro() {
  return (
    <section
      className="bg-cover bg-center py-28 [background-attachment:fixed]"
      style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')" }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h3 className="text-2xl font-normal leading-snug text-ink md:text-3xl">
          We promised to take care our patients and we delivered.
        </h3>
        <p className="mt-4 leading-relaxed text-ink/70">
          Thousands of families across the city trust Enamel with their smiles — and we treat every
          one of them like our own.
        </p>
      </div>
    </section>
  )
}
