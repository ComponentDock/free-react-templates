export function SpecialPromo() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/stall-promo/1920/600')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-black uppercase tracking-wider text-white sm:text-5xl">
          Special Promo
        </h2>
        <p className="mt-2 text-lg font-bold uppercase text-brand">Summer Sale</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { value: '02', label: 'Days' },
            { value: '12', label: 'Hours' },
            { value: '45', label: 'Minutes' },
            { value: '30', label: 'Seconds' },
          ].map((unit) => (
            <div key={unit.label} className="bg-white/10 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-3xl font-black text-white">{unit.value}</p>
              <p className="text-xs uppercase text-gray-300">{unit.label}</p>
            </div>
          ))}
        </div>
        <a
          href="#products"
          className="mt-8 inline-block rounded-none bg-brand px-10 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
