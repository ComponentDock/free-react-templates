import { Leaf, Award } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: images + badge */}
          <div className="relative mx-auto max-w-md">
            <img
              src="https://picsum.photos/seed/verdure-about-1/600/700"
              alt="Landscaping work"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/verdure-about-2/300/300"
              alt="Gardening detail"
              className="absolute -bottom-6 -right-6 h-48 w-48 rounded-lg border-4 border-white object-cover shadow-xl"
            />
            <div className="absolute -top-4 -left-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-green-600 text-center text-white shadow-lg">
              <span className="text-2xl font-bold leading-none">25+</span>
              <span className="mt-1 text-xs font-medium leading-tight">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-green-600">
              Welcome to Verdure
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              We&apos;re Leader In Agricultural Market
            </h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              With over 25 years of experience in the landscaping and gardening industry, we have
              built a reputation for excellence. Our team of skilled professionals is committed to
              delivering outstanding results that exceed expectations. We combine modern techniques
              with traditional expertise to create outdoor spaces that are both beautiful and
              sustainable.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Biography Safe</h3>
                  <p className="text-sm text-gray-500">
                    Our eco-friendly practices ensure your garden thrives while protecting the
                    natural environment for future generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Award className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Awards Winning</h3>
                  <p className="text-sm text-gray-500">
                    Recognized for our outstanding contributions to landscape design and sustainable
                    gardening practices across the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
