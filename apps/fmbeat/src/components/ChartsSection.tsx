export function ChartsSection() {
  return (
    <section data-testid="charts-section" className="bg-brand-dark py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider relative inline-block pb-4">
            Charts
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-yellow rounded" />
          </h2>
        </div>

        <div className="relative w-full h-[400px] md:h-[550px] rounded-lg overflow-hidden">
          <img
            src="https://picsum.photos/seed/fmbeat-charts/1920/550"
            alt="Charts"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark-deep/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl md:text-9xl font-black text-white/10 uppercase tracking-[0.3em]">
              Fmbeat
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
