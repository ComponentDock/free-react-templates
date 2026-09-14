export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/venture-cta/1920/400)' }}
    >
      <div className="absolute inset-0 bg-[#010E21]/90" />
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-8/12">
            <h2
              className="text-3xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Send us a message if you have an issue with your order.
            </h2>
          </div>
          <div className="lg:w-4/12 lg:text-right">
            <a
              href="#"
              className="inline-block bg-[#0b1416] text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#1a2a2e] transition-colors shadow-lg"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
