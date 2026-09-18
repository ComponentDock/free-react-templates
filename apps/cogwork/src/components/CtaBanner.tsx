export function CtaBanner() {
  return (
    <section className="bg-[#fd5f00] py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">Create, Enhance and Sustain</h2>
            <p className="text-white/80">
              Far far away, behind the word mountains, far from the countries Vokalia.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#fd5f00]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
