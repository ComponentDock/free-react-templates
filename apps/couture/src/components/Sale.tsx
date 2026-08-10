export function Sale() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black">
      <img
        src="https://picsum.photos/seed/couture-7/1600/800"
        alt="Summer sale fashion"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative z-10 px-4 text-center">
        <h2 className="font-display text-5xl font-bold uppercase tracking-wide text-white md:text-8xl">
          Summer Sale
        </h2>
      </div>
    </section>
  )
}
