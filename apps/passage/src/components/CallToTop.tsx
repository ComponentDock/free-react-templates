import { FileText, Clock, Globe } from 'lucide-react'

export function CallToTop() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-heading">Visa Consultation</h3>
            <p className="text-sm text-muted">
              Get expert advice on visa applications and requirements for your destination.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-heading">Fast Processing</h3>
            <p className="text-sm text-muted">
              We ensure quick and efficient processing of all your immigration documents.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-heading">Worldwide Access</h3>
            <p className="text-sm text-muted">
              We provide immigration services for destinations all around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
