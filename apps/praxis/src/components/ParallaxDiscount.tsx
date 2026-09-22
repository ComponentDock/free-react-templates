export function ParallaxDiscount() {
  return (
    <section
      className="relative flex min-h-[350px] items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/praxis-parallax/1600/500')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-right sm:px-6">
        <div className="ml-auto max-w-md">
          <div className="mb-2 flex items-baseline justify-end gap-1">
            <span className="text-6xl font-black text-coral-400">30</span>
            <span className="text-3xl font-bold text-coral-400">%</span>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">Only in August</h3>
          <p className="mb-4 text-sm text-gray-300">
            Take advantage of our limited-time summer discount on select procedures. Book your
            consultation today.
          </p>
          <a
            href="#appointment"
            className="inline-block rounded-full border-2 border-white px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
