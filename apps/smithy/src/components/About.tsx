export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/smithy-about/500/600"
            alt="About Alex Smith"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-6 text-3xl font-bold text-[var(--color-heading)]">
            let&apos;s Introduce about myself
          </h2>
          <p className="mb-4 text-[var(--color-body)]">
            I am a passionate web developer with over a decade of experience crafting beautiful,
            functional websites and applications. My journey in tech started with a curiosity for
            how things work on the web.
          </p>
          <p className="mb-8 text-[var(--color-body)]">
            I specialize in building modern web experiences using the latest technologies. From
            responsive designs to complex web applications, I bring ideas to life with clean code
            and thoughtful user experiences.
          </p>
          <a
            href="#"
            className="inline-block rounded bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
