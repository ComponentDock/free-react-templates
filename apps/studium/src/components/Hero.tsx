export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-brand-dark pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/studium-hero/1920/1080)' }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 lg:flex-row">
        <div className="flex-1 text-white">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-teal">
            Welcome to Studium
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            We Are Online Platform For Make Learn
          </h1>
          <p className="mb-8 max-w-lg text-gray-300">
            Empowering learners worldwide with expert-led courses, flexible schedules, and
            industry-recognized certifications.
          </p>
          <div className="flex gap-4">
            <a
              href="#course"
              className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
            >
              Our Course
            </a>
            <a
              href="#about"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-brand-magenta">Register Now</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
            >
              Register Now
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="#signin" className="text-brand-blue hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
