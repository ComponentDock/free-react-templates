/**
 * The head is two lines and nothing else: a gold uppercase label and the
 * heaviest type on the page. The label is a `<p>` because it is a caption, not
 * a section title — the addresses below are the page's only h2s.
 */
export function ListingHead() {
  return (
    <header className="mb-7">
      <p className="m-0 text-[14px] leading-[17px] font-bold tracking-[.1em] text-gold-deep uppercase">
        Featured listings
      </p>
      <h1 className="mt-[6px] mb-0 text-[clamp(28px,3.8vw,42px)] leading-[1.1] font-extrabold tracking-[-.02em]">
        Homes for sale in Coral Bay
      </h1>
    </header>
  )
}
