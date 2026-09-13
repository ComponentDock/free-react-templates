import { ButtonLink } from '@free-react-templates/ui'
import { Shield, Zap } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 sm:px-6">
        <div>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Welcome to the Pest Control Services Company
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            We provide professional pest control solutions for residential and commercial
            properties. Our team of certified experts uses safe, effective methods to eliminate
            pests and prevent future infestations.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-ink">How Does It Work?</h3>
                <p className="mt-1 text-sm text-mist">
                  We inspect, treat, and monitor — our three-step process ensures lasting results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-ink">Services We Offer</h3>
                <p className="mt-1 text-sm text-mist">
                  From routine inspections to emergency treatments, we cover all pest control needs.
                </p>
              </div>
            </div>
          </div>

          <ButtonLink
            href="#services"
            className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
          >
            About Us
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <img
            src="https://picsum.photos/seed/bugguard-about1/400/500"
            alt="Pest control technician at work"
            className="col-span-1 h-64 w-full rounded-lg object-cover md:h-80"
          />
          <img
            src="https://picsum.photos/seed/bugguard-about2/400/240"
            alt="Pest inspection"
            className="col-span-1 h-[7.5rem] w-full rounded-lg object-cover md:h-[9.5rem]"
          />
          <img
            src="https://picsum.photos/seed/bugguard-about3/400/240"
            alt="Pest treatment equipment"
            className="col-span-1 h-[7.5rem] w-full rounded-lg object-cover md:h-[9.5rem]"
          />
        </div>
      </div>
    </section>
  )
}
