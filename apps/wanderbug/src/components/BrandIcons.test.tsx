import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookMark, InstagramMark, LinkedinMark, PinterestMark, TwitterMark } from './BrandIcons'

describe('BrandIcons', () => {
  it('draws every social mark as a decorative inline svg', () => {
    const { container } = render(
      <div>
        <InstagramMark className="h-6 w-6" />
        <TwitterMark className="h-6 w-6" />
        <FacebookMark className="h-6 w-6" />
        <LinkedinMark className="h-6 w-6" />
        <PinterestMark className="h-6 w-6" />
      </div>,
    )

    const marks = Array.from(container.querySelectorAll('svg'))
    expect(marks).toHaveLength(5)
    marks.forEach((mark) => {
      expect(mark).toHaveAttribute('aria-hidden', 'true')
      expect(mark).toHaveAttribute('viewBox', '0 0 24 24')
    })
    expect(marks[0]).toHaveClass('h-6')
  })
})
