import { Button } from '@free-react-templates/ui'

export default function Welcome() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/medprime-doctor/600/500"
              alt="Doctor at Medprime clinic"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <span className="text-brand-primary text-sm font-medium uppercase tracking-wider">
              Welcome to
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mt-2 mb-6">
              Modern Clinic.
            </h2>
            <p className="text-brand-body leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button
              className="bg-brand-primary text-white px-8 py-3 rounded font-semibold text-sm hover:bg-brand-primary-dark transition-colors"
              onClick={() => {
                document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Our Departments
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
