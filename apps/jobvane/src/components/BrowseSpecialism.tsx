export function BrowseSpecialism() {
  return (
    <section
      className="relative flex min-h-[400px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jobvane-browse/1920/800)' }}
    >
      <div className="absolute inset-0 bg-primary-600/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center text-white lg:px-8">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Browse Job by Specialism</h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/80">
          Explore job opportunities across different specialisms and find the perfect role that
          matches your expertise.
        </p>
      </div>
    </section>
  )
}
