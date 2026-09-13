import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="hero" className="flex items-center bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
            Committed to <span className="text-brand">Superior</span> Quality and Results
          </h1>
          <p className="mt-6 text-lg text-body">
            We deliver world-class construction and engineering solutions that exceed expectations.
            Our team of certified professionals brings decades of experience to every project.
          </p>
          <Button
            variant="primary"
            className="mt-8 rounded bg-brand px-8 py-3 text-sm font-bold text-white hover:bg-brand-dark"
          >
            View project
          </Button>
        </div>
      </div>
    </section>
  )
}
