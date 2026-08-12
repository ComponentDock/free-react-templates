import { Button } from '@free-react-templates/ui'
import { CAUSES } from '../data'

/* .causes-area — "Our Major Causes": three .single-cause cards (1px #eee
   border) with a photo, the serif title (green on hover), a lorem blurb,
   a 10px green progress bar at 76%, the stats row (76% Funded / $7,689
   Pledged / 29 Days Remaining), and a "View Details" link + green
   "Donate Here" button. */
export function CausesSection() {
  return (
    <section id="causes" className="bg-white py-[150px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pb-[95px] text-center">
          <h2 className="font-display text-4xl font-semibold text-ink">Our Major Causes</h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.625] text-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {CAUSES.map((cause, index) => (
            <article key={index} className="border border-[#eeeeee]">
              <img
                src={cause.image}
                alt={cause.title}
                className="aspect-[7/5] w-full object-cover"
              />
              <div className="border-y border-[#eeeeee] bg-light p-7">
                <h3 className="font-display text-[21px] font-semibold text-ink transition-colors hover:text-accent">
                  {cause.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-body">{cause.blurb}</p>
                <div className="mt-5 h-[10px] w-full bg-white">
                  <div
                    role="progressbar"
                    aria-label="Funding progress"
                    aria-valuenow={cause.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-full bg-accent"
                    style={{ width: `${cause.progress}%` }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-[13px] font-medium text-ink">
                  <span>{cause.progress}% Funded</span>
                  <span>{cause.pledged} Pledged</span>
                  <span>{cause.days} Days Remaining</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-7">
                <a
                  href="#donation"
                  className="text-[13px] font-medium text-accent transition-colors hover:underline"
                >
                  View Details
                </a>
                <Button
                  size="sm"
                  className="h-[40px] rounded-none border border-accent bg-accent px-[30px] text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:border-accent hover:bg-transparent hover:text-accent"
                >
                  Donate Here
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
