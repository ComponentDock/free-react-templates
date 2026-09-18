import { Button } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20" aria-label="About">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/structa-about/800/600"
              alt="Construction workers on site"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-heading md:text-4xl">
              Complete solution of large projects
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              We provide end-to-end construction solutions for projects of all scales. Our team of
              experienced professionals ensures every detail is handled with precision, from initial
              planning to final delivery.
            </p>
            <p className="mt-4 text-mist leading-relaxed">
              With decades of experience in the industry, we have built a reputation for delivering
              high-quality results on time and within budget. Our commitment to excellence drives
              everything we do.
            </p>
            <Button className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
