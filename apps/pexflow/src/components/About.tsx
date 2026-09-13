import { Shield, Users } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/pexflow-about/600/450"
            alt="Construction team at work"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">About Us</p>
          <h2 className="text-3xl font-bold text-heading">Engineering Your Dreams With Us</h2>
          <p className="mt-4 text-body">
            Pexflow is a leading construction and engineering company dedicated to delivering
            superior quality projects. With decades of experience, we transform visions into
            reality.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Shield className="mt-1 h-8 w-8 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-heading">Certified Company</h3>
                <p className="mt-1 text-sm text-muted">
                  ISO 9001 certified with industry-leading standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-8 w-8 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-heading">Experience Employees</h3>
                <p className="mt-1 text-sm text-muted">
                  Over 200 skilled professionals on our team.
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            className="mt-8 rounded bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
