export function Hero() {
  return (
    <section
      id="home"
      aria-label="Conference hero"
      className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden px-4 pb-28 pt-36 text-center text-white"
      style={{
        background: 'linear-gradient(to right, #ff9600 0%, #fe531e 26%, #c022a5 57%, #1bb8f9 100%)',
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 select-none text-[96px] font-extrabold uppercase leading-none tracking-widest text-white/15 md:text-[160px]"
      >
        CONFERENCE
      </span>
      <div className="relative">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Digital Design
          <br />
          Conference
          <br />
          <span className="font-semibold">2019 NYC</span>
        </h1>
        <a
          href="#schedule"
          className="mt-10 inline-flex items-center justify-center border-2 border-white bg-transparent px-10 py-4 text-base font-medium capitalize text-white transition-colors hover:bg-white hover:text-black"
        >
          Add to your Calendar
        </a>
      </div>
    </section>
  )
}
