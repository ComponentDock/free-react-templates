export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black">
      <img
        src="https://picsum.photos/seed/animal-shelter-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          Adopt Us. We need your help.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-gray-200">
          Every year, thousands of loving pets wait for a forever home. Your visit today could be
          the day their story changes — come meet them and find a friend for life.
        </p>
        <button
          type="button"
          className="mt-8 inline-block bg-brand px-8 font-medium uppercase leading-[42px] text-white transition-colors hover:brightness-95"
        >
          Find a pet to adopt
        </button>
      </div>
    </section>
  )
}
