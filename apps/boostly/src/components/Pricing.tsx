import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic Plan',
    price: '700',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
  {
    name: 'Basic Plan',
    price: '700',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
  {
    name: 'Basic Plan',
    price: '700',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
] as const

/** Pricing: white section with an orange band behind the top half of the
 *  cards; centered white heading + blurb on the band; three white cards
 *  (bordered pill plan name, orange $700 with superscript dollar, divider,
 *  lilac feature list, orange Get Started Now button with the black wipe
 *  hover). The middle card carries the highlighted shadow. */
export function Pricing() {
  return (
    <section id="pricing" className="relative pb-[100px] pt-[120px]">
      <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-[53%] bg-brand" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-[70px] max-w-3xl text-center">
          <h2 className="mb-[22px] font-heading text-[31px] font-bold leading-[1.4] text-white lg:text-[46px]">
            Affordable pricing plan
          </h2>
          <p className="font-body text-lg leading-normal text-white">
            Content marketing is nothing but offering users value. It is not just about traffic
            minion consectetur adipiscing elitd do eiusmod tempor incididun.
          </p>
        </div>
        <div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={`${plan.name}-${index}`}
              className={cn(
                'bg-white p-[35px_40px] text-center transition-shadow duration-300',
                index === 1
                  ? 'shadow-[0px_15px_25px_rgba(168,96,0,0.1)]'
                  : 'hover:shadow-[0px_15px_25px_rgba(168,96,0,0.1)]',
              )}
            >
              <div className="mb-[23px]">
                <span className="inline-block rounded-[20px] border border-ink px-[18px] py-1 font-semibold text-ink">
                  {plan.name}
                </span>
              </div>
              <div className="mb-[25px] border-b border-[#E7E6EB] pb-[26px]">
                <h3 className="relative mb-5 inline-block font-heading text-[40px] font-bold text-brand">
                  <span className="absolute -left-[17px] top-0 text-[17px] font-normal">$</span>
                  {plan.price}
                </h3>
                <p className="font-body text-base text-body">
                  Content marketing is nothing but offering users value.
                </p>
              </div>
              <div>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className={cn(
                        'text-[17px] font-light text-feature',
                        featureIndex === plan.features.length - 1 ? 'mb-[30px]' : 'mb-[23px]',
                      )}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group relative inline-flex overflow-hidden rounded-[5px] bg-brand px-[43px] py-[30px] font-body text-xl font-medium leading-none text-white"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative">Get Started Now</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
