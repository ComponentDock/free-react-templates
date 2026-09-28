export function SpecialtiesParallax() {
  return (
    <section
      id="specialties"
      className="relative h-64 flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/bistrox-parallax/1920/600)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Our Specialties</h2>
      </div>
    </section>
  )
}
