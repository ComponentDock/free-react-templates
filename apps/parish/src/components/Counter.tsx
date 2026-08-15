import { Play } from 'lucide-react'
import { counter, stats } from '../data'
import { SectionHeading } from './SectionHeading'

export function Counter() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-[1250px] items-center gap-10 px-4 lg:grid-cols-2">
        <div className="relative">
          <img
            src={counter.image}
            alt="Church community gathered together"
            className="h-[420px] w-full object-cover"
          />
          <a
            href="#sermons"
            aria-label="Watch a sermon"
            className="absolute top-1/2 left-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-colors hover:text-brand"
          >
            <Play className="ml-1 h-9 w-9" />
          </a>
        </div>
        <div>
          <SectionHeading label="About Us" heading={counter.heading} />
          <p className="mb-10 text-base leading-[1.8] text-body">{counter.body}</p>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <strong className="block font-heading text-[28px] font-semibold text-brand">
                  {stat.target.toLocaleString('en-US')}
                </strong>
                <span className="mt-1 block text-sm text-heading/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
