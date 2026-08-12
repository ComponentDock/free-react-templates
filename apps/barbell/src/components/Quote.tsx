export function Quote() {
  return (
    <section
      aria-label="Athlete quote"
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <img
        src="https://picsum.photos/seed/barbell-training/1920/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-medium leading-tight text-white md:text-5xl">
          &ldquo;During the hard times, it&rsquo;s important to focus on the things you can change
          in that moment instead of what you should have or could have done differently.&rdquo;
        </h2>
        <h4 className="mt-10 font-display text-xl font-medium uppercase text-white">
          Annie Thorisdottir, <span className="font-normal text-white/80">Crossfit athlete</span>
        </h4>
      </div>
    </section>
  )
}
