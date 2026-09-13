import { Button } from '@free-react-templates/ui'

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">
            Our Experience
          </p>
          <h2 className="text-3xl font-bold text-heading">We Are Experience in Construction</h2>
          <p className="mt-4 text-body">
            With over two decades of hands-on experience in construction and engineering, Pexflow
            has built a reputation for reliability, quality, and innovation.
          </p>
          <div className="mt-6 inline-block rounded-lg bg-brand/10 px-8 py-4">
            <span className="text-3xl font-bold text-brand">20</span>
            <span className="ml-2 text-body">Years of Experience</span>
          </div>
          <div className="mt-6">
            <Button
              variant="primary"
              className="rounded bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Contact us
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/pexflow-exp/600/450"
            alt="Construction experience"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
