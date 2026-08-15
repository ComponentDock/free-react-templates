export function CtaBanner() {
  return (
    <section
      aria-label="Charter call to action"
      className="bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/marina-cta/1920/900)' }}
    >
      <div className="bg-overlay">
        <div className="mx-auto max-w-[720px] px-4 py-28 text-center text-white">
          <p className="font-body text-lg font-light leading-relaxed">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <a
            href="#booking"
            className="mt-10 inline-block bg-brand px-10 py-4 font-heading text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-brand/90"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
