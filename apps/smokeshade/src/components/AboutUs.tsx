export function AboutUs() {
  return (
    <section id="about" aria-label="About Us" className="bg-[#f8f8f8] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/smokeshade-about/600/400"
          alt="About us"
          className="w-full rounded-lg object-cover"
        />
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#e32879]">
            About us
          </p>
          <h2 className="mb-6 text-3xl font-bold text-[#0d0a27]">About Story</h2>
          <p className="mb-4 text-[#5c5c5c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-6 text-[#5c5c5c]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-[#e32879] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41f65]"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
