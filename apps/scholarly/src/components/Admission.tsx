import { Button } from '@free-react-templates/ui'

export function Admission() {
  return (
    <section id="admissions" className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src="https://picsum.photos/seed/scholarly-admission/800/600"
          alt="Professor in classroom"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center bg-navy-900 p-8 md:w-1/2 md:p-12">
        <h2 className="mb-4 font-display text-3xl font-bold text-white">Apply for Admission</h2>
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-400">
          Applications are now open
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Join our community of scholars and embark on a transformative educational journey. Our
          programs are designed to challenge and inspire, preparing you for a successful future.
        </p>
        <div>
          <Button className="rounded bg-primary-400 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-500">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  )
}
