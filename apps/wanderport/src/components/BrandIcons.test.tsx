import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BehanceMark, DribbbleMark, FacebookMark, TwitterMark } from './BrandIcons'

describe('BrandIcons', () => {
  it('draws each social mark as an inline svg', () => {
    const { container } = render(
      <>
        <FacebookMark className="mark" />
        <TwitterMark className="mark" />
        <DribbbleMark className="mark" />
        <BehanceMark className="mark" />
      </>,
    )

    const marks = container.querySelectorAll('svg')
    expect(marks).toHaveLength(4)
    for (const mark of marks) {
      expect(mark).toHaveAttribute('aria-hidden', 'true')
      expect(mark.className.baseVal).toContain('mark')
      expect(
        mark.querySelectorAll('path').length + mark.querySelectorAll('circle').length,
      ).toBeGreaterThan(0)
    }
  })
})
