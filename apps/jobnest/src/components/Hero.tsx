import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #040E27 0%, #001D38 100%)' }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-brand">4536+ Jobs listed</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Find your Dream Job
          </h1>
          <p className="max-w-lg text-gray-300">
            We've connected thousands of job seekers with top employers. Your next career move
            starts here — search thousands of openings and find the perfect fit for your skills.
          </p>
          <Button variant="primary" size="lg" className="bg-brand text-white hover:bg-brand-hover">
            Upload your Resume
          </Button>
        </div>

        {/* Right decorative element */}
        <div className="hidden items-center justify-center md:flex">
          <div
            className="h-80 w-80 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #00D363 0%, transparent 70%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
