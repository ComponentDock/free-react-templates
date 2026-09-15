export function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src="https://picsum.photos/seed/proxy-about/800/500"
              alt="About the agent"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="mb-4 font-serif text-2xl font-bold text-black">About Me</h3>
            <p className="mb-4 text-gray-600">
              I'm a dedicated real estate agent with over a decade of experience in the Houston
              market. My passion is connecting people with homes they love, backed by deep market
              knowledge and a commitment to every client's unique needs.
            </p>
            <p className="mb-6 text-gray-600">
              From first-time buyers to seasoned investors, I provide honest guidance, transparent
              communication, and results that speak for themselves. Let's find your next chapter
              together.
            </p>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-sky-500">
              — John Doe
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
