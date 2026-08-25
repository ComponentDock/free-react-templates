import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Welcome() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left: full-height image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://picsum.photos/seed/orbiter-welcome/800/600"
          alt="Welcome to Orbiter"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Right: text + button */}
      <div className="flex w-full items-end bg-white p-10 md:w-1/2 md:p-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-secondary">
            About Us
          </p>
          <p className="mb-6 text-body">
            We are a team of passionate professionals dedicated to helping businesses achieve their
            full potential through innovative digital solutions.
          </p>
          <Button className="group inline-flex items-center gap-2 rounded-none border-2 border-heading bg-heading px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-heading">
            About us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
