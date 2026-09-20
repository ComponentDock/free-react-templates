export interface DarkAboutProps {
  className?: string
}

export function DarkAbout({ className }: DarkAboutProps) {
  return (
    <section className={`bg-[#222] py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Image */}
        <div>
          <img
            src="https://picsum.photos/seed/forum-dark-about/600/400"
            alt="Conference event"
            className="h-full w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#8ab92d]">
            24/7 Support system
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Our Conference Provides Great Support
          </h2>
          <p className="mb-3 text-sm font-medium text-white/80">
            Get the best experience with our dedicated support team available around the clock.
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}
