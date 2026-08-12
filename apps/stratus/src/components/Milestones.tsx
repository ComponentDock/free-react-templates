import { Award, Globe, Server, Users, type LucideIcon } from 'lucide-react'
import { MILESTONES, type MilestoneIcon } from '../data'

/* Milestones band recreated from the ColorLib "Cloud83" milestones: a solid
   slate-blue (#556080) strip with four stats, each an icon, a large number,
   and a label (31k Clients / 98k Domains / 14k Awards / 362 VPS). */

const milestoneIcons: Record<MilestoneIcon, LucideIcon> = {
  users: Users,
  globe: Globe,
  award: Award,
  server: Server,
}

export function Milestones() {
  return (
    <section id="milestones-section" className="bg-slate py-[125px]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {MILESTONES.map((milestone) => {
          const Icon = milestoneIcons[milestone.icon]
          return (
            <div key={milestone.label} className="text-center text-white">
              <Icon
                className="mx-auto h-12 w-12 text-white/90"
                aria-hidden="true"
                strokeWidth={1.4}
              />
              <p className="mt-4 text-[44px] font-bold">{milestone.value}</p>
              <p className="mt-1 text-[16px] text-white/80">{milestone.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
