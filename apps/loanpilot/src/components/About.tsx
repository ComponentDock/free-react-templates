export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:items-start lg:px-6">
        {/* Left: text content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Thousands Of Customers Trust Our Company
          </h2>
          <p className="mt-6 leading-relaxed text-body-text-secondary">
            We are committed to providing the best financial solutions to our clients. With years of
            experience in the industry, we have built a reputation for reliability and trust. Our
            team of experts works tirelessly to ensure that every client receives personalized
            service and the best possible loan terms.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-bold text-navy">Our Company</h3>
              <p className="text-sm leading-relaxed text-body-text-secondary">
                Founded with a mission to make financial services accessible to everyone, we have
                grown to become one of the most trusted names in the industry.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-navy">Our Vision</h3>
              <p className="text-sm leading-relaxed text-body-text-secondary">
                To empower individuals and businesses with flexible financial solutions that help
                them achieve their goals and build a better future.
              </p>
            </div>
          </div>
          <a
            href="#about-more"
            className="mt-8 inline-block rounded-[2px] bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary-hover"
          >
            Learn More
          </a>
        </div>

        {/* Right: image */}
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/loan-about/600/500"
            alt="About Loanpilot"
            className="w-full rounded object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
