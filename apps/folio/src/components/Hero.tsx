/**
 * Full-viewport hero with dark overlay, subtitle, and massive Playfair Display
 * author name. Background image via picsum.photos placeholder.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-gray-900 pb-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/folio-hero/1920/1080')",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
        <p className="mb-4 text-lg font-light tracking-wide text-white/80 md:text-xl">
          Read This If You Want To Take Great Photographs.
        </p>
        <h1 className="font-heading text-[11vw] font-bold leading-tight text-white md:text-[120px]">
          Folio Author
        </h1>
      </div>
    </section>
  )
}
