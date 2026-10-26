import { Fragment } from 'react'
import { HEADLINE, HEADLINE_ID } from '../data/site'

/**
 * Three explicit block lines, never one wrapped paragraph: the line count is
 * fixed by the markup, so the staircase survives every width from 1440 to 320.
 * The middle line steps right and carries the one italic rust word.
 */
export function Headline() {
  return (
    <h1 id={HEADLINE_ID} className="pw-title">
      {HEADLINE.map((line) => (
        <span key={line.id} className={line.indent ? 'pw-line pw-line--indent' : 'pw-line'}>
          {line.parts.map((part, index) =>
            part.accent ? (
              <em key={index} className="pw-accent">
                {part.text}
              </em>
            ) : (
              <Fragment key={index}>{part.text}</Fragment>
            ),
          )}
        </span>
      ))}
    </h1>
  )
}
