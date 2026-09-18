export function TextSection() {
  return (
    <section className="grid grid-cols-2 gap-12 py-16">
      <div>
        <h3 className="font-display text-2xl font-bold text-ink">The Story</h3>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h3 className="font-display text-2xl font-bold text-ink">Dreamers</h3>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <a
          href="#"
          className="mt-6 inline-block text-sm font-medium text-brand transition-colors hover:text-brand-dark"
        >
          More…
        </a>
      </div>
    </section>
  )
}
