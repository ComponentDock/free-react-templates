/* Phone-frame screenshot grid (source: .app_screen_area — the original is a
   carousel; recreated as a responsive grid of phone-framed panels). */
const SHOTS = [
  { seed: 'ripply-shot-1', alt: 'Home screen of the Ripply app' },
  { seed: 'ripply-shot-2', alt: 'Dashboard screen of the Ripply app' },
  { seed: 'ripply-shot-3', alt: 'Settings screen of the Ripply app' },
]

export function Screenshots() {
  return (
    <section id="screenshot" className="bg-white px-[15px] pb-[240px] pt-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">App Screenshots</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          A quick look at the clean, focused screens that make Ripply a joy to use.
        </p>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1140px] flex-wrap items-center justify-center gap-10">
        {SHOTS.map((shot) => (
          <div
            key={shot.seed}
            className="w-[280px] overflow-hidden rounded-[28px] border-[10px] border-ink shadow-xl"
          >
            <img
              src={`https://picsum.photos/seed/${shot.seed}/280/560`}
              alt={shot.alt}
              className="h-[560px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
