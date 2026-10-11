import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const HEADERS = [
  { level: 1, className: 'text-[40px]' },
  { level: 2, className: 'text-[32px]' },
  { level: 3, className: 'text-[28px]' },
  { level: 4, className: 'text-[24px]' },
  { level: 5, className: 'text-[20px]' },
  { level: 6, className: 'text-[16px]' },
] as const
const TEXT_SAMPLES = [
  { label: 'Muted Text', className: 'text-muted' },
  { label: 'Primary Text', className: 'text-primary' },
  { label: 'Info Text', className: 'text-info' },
  { label: 'Success Text', className: 'text-success' },
  { label: 'Warning Text', className: 'text-warning' },
  { label: 'Danger Text', className: 'text-danger' },
]
const SAMPLE =
  'I will be the leader of a company that ends up being worth billions, because I have the answers and I understand culture.'

/** The kit's type scale: header sizes, paragraph, quote, tints and small tags. */
export function TypographyShowcase() {
  return (
    <ShowcaseSection id="typography" title="Typography">
      <div className="space-y-3">
        {HEADERS.map(({ level, className }) => (
          <div key={level}>
            <p className="text-sm text-muted">Header {level}</p>
            <p className={cn('text-heading', className)}>Thinking in textures {level}</p>
          </div>
        ))}
      </div>

      <div>
        <SubHeading>Paragraph</SubHeading>
        <p>{SAMPLE}</p>
      </div>

      <div>
        <SubHeading>Quote</SubHeading>
        <blockquote className="border-l-4 border-primary pl-4">
          <p>{SAMPLE}</p>
          <footer className="text-sm">
            — <cite>Jordan Vale, Web Designer</cite>
          </footer>
        </blockquote>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {TEXT_SAMPLES.map(({ label, className }) => (
          <div key={label}>
            <SubHeading>{label}</SubHeading>
            <p className={className}>{SAMPLE} A small river named Duden flows by their place.</p>
          </div>
        ))}
      </div>

      <div>
        <SubHeading>Small Tag</SubHeading>
        <h2 className="text-[30px] font-normal text-heading">
          Header with small subtitle
          <br />
          <small className="text-[18px] font-normal">Use the small tag for the headers</small>
        </h2>
      </div>
    </ShowcaseSection>
  )
}
