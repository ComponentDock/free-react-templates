import { CHEFS, CHEFS_SCRIPT, CHEFS_TITLE } from '../data'
import { BrandIcon, type BrandIconName } from './BrandIcon'
import { SectionHeading } from './SectionHeading'

const CHEF_SOCIALS: BrandIconName[] = ['twitter', 'facebook', 'google', 'instagram']

/* .staff — "Our Master Chef": 4 cards, each a 320px-tall cover photo
   (radius 5px), name 18px/600, role 14px rgba(0,0,0,.3), lorem, and a
   row of 4 circular social icon links. */
export function Chefs() {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading script={CHEFS_SCRIPT} title={CHEFS_TITLE} />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CHEFS.map((chef) => (
            <div key={chef.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${chef.seed}/600/800`}
                alt={chef.name}
                className="h-[320px] w-full rounded-[5px] object-cover object-top"
              />
              <div className="pt-4">
                <h3 className="text-[18px] font-semibold text-ink">{chef.name}</h3>
                <span className="mt-1 block text-[14px] text-black/30">{chef.position}</span>
                <p className="mt-3 text-[15px] leading-6 text-body">{chef.blurb}</p>
                <ul className="mt-4 flex justify-center gap-2.5">
                  {CHEF_SOCIALS.map((social) => (
                    <li key={social}>
                      <a
                        href={`#${social}`}
                        aria-label={`${chef.name} on ${social}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-mist text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <BrandIcon name={social} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
