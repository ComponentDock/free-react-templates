export function LatestActivities() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindfund-activities/1400/500)' }}
    >
      <div className="absolute inset-0 bg-primary/90" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl text-white">Watch Our Latest Activities</h2>
          <p className="mt-4 text-white/80">
            See how your donations are making a real difference. From food distribution to education
            programs, every contribution helps us reach more people in need.
          </p>
          <a
            href="#causes"
            className="mt-6 inline-block rounded bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-white/90"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  )
}
