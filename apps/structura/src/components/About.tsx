export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-lime-accent">
              Welcome to Interior
            </h2>
            <h3 className="mt-3 text-3xl font-bold text-charcoal">
              We Are The Leader In The Architectural
            </h3>
            <p className="mt-6 leading-relaxed text-gray-600">
              For each project we establish relationships with our partners we know will help us
              create added value for your project while bringing together the public and private
              sectors. We create sector-overarching links to gather knowledge and deliver
              exceptional design solutions.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-charcoal">
                  35<span className="text-lime-accent">+</span>
                </h4>
                <p className="mt-1 text-sm text-gray-500">Experience Years</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-charcoal">
                  78<span className="text-lime-accent">+</span>
                </h4>
                <p className="mt-1 text-sm text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/structura-about/600/500"
              alt="Interior design showcase"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
