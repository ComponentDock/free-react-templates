export function HeroPanel() {
  return (
    <div className="relative hidden w-1/2 md:block">
      <img
        src="https://picsum.photos/seed/confreg-event/800/900"
        alt="Conference speaker presenting to audience"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center bg-brand/80 px-8">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-wide text-white">Register Now</h1>
        <p className="text-sm font-light text-white/90">while seats are available !</p>
      </div>
    </div>
  )
}
