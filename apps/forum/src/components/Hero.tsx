export interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(4,9,30,0.85), rgba(4,9,30,0.85)), url(https://picsum.photos/seed/forum-hero/1920/1080)',
      }}
    >
      <div className="px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#8ab92d]">
          Now you can watch the Talent
        </p>
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">Year End Conference</h1>
        <div className="mb-6 flex items-center justify-center gap-6 text-white/60">
          <span className="text-lg font-bold">00</span>
          <span className="text-sm">Days</span>
          <span className="text-lg font-bold">00</span>
          <span className="text-sm">Hours</span>
          <span className="text-lg font-bold">00</span>
          <span className="text-sm">Minutes</span>
        </div>
        <p className="mb-2 text-lg text-white">05th - 09th February, 2025</p>
        <p className="text-sm text-white/70">56/8, Dhanmondi, Dhaka - 1205</p>
      </div>
    </section>
  )
}
