/* Hero (source: div.hero-wrap.js-fullheight — full-height washed photo
   background with a white overlay, circular portrait, greeting
   subheading, bold name headline, intro paragraph and a text-style
   "More About Me" button). The persona name is fictional — the
   recreation brands the blogger as "Jude Marlowe". */
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/jotter-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative z-10 max-w-2xl">
        <img
          src="https://picsum.photos/seed/jotter-portrait/200/200"
          alt="Portrait of Jude Marlowe"
          className="mx-auto mb-6 h-44 w-44 rounded-full object-cover"
        />
        <h2 className="text-2xl font-light text-subheading">Hello I&apos;m</h2>
        <h1 className="mt-2 text-5xl font-black tracking-wide text-ink">Jude Marlowe</h1>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-ink/70">
          I am A Blogger. Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
          at the coast of the Semantics, a large language ocean.
        </p>
        <a
          href="#articles"
          className="mt-8 inline-block border-b-2 border-meta pb-1 text-meta transition-colors hover:border-accent hover:text-accent"
        >
          More About Me
        </a>
      </div>
    </section>
  )
}
