export function Cta() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bodyforge-cta/1920/500)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-white">Your Gym</h2>
        <p className="mt-4 text-lg text-white/80">
          Join BodyForge today and start your fitness journey with the best equipment and trainers
          in town.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-brand px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Become A Member
        </a>
      </div>
    </section>
  )
}
