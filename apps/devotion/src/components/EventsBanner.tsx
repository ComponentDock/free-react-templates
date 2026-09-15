export function EventsBanner() {
  return (
    <section className="bg-blue-accent py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <div>
          <span className="mb-2 inline-block rounded-full bg-amber px-4 py-1 text-sm font-semibold text-navy">
            Upcoming Events
          </span>
          <h2 className="font-amatic text-3xl font-bold text-white">December Camp Meeting</h2>
        </div>
        <div className="text-center sm:text-right">
          <p className="mb-2 text-sm text-white/80">The camp meeting will start in</p>
          <div className="flex gap-2 text-white">
            <span className="rounded bg-navy/50 px-3 py-1 text-lg font-bold">00</span>
            <span className="text-lg">:</span>
            <span className="rounded bg-navy/50 px-3 py-1 text-lg font-bold">00</span>
            <span className="text-lg">:</span>
            <span className="rounded bg-navy/50 px-3 py-1 text-lg font-bold">00</span>
          </div>
        </div>
      </div>
    </section>
  )
}
