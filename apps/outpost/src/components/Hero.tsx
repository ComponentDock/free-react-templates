/* Fullscreen illustrated hero: the signature pink→purple sky with layered
   mountain and pine-forest silhouettes behind a centered eyebrow and the
   oversized serif wordmark. */
export function Hero() {
  return (
    <section
      id="home"
      data-testid="hero"
      className="relative flex min-h-[650px] items-center justify-center overflow-hidden xl:min-h-[900px]"
    >
      <img
        src="https://picsum.photos/seed/outpost-hero/1920/1200"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="brand-gradient absolute inset-0 opacity-90" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[46%] bg-[#5b1fb8]/70"
        style={{
          clipPath:
            'polygon(0 62%, 11% 38%, 22% 64%, 34% 30%, 46% 60%, 58% 34%, 71% 62%, 84% 36%, 100% 58%, 100% 100%, 0 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[20%] bg-[#26063f]"
        style={{
          clipPath:
            'polygon(0 58%, 5% 28%, 10% 66%, 15% 24%, 20% 62%, 25% 30%, 30% 68%, 35% 22%, 40% 60%, 45% 28%, 50% 66%, 55% 24%, 60% 62%, 65% 30%, 70% 68%, 75% 26%, 80% 60%, 85% 32%, 90% 66%, 95% 24%, 100% 58%, 100% 100%, 0 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center text-white">
        <p className="text-[14px] font-medium uppercase tracking-[1px]">
          Plan a trip to Santorini Village
        </p>
        <h2 className="mt-4 font-display text-[50px] font-bold leading-none text-white md:text-[80px] xl:text-[120px]">
          Outpost
        </h2>
      </div>
    </section>
  )
}
