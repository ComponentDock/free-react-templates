/* Fixed full-height image panel on the right half of the viewport, mirroring
   the reference `.featured-image-holder` with its cover background photo
   (seeded picsum placeholder — the original's demo image is not copied).
   Decorative: hidden from assistive tech, hidden below lg so the blog
   column stays readable on small screens. */
export function FeaturedImage() {
  return (
    <div
      aria-hidden="true"
      className="featured-image fixed right-0 top-0 z-0 hidden h-full w-[calc(50%-50px)] bg-cover bg-center lg:block"
      style={{ backgroundImage: "url('https://picsum.photos/seed/scribble-1/900/1200')" }}
    />
  )
}
