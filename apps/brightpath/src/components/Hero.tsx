export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-40 flex items-center min-h-[70vh]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/brightpath-hero/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand-light/80" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We Rank the Best Courses on the Web
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Discover thousands of courses taught by expert instructors. Build new skills, advance
            your career, and explore your passions with our comprehensive learning platform.
          </p>
          <form className="flex w-full bg-white rounded overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search Courses"
              className="flex-1 px-4 py-3 text-sm text-heading outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-brand to-brand-light text-white px-6 py-3 font-semibold text-sm uppercase hover:from-brand-dark hover:to-brand transition-all"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
