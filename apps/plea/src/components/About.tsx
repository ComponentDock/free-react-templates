import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/plea-about/600/400"
              alt="About Plea"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#1a1a1a] md:text-4xl">
              Best Counseling Funding Network Worldwide
            </h2>
            <p className="mb-4 text-gray-600">
              We are dedicated to providing accessible and professional counseling services to
              individuals and families worldwide. Our team of experienced counselors and legal
              professionals work together to offer comprehensive support.
            </p>
            <p className="mb-8 text-gray-600">
              With years of experience in the field, we understand the unique challenges our clients
              face. Our evidence-based approach ensures that every client receives the highest
              quality of care and guidance.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#589167] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a7a59]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
