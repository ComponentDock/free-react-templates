// Section title with a giant decorative watermark h1 behind the visible h2
// (100px #f2f2f2 display-font h1 at z-index -1).
export function SectionTitle({ title, watermark }: { title: string; watermark: string }) {
  return (
    <div className="relative mb-10">
      <h1
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-0 z-[-1] select-none whitespace-nowrap font-display text-[100px] font-bold uppercase leading-none text-watermark"
      >
        {watermark}
      </h1>
      <h2 className="relative font-display text-[42px] font-bold uppercase leading-tight text-ink">
        {title}
      </h2>
    </div>
  )
}
