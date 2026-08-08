import { MessageCircle } from 'lucide-react'

export function Cta() {
  return (
    <section className="bg-gray-950 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Your Transformation Starts Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Join Forgefit and get your first week free. No commitment, no contracts.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            Claim Free Week
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-700 px-8 py-4 text-base font-bold text-white transition-colors hover:border-primary-500 hover:text-primary-400"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Talk to a Trainer
          </a>
        </div>
      </div>
    </section>
  )
}
