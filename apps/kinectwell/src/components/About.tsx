import { Check } from 'lucide-react'
import { aboutBlurb, aboutFeatures, aboutImageSeed, aboutTitle, learnMoreLabel } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={`https://picsum.photos/seed/${aboutImageSeed}/520/420`}
            alt="About Kinectwell physical therapy"
            loading="lazy"
            className="w-full max-w-[520px] rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{aboutTitle}</h2>
          <p className="mt-5 text-[15px] leading-7 text-body">{aboutBlurb}</p>
          <ul className="mt-6 space-y-3">
            {aboutFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Check aria-hidden="true" className="h-3 w-3 text-brand" />
                </span>
                <span className="text-sm text-heading">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="#services"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-brand px-7 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {learnMoreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
