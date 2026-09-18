import { HeartPulse, FlaskConical, ClipboardList, Activity } from 'lucide-react'

const features = [
  { icon: HeartPulse, label: 'Primary Care' },
  { icon: FlaskConical, label: 'Lab Test' },
  { icon: ClipboardList, label: 'Symptom Check' },
  { icon: Activity, label: 'Heart Rate' },
]

export function About() {
  return (
    <section id="about" className="bg-paper py-20" data-testid="about">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/healwise-about/600/500"
              alt="About Healwise"
              className="rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              About Healwise
            </p>
            <h2 className="mb-6 text-3xl font-bold text-ink md:text-4xl">
              We Are The Best Choice
              <br />
              For Your Health
            </h2>
            <p className="mb-6 leading-relaxed text-mist">
              Healwise is a leading healthcare provider dedicated to offering comprehensive medical
              services. With state-of-the-art facilities and a team of experienced professionals, we
              ensure every patient receives personalized care and the best treatment available.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <feature.icon size={20} className="text-brand" />
                  </div>
                  <span className="text-sm font-medium text-ink">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
