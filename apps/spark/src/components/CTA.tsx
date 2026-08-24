import { ArrowDown } from 'lucide-react'

export function CTA() {
  return (
    <section id="download" className="bg-primary-500 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Our App Available For Any Device
        </h2>
        <p className="mb-8 text-lg text-primary-100">
          Download Spark on your phone, tablet, or desktop and start transforming your workflow
          today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary-600 transition-colors hover:bg-primary-50"
          >
            <ArrowDown className="h-4 w-4" />
            Download for iOS
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary-600"
          >
            <ArrowDown className="h-4 w-4" />
            Download for Android
          </a>
        </div>
      </div>
    </section>
  )
}
