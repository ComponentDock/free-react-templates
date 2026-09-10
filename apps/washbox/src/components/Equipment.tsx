export function Equipment() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image area */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/washbox-equip/1920/800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-lg shadow-lg">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 font-[Work_Sans]"
              style={{ color: '#010A44' }}
            >
              We have the latest equipment
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#10285d' }}>
              Our facility is equipped with the most advanced car wash and detailing technology
              available. From automated wash systems to hand-finished detailing, we ensure your
              vehicle receives premium treatment every time.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[30px] text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)',
              }}
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
