import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BehanceMark, DribbbleMark, FacebookMark, TwitterMark } from './BrandIcons'

/* The social marks are drawn by hand (the icon library dropped brand glyphs),
   so each one renders as an inline SVG that inherits the text colour. */
describe('BrandIcons', () => {
  it('draws all four social marks as inline SVGs', () => {
    render(
      <div>
        <FacebookMark className="h-4 w-4" />
        <TwitterMark className="h-4 w-4" />
        <DribbbleMark className="h-4 w-4" />
        <BehanceMark className="h-4 w-4" />
      </div>,
    )

    const marks = document.querySelectorAll('svg')
    expect(marks).toHaveLength(4)
    marks.forEach((mark) => {
      expect(mark).toHaveAttribute('aria-hidden', 'true')
      expect(mark.getAttribute('class')).toBe('h-4 w-4')
    })
    expect(marks[0]?.getAttribute('fill')).toBe('currentColor')
    expect(marks[2]?.getAttribute('fill')).toBe('none')
  })
})
