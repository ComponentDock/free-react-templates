export function VolunteerBand() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindred-volunteer/1920/900)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white lg:text-5xl">
          <a href="#about" className="transition-colors hover:text-white/80">
            Become a Volunteer
          </a>
        </h2>
      </div>
    </section>
  )
}
