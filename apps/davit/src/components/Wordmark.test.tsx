import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'
import { SITE_NAME } from '../lib/site'

describe('Wordmark — the app’s own name at the card’s left', () => {
  it('is one uppercase line pointing at the top of the page', () => {
    render(<Wordmark />)

    const mark = screen.getByRole('link', { name: SITE_NAME })

    expect(mark).toHaveAttribute('href', '#top')
    expect(mark.textContent).toBe(SITE_NAME)
    expect(mark.className).toContain('uppercase')
    expect(mark.className).toContain('text-black')
    expect(mark.className).toContain('max-lg:text-white')
  })

  it('keeps the colour it hovers in, so it only ever shows a focus ring', () => {
    render(<Wordmark />)

    const mark = screen.getByRole('link', { name: SITE_NAME })

    expect(mark.className).not.toContain('hover:text')
    expect(mark.className).toContain('focus-visible:outline-accent')
  })
})
