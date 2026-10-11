import { ShowcaseSection, SubHeading } from './section'

const BARS = [60, 90, 70, 50, 40]

const SKILLS = [
  { id: 'html', label: 'HTML', value: 60 },
  { id: 'wordpress-a', label: 'WordPress', value: 80 },
  { id: 'wordpress-b', label: 'WordPress', value: 95 },
]

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="pt-6">
      <span className="text-sm text-primary-600">{value}%</span>
      <div className="mt-1 h-1.5 w-full rounded bg-gray-100">
        <div className="h-full rounded bg-primary-600" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export function ProgressShowcase() {
  return (
    <ShowcaseSection id="progressbar" title="Progress bars">
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {BARS.map((value) => (
          <ProgressBar key={value} value={value} />
        ))}
      </div>
      <div>
        <SubHeading>Skill level</SubHeading>
        <div className="mt-4 max-w-md space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.id}>
              <h6 className="text-sm text-heading">{skill.label}</h6>
              <ProgressBar value={skill.value} />
            </div>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
