import { Plus } from 'lucide-react'

interface WorkItem {
  title: string
  image: string
}

const WORKS: WorkItem[] = [
  {
    title: 'Social App',
    image: 'https://picsum.photos/seed/axiom-work-1/600/520',
  },
  {
    title: 'iOS Design System',
    image: 'https://picsum.photos/seed/axiom-work-2/600/520',
  },
  {
    title: 'Product Packaging',
    image: 'https://picsum.photos/seed/axiom-work-3/600/520',
  },
  {
    title: 'Uber App Design',
    image: 'https://picsum.photos/seed/axiom-work-4/600/520',
  },
]

function WorkCard({ work }: { work: WorkItem }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="aspect-[6/5] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href="#work"
            aria-label={`View details of ${work.title}`}
            className="inline-block rounded-[30px] border border-white p-3 text-white transition-colors hover:border-transparent hover:bg-accent"
          >
            <Plus className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <h3 className="relative pb-5 pl-[68px] pt-[29px] text-[26px] font-normal text-ink before:absolute before:bottom-5 before:left-9 before:h-[125px] before:w-[2px] before:bg-yellow">
        {work.title}
      </h3>
    </article>
  )
}

/* Works grid recreated from the source's staggered 2x2 layout: a "Projects
   / Our Works" title block, four work cards (second row offset right with
   an 80px top gap), each with a blue hover overlay and a 2x125px yellow
   heading bar, and a "More Products" outline pill below. */

export function Works() {
  return (
    <section id="work" aria-label="Works" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-body">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink lg:text-[46px] lg:leading-[58px]">
            Our Works
          </h2>
        </div>
        <div className="mt-16 grid gap-x-10 lg:grid-cols-2">
          <div className="space-y-10">
            <WorkCard work={WORKS[0]!} />
            <WorkCard work={WORKS[1]!} />
          </div>
          <div className="space-y-10 lg:ml-[16.66%] lg:pt-20">
            <WorkCard work={WORKS[2]!} />
            <WorkCard work={WORKS[3]!} />
          </div>
        </div>
        <div className="mt-14 text-center">
          <a
            href="#work"
            className="inline-block rounded-[30px] border border-accent px-14 py-[19px] text-sm text-accent transition-colors hover:bg-accent hover:text-white"
          >
            More Products
          </a>
        </div>
      </div>
    </section>
  )
}
