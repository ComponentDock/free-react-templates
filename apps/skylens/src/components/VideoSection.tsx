import { Play } from 'lucide-react'

const steps = [
  { num: '01', text: 'We plan the flight path and capture requirements for your project.' },
  { num: '02', text: 'Our certified pilots execute the drone flight with precision.' },
  { num: '03', text: 'We edit and deliver professional aerial imagery and video.' },
]

export function VideoSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/skylens-video/1920/800)',
        }}
      />
      <div className="absolute inset-0 bg-heading/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-sans text-4xl font-bold uppercase text-white">How We Work</h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/80">
              Our streamlined process ensures you get professional aerial content with minimal
              hassle, from planning to final delivery.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-80"
            >
              Start a Project
            </a>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-sans text-sm font-bold text-white">
                  {step.num}
                </span>
                <p className="pt-2 text-base leading-relaxed text-white/90">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            aria-label="Play video"
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/10 transition-colors hover:bg-white/20"
          >
            <Play className="h-6 w-6 text-white" fill="white" />
          </button>
        </div>
      </div>
    </section>
  )
}
