import { ArrowRight } from 'lucide-react'

const bulletPoints = [
  'Expert financial analysis and reporting',
  'Strategic budget planning and optimization',
  'Tax preparation and compliance',
  'Business growth consulting',
] as const

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column - Image */}
          <div>
            <img
              src="https://picsum.photos/seed/reckoner-about/600/400"
              alt="Professional bookkeeping services"
              className="w-full rounded-lg object-cover shadow-lg"
              width={600}
              height={400}
            />
          </div>

          {/* Right column - Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-smoke">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Mindful Planning of Monetary Spending and Saving
            </h2>
            <p className="mt-6 text-base leading-relaxed text-smoke">
              We are a team of experienced bookkeeping professionals dedicated to helping businesses
              manage their finances effectively. Our comprehensive services ensure accurate
              record-keeping, strategic financial planning, and compliance with all regulatory
              requirements.
            </p>
            <p className="mt-4 text-base leading-relaxed text-smoke">
              With years of experience in the industry, we understand the unique challenges
              businesses face when it comes to financial management. Our tailored solutions are
              designed to meet your specific needs and help your business grow.
            </p>

            {/* 2x2 bullet grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <ArrowRight
                    className="mt-1 h-5 w-5 shrink-0 text-primary-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-ink">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
