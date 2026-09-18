interface WantToWorkProps {
  subtitle: string
  title: string
}

export function WantToWork({ subtitle, title }: WantToWorkProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
          <div className="lg:w-7/12">
            <p
              className="text-[#04dbec] text-lg mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {subtitle}
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#28395a] leading-relaxed"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              {title}
            </h2>
          </div>
          <div className="lg:w-5/12 lg:text-right">
            <a
              href="#"
              className="inline-block bg-[#04dbec] text-white px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-[#03c5df] transition-colors"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
