export function AboutUs() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:px-8">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/bankcraft-about/600/400"
            alt="About our banking services"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">About Us</h4>
          <h2 className="mb-4 text-3xl font-bold text-ink">We Solve Your Financial Problem</h2>
          <p className="mb-6 text-gray-500">
            With over 20 years of experience in the financial industry, our team of expert advisors
            is dedicated to providing personalized solutions that meet your unique needs. We believe
            in building lasting relationships based on trust and transparency.
          </p>
          <p className="mb-8 text-gray-500">
            From personal banking to corporate finance, we offer a comprehensive suite of services
            designed to help you achieve your financial goals.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
