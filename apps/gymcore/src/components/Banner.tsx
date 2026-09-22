import { Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Banner() {
  return (
    <section className="bg-slate py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Contact Us
          </h2>
          <p className="mb-4 text-4xl font-bold text-white md:text-5xl">
            <Phone className="mr-2 inline h-8 w-8" />
            09 746 204
          </p>
          <p className="mb-6 max-w-md text-gray-400">
            Ready to start your fitness journey? Get in touch with our team and we will help you
            find the perfect plan.
          </p>
        </div>
        <div>
          <Button variant="primary" className="rounded-full px-8 py-3 text-sm font-semibold">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
