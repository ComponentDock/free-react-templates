import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

const SAMPLE = 'Almost before we knew it, we had left the ground.'

const BODY_SAMPLE =
  'A low sun brushed the harbour wall and every moored boat leaned into the same slow tide, while the last of the gulls drifted out towards the headland.'

const TEXT_COLORS: { caption: string; className: string }[] = [
  { caption: 'Muted text', className: 'text-muted' },
  { caption: 'Primary text', className: 'text-flair-primary' },
  { caption: 'Info text', className: 'text-flair-info' },
  { caption: 'Success text', className: 'text-flair-success' },
  { caption: 'Warning text', className: 'text-flair-warning' },
  { caption: 'Danger text', className: 'text-flair-danger' },
]

function TypeRow({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="mb-4 grid gap-2 md:grid-cols-4">
      <span className="text-[14px] text-flair-secondary">{caption}</span>
      <div className="md:col-span-3">{children}</div>
    </div>
  )
}

/** The type scale: heading samples, paragraph, quote and the palette text rows. */
export function TypographyShowcase() {
  return (
    <Band>
      <SectionHeading className="mb-5">Typography</SectionHeading>

      <TypeRow caption="Heading 1">
        <h1>{SAMPLE}</h1>
      </TypeRow>
      <TypeRow caption="Heading 2">
        <h2>{SAMPLE}</h2>
      </TypeRow>
      <TypeRow caption="Heading 3">
        <h3>{SAMPLE}</h3>
      </TypeRow>
      <TypeRow caption="Heading 4">
        <h4>{SAMPLE}</h4>
      </TypeRow>
      <TypeRow caption="Heading 5">
        <h5>{SAMPLE}</h5>
      </TypeRow>
      <TypeRow caption="Heading 6">
        <h6>{SAMPLE}</h6>
      </TypeRow>
      <TypeRow caption="Paragraph">
        <p>{BODY_SAMPLE}</p>
      </TypeRow>
      <TypeRow caption="Quote">
        <blockquote className="border-l-[7px] border-hairline py-1 pl-7 text-[18px] italic">
          <p>{BODY_SAMPLE}</p>
          <p>
            <cite className="not-italic">Jane Smith, CEO &amp; Founder</cite>
          </p>
        </blockquote>
      </TypeRow>
      {TEXT_COLORS.map(({ caption, className }) => (
        <TypeRow key={caption} caption={caption}>
          <p className={cn(className)}>{BODY_SAMPLE}</p>
        </TypeRow>
      ))}
    </Band>
  )
}
