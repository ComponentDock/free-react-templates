import { ServiceGrid } from './Guarantee'
import { whyChooseUs } from '../data'

export function WhyChooseUs() {
  return (
    <section aria-label="Why Choose Us" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">Why Choose Us?</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-base font-light text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-14">
          <ServiceGrid services={whyChooseUs} />
        </div>
      </div>
    </section>
  )
}
