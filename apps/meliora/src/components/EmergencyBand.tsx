import { emergencyImage } from '../data'

export function EmergencyBand() {
  return (
    <section
      id="donate"
      aria-label="Emergency care"
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{ backgroundImage: `url(${emergencyImage.src})` }}
    >
      <div className="absolute inset-0 bg-plum/85" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
          They need your help
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-white/90">
          Every donation brings food, medicine and shelter to a family in crisis. Your contribution
          today can be the difference between despair and hope.
        </p>
        <p className="mt-4 text-lg font-light leading-relaxed text-white/90">
          Join our volunteers on the ground and help us reach the communities that need it most,
          right now.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#donate"
            className="inline-block rounded-full bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-sweep"
          >
            Donate in a Case
          </a>
          <a
            href="#join"
            className="inline-block rounded-full border border-white bg-transparent px-10 py-4 text-base font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            Join with Us
          </a>
        </div>
      </div>
    </section>
  )
}
