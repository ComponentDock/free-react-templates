export function AboutSection() {
  return (
    <section id="about" aria-label="About">
      {/* Parallax image */}
      <div
        className="h-64 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://picsum.photos/seed/tidal-about-parallax/1920/600')",
        }}
      />

      {/* About content */}
      <div className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">About Us</p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary">
              Make Your Tour Memorable and Safe With Us
            </h2>
          </div>
          <div>
            <p className="leading-relaxed text-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
