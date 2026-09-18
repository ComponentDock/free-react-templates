import { Briefcase } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center bg-dark-overlay pt-20">
      <img
        src="https://picsum.photos/seed/talentgate-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-dark-overlay/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm text-brand-cyan">
          <Briefcase size={16} />
          We have 850,000 great job offers
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Your Dream Job is Waiting
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-300">
          Find the perfect job that matches your skills and passion. Join thousands of professionals
          who found their dream careers.
        </p>
        <a
          href="#find-job"
          className="inline-block rounded-full bg-brand-blue px-8 py-3 font-medium text-white transition hover:bg-brand-blue/90"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
