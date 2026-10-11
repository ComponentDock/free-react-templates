import { cn } from '@free-react-templates/ui'
import { Band, GroupLabel } from './Band'

const BARS = [
  { id: 'success', width: 25, tone: 'bg-kit-success' },
  { id: 'info', width: 50, tone: 'bg-kit-info' },
  { id: 'warning', width: 75, tone: 'bg-kit-warning' },
  { id: 'danger', width: 100, tone: 'bg-kit-danger' },
]

const SKILLS = [
  { id: 'wordpress', label: 'WordPress', value: 94, tone: 'bg-kit-primary' },
  { id: 'html5', label: 'HTML5', value: 85, tone: 'bg-kit-warning' },
  { id: 'ui-design', label: 'UI Design', value: 70, tone: 'bg-kit-info' },
]

function Track({ width, tone }: { width: number; tone: string }) {
  return (
    <div className="h-[7px] w-full rounded bg-gray-100">
      <div className={cn('h-full rounded', tone)} style={{ width: `${width}%` }} />
    </div>
  )
}

export function ProgressShowcase() {
  return (
    <Band
      title="Progress Bar"
      lead="Progress components for communicating the status of a task or the strength of a skill, in the kit's contextual colors."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-7">
          {BARS.map((bar) => (
            <Track key={bar.id} width={bar.width} tone={bar.tone} />
          ))}
        </div>

        <div className="space-y-7">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <div className="mb-2 flex items-center justify-between">
                <GroupLabel className="mb-0 rounded-full bg-band px-3 py-1 text-[0.75rem] text-body">
                  {skill.label}
                </GroupLabel>
                <strong className="font-semibold text-heading">{skill.value}%</strong>
              </div>
              <Track width={skill.value} tone={skill.tone} />
            </div>
          ))}
        </div>
      </div>
    </Band>
  )
}
