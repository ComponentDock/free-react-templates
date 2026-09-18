import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="cta" className="py-16 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Dream Job is Waiting
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of job seekers who found their perfect career through Careerly. Start your
          search today.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Browse Jobs
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
