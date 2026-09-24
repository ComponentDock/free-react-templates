import { cn } from '@free-react-templates/ui'

interface HeroBannerProps {
  className?: string
}

const departments = ['Neurology', 'Ophthalmology', 'X-Ray', 'Surgical', 'Cardiology', 'Dental']

export function HeroBanner({ className }: HeroBannerProps) {
  return (
    <section
      className={cn('relative w-full h-[500px] md:h-[600px] overflow-hidden', className)}
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/healix-hero/1920/1080')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
          The Most Valuable Thing is Your Health
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-2xl text-gray-200">
          We provide world-class medical services with experienced doctors and state-of-the-art
          facilities for the best patient care.
        </p>

        {/* Appointment search form */}
        <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="hero-doctor" className="sr-only">
                Select Doctor
              </label>
              <select
                id="hero-doctor"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 text-sm"
              >
                <option value="">Select Doctor</option>
                <option value="dr-smith">Dr. Smith</option>
                <option value="dr-jones">Dr. Jones</option>
                <option value="dr-williams">Dr. Williams</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="hero-department" className="sr-only">
                Select Department
              </label>
              <select
                id="hero-department"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 text-sm"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept.toLowerCase()}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-brand-blue text-white px-6 py-2 rounded font-semibold text-sm hover:bg-brand-blue-light transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
