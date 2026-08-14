import { Building2, FileText, Globe } from 'lucide-react'
import { STATS } from '../data'
import { SearchWidget } from './SearchWidget'

const STAT_ICONS = {
  globe: Globe,
  building: Building2,
  file: FileText,
}

/* 800px gradient hero: background photo under a #207dff → #a16ae8
   gradient overlay, centered lead line + headline, three stat counters
   (46 Countries / 450 Companies / 80000 Active Employees) and the tabbed
   search widget. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/vocare-hero/1600/900')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-start to-brand-end" />
      <div className="relative mx-auto flex min-h-[900px] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center lg:min-h-[800px]">
        <p className="text-[18px] text-white/80">Find Job, Employment, and Career Opportunities</p>
        <h1 className="mt-3 max-w-3xl text-[40px] font-normal leading-[1.2] text-white md:text-[54px]">
          The Easiest Way to Get Your New Job
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {STATS.map((stat) => {
            const Icon = STAT_ICONS[stat.icon]
            return (
              <div key={stat.label} className="flex items-center gap-4 text-left">
                <Icon className="h-[60px] w-[60px] text-white" aria-hidden="true" />
                <div>
                  <p className="text-[30px] font-bold leading-none text-white">{stat.value}</p>
                  <p className="mt-1 text-white/80">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 w-full max-w-4xl">
          <SearchWidget />
        </div>
      </div>
    </section>
  )
}
