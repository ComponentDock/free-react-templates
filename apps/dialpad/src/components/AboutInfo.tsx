import { Button } from '@free-react-templates/ui'

export function AboutInfo() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 sm:px-6">
        <img
          src="https://picsum.photos/seed/dialpad-about/800/600"
          alt="Customer support team"
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl font-bold leading-snug text-ink">Responsible Customer Support</h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            We focus on delivering reliable, empathetic customer support that builds lasting
            relationships. Our trained agents handle every inquiry with care, ensuring your
            customers feel valued and heard at every step.
          </p>
          <Button className="mt-6 rounded-full bg-gradient-to-r from-sky to-brand px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:opacity-90">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
