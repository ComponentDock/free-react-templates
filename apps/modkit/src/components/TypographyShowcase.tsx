import { Band, GroupLabel } from './Band'

const SAMPLE = 'Almost before we knew it, we had left the ground.'

const HEADINGS: { level: 1 | 2 | 3 | 4 | 5 | 6; size: string }[] = [
  { level: 1, size: 'text-[2.5rem]' },
  { level: 2, size: 'text-[2rem]' },
  { level: 3, size: 'text-[1.75rem]' },
  { level: 4, size: 'text-[1.5rem]' },
  { level: 5, size: 'text-[1.25rem]' },
  { level: 6, size: 'text-[1rem]' },
]

const TEXT_COLORS: { id: string; label: string; classes: string }[] = [
  { id: 'muted', label: 'Muted', classes: 'text-gray-400' },
  { id: 'primary', label: 'Primary', classes: 'text-kit-primary' },
  { id: 'info', label: 'Info', classes: 'text-kit-info' },
  { id: 'success', label: 'Success', classes: 'text-kit-success' },
  { id: 'warning', label: 'Warning', classes: 'text-kit-warning' },
  { id: 'danger', label: 'Danger', classes: 'text-kit-danger' },
]

const PARAGRAPH =
  'Mist enveloped the ship three hours out from port. A shining crescent hung far beneath the flying vessel, and every instrument aboard was alive with a steady, patient rhythm.'

export function TypographyShowcase() {
  return (
    <Band
      title="Typography"
      lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam officia quod consequatur eligendi assumenda nostrum distinctio obcaecati!"
    >
      <div className="space-y-6">
        {HEADINGS.map(({ level, size }) => (
          <div key={level}>
            <GroupLabel className="mb-1 text-[0.9rem] text-body">Heading {level}</GroupLabel>
            <p className={`${size} leading-tight`}>{SAMPLE}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl space-y-6">
        <div>
          <GroupLabel className="mb-1 text-[0.9rem] text-body">Paragraph</GroupLabel>
          <p className="leading-relaxed">{PARAGRAPH}</p>
        </div>
        <div>
          <GroupLabel className="mb-1 text-[0.9rem] text-body">Quote</GroupLabel>
          <blockquote className="border-l-2 border-kit-primary pl-4 leading-relaxed italic">
            {PARAGRAPH}
          </blockquote>
        </div>
      </div>

      <div>
        <GroupLabel className="mb-3 text-[0.9rem] text-body">Text colors</GroupLabel>
        <div className="flex flex-wrap gap-6">
          {TEXT_COLORS.map((tone) => (
            <span key={tone.id} className={tone.classes}>
              {tone.label} text
            </span>
          ))}
        </div>
      </div>
    </Band>
  )
}
