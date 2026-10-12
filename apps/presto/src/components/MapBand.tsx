/**
 * The map band. The reference repeats its features-band title here verbatim, so
 * this band keeps the same heading and blurb treatment above a full-width,
 * lazy-loaded embedded map of the app's own datacentre region.
 */
export function MapBand() {
  return (
    <section id="map" aria-label="Server locations" className="bg-surface px-5 py-24 md:py-[100px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-[90px] max-w-[700px] text-center">
          <h2 className="font-heading text-[31px] font-semibold text-ink md:text-[35px]">
            Cloud load balancing
          </h2>
          <p className="mt-4 text-base text-title-muted">
            Six regions, one network. Pick the closest edge and requests are routed there
            automatically.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px]">
        <iframe
          title="Presto datacentre map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-122.55%2C37.70%2C-122.30%2C37.85&layer=mapnik"
          loading="lazy"
          sandbox="allow-scripts"
          className="h-[600px] w-full border-0"
        />
      </div>
    </section>
  )
}
