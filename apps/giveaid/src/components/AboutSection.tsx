import { Heart } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* Left: illustration + CTA */}
          <div className="md:w-5/12">
            <div className="mb-6 flex justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-brand/10">
                <Heart className="h-32 w-32 text-brand" strokeWidth={1} />
              </div>
            </div>
            <p className="mb-6 text-center text-text-gray">
              We believe every child deserves a caring family. Our mission is to connect loving
              families with children who need them most, making the adoption journey smooth and
              joyful.
            </p>
            <div className="text-center">
              <a
                href="#"
                className="inline-block rounded border-2 border-brand px-6 py-3 font-semibold text-brand hover:bg-brand hover:text-white"
              >
                Adopt a child now
              </a>
            </div>
          </div>
          {/* Right: heading for accordion */}
          <div className="md:w-7/12">
            <h2 className="mb-8 text-3xl font-bold text-ink">
              Steps to adopt &amp; foster a child
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
