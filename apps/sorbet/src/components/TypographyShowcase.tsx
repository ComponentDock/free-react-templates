import { ShowcaseSection, SubHeading } from './section'

const HEADING_CLASS = 'text-heading'

const SMALL_CLASS = 'text-lg font-normal text-body'

const PARAGRAPH =
  'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that is a responsibility I have: to push possibilities, to show people the level things could be at.'

const TEXT_SAMPLES = [
  { label: 'Muted Text', className: 'text-body/70' },
  { label: 'Primary Text', className: 'text-primary-500' },
  { label: 'Info Text', className: 'text-info' },
  { label: 'Success Text', className: 'text-success' },
  { label: 'Warning Text', className: 'text-warning' },
  { label: 'Danger Text', className: 'text-danger' },
]

const HEADERS = [1, 2, 3, 4, 5, 6] as const

/** The full type scale with sample copy, quote and colored text styles. */
export function TypographyShowcase() {
  return (
    <ShowcaseSection id="typography" title="Typography">
      <div className="space-y-3">
        {HEADERS.map((level) => {
          const Tag = `h${level}` as 'h1'
          return (
            <Tag key={level} className={HEADING_CLASS}>
              Header {level} <small className={SMALL_CLASS}>Thinking in textures</small>
            </Tag>
          )
        })}
      </div>

      <div>
        <SubHeading>Paragraph</SubHeading>
        <p>{PARAGRAPH}</p>
      </div>

      <div>
        <SubHeading>Quote</SubHeading>
        <blockquote className="border-l-4 border-primary-500 pl-4">
          <p>{PARAGRAPH}</p>
          <small className="text-body">— Jason Hodson, Web Designer</small>
        </blockquote>
      </div>

      <div>
        <SubHeading>Text styles</SubHeading>
        <div className="mt-4 space-y-3">
          {TEXT_SAMPLES.map((sample) => (
            <p key={sample.label} className={sample.className}>
              <span className="mr-2 text-xs uppercase tracking-wide text-body">{sample.label}</span>
              {PARAGRAPH}
            </p>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Small Tag</SubHeading>
        <h2 className={HEADING_CLASS}>
          Header with small subtitle{' '}
          <small className={SMALL_CLASS}>Use the small tag for the headers</small>
        </h2>
      </div>
    </ShowcaseSection>
  )
}
