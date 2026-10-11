import { ShowcaseSection, SubHeading } from './section'

const HEADING_CLASS = 'text-heading'

const SMALL_CLASS = 'text-lg text-body'

const PARAGRAPH =
  'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that is a responsibility I have: to push possibilities, to show people the level things could be at.'

const TEXT_SAMPLES = [
  { label: 'Muted Text', className: 'text-body/70' },
  { label: 'Primary Text', className: 'text-primary-600' },
  { label: 'Info Text', className: 'text-info' },
  { label: 'Success Text', className: 'text-success' },
  { label: 'Warning Text', className: 'text-warning' },
  { label: 'Danger Text', className: 'text-danger' },
]

export function TypographyShowcase() {
  return (
    <ShowcaseSection id="typography" title="Typography">
      <div className="space-y-2">
        <h1 className={HEADING_CLASS}>
          Header 1 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h1>
        <h2 className={HEADING_CLASS}>
          Header 2 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h2>
        <h3 className={HEADING_CLASS}>
          Header 3 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h3>
        <h4 className={HEADING_CLASS}>
          Header 4 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h4>
        <h5 className={HEADING_CLASS}>
          Header 5 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h5>
        <h6 className={HEADING_CLASS}>
          Header 6 <small className={SMALL_CLASS}>Thinking in textures</small>
        </h6>
      </div>

      <div className="space-y-3">
        <SubHeading>Paragraph</SubHeading>
        <p>{PARAGRAPH}</p>
      </div>

      <div className="space-y-3">
        <SubHeading>Quote</SubHeading>
        <blockquote className="border-l-4 border-primary-600 pl-4">
          <p>{PARAGRAPH}</p>
          <small className="text-body">— Jason Hodson, Web Designer</small>
        </blockquote>
      </div>

      <div>
        <SubHeading>Text styles</SubHeading>
        <div className="mt-4 space-y-3">
          {TEXT_SAMPLES.map((sample) => (
            <p key={sample.label} className={sample.className}>
              <span className="mr-2 text-xs uppercase tracking-wide text-gray-400">
                {sample.label}
              </span>
              {PARAGRAPH}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <SubHeading>Small Tag</SubHeading>
        <h2 className={HEADING_CLASS}>
          Header with small subtitle{' '}
          <small className={SMALL_CLASS}>Use the small tag for the headers</small>
        </h2>
      </div>
    </ShowcaseSection>
  )
}
