import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-cta-blue py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-2">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Looking for a Job?</h2>
          <Button variant="primary" size="lg" className="bg-brand text-white hover:bg-brand-hover">
            Browse Job
          </Button>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Looking for a Expert?</h2>
          <Button variant="primary" size="lg" className="bg-brand text-white hover:bg-brand-hover">
            Post a Job
          </Button>
        </div>
      </div>
    </section>
  )
}
