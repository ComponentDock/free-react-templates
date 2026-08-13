/** Orange CTA band (reference `.section.bg-primary`): white heading + lead
 *  on the left, outline-white Download button on the right. */
export function CtaBand() {
  return (
    <section className="bg-primary-600 py-[7rem]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="lg:max-w-3xl">
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
            Get Started With Metalwork Free Template
          </h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-white/90">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center border-2 border-white px-4 py-3 text-[13px] font-black tracking-[0.2em] text-white uppercase transition-colors hover:bg-white hover:text-black"
        >
          Download This Template
        </a>
      </div>
    </section>
  )
}
