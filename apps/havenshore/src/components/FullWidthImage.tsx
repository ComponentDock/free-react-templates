export function FullWidthImage() {
  return (
    <section className="overflow-hidden">
      <img
        src="https://picsum.photos/seed/havenshore-divider/1600/500"
        alt="Scenic ocean view"
        className="h-[300px] w-full object-cover md:h-[400px]"
        loading="lazy"
      />
    </section>
  )
}
