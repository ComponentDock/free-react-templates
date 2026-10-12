import { render, screen } from '@testing-library/react'
import { SITE_NAME } from '../lib/site'
import { Wordmark } from './Wordmark'

describe('Wordmark — the middle third’s anchor', () => {
  it('is the page’s own name, linked to the top of the page', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.textContent).toBe(SITE_NAME)
  })

  it('is drawn lowercase at 27.2px on a 40.8px line, in the brand green', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark.className).toContain('lowercase')
    expect(wordmark.className).toContain('text-[1.7rem]')
    expect(wordmark.className).toContain('leading-[1.5]')
    expect(wordmark.className).toContain('font-normal')
    expect(wordmark.className).toContain('text-brand')
    expect(wordmark.className).toContain('inline-block')
    // The design never changes the wordmark's colour, and neither does this.
    expect(wordmark.className).not.toContain('hover:')
  })

  it('carries no mark beside it — no glyph, no picture, just the name', () => {
    const { container } = render(<Wordmark />)

    expect(container.querySelectorAll('img, svg, span')).toHaveLength(0)
    expect(container.textContent).toBe(SITE_NAME)
  })
})
