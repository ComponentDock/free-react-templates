import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/yoga-about1/600/400"
            alt="Yoga session outdoors"
            className="rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/yoga-about2/300/200"
            alt="Meditation pose"
            className="absolute -bottom-6 -right-6 rounded-lg object-cover shadow-xl sm:w-48"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">About Us</p>
          <h2 className="mt-3 text-3xl font-bold text-heading">
            When you believe in yourself, you can do anything
          </h2>
          <blockquote className="mt-4 border-l-4 border-brand pl-4 text-lg italic text-heading">
            "Yoga is the journey of the self, through the self, to the self."
          </blockquote>
          <p className="mt-4 text-sm leading-relaxed text-text">
            Fitnest is a premier yoga teacher training school offering certified 100-hour, 200-hour,
            and 300-hour programs. Our experienced instructors guide you through the ancient art and
            science of yoga, helping you build strength, flexibility, and inner peace. Whether you
            are a beginner or an advanced practitioner, our studio provides a welcoming environment
            for your personal transformation.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
