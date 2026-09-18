export function Meditation() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/zen-meditation/1920/900')" }}
    >
      <div className="absolute inset-0 bg-zen-purple/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-white/80">
              Beginner & Advanced
            </span>
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-[2px] text-white md:text-4xl">
              Meditation Sessions
            </h2>
            <p className="mb-8 leading-relaxed text-white/85">
              Our meditation sessions are designed to help you find inner calm and
              mental clarity. Whether you are a beginner or an experienced
              practitioner, our guides will lead you through techniques that reduce
              stress and increase mindfulness.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-[9px] bg-zen-yellow px-10 py-5 text-sm font-bold uppercase tracking-[2px] text-zen-purple transition-shadow hover:shadow-lg"
            >
              Discover
            </a>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/zen-yoga-pose/600/500"
              alt="Yoga practitioner in meditation pose"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
