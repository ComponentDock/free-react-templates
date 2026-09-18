export function CallToAction() {
  return (
    <section
      className="relative flex items-center justify-center py-24 md:py-28"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/crescent-cta/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      data-testid="call-to-action"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <h6 className="mb-3 text-sm font-bold uppercase tracking-widest text-white">
          A Place For You
        </h6>
        <h2 className="mb-8 max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl">
          Find a place to connect and grow through a small group, class, or regular gathering.
        </h2>
        <a
          href="#contact"
          className="inline-block rounded-[3px] border-2 border-brand bg-transparent px-8 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-brand"
        >
          Become A Member
        </a>
      </div>
    </section>
  )
}
