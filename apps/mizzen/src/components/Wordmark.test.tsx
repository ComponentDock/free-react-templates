import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'
import { SITE_NAME, SITE_TAGLINE } from '../lib/site'
import { wordmarkClass, wordmarkLineClass } from '../lib/styles'

describe('Wordmark — the two-line lockup on the chrome row', () => {
  it('names the app on its first line and its trade on the second', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveTextContent(SITE_NAME)
    expect(wordmark).toHaveTextContent(SITE_TAGLINE)
    expect(wordmark.querySelector('span')?.textContent).toBe(SITE_NAME)
    expect(wordmark.querySelectorAll('span')[1]?.className).toBe(wordmarkLineClass)
  })

  it('points back at the top of the page, and carries a real focus affordance', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.className).toBe(wordmarkClass)
    expect(wordmark.className).toContain('focus-visible:outline-accent')
    expect(wordmark.className).toContain('hover:text-accent')
  })

  it('keeps the design’s 20px uppercase line, its 12px second line and its 30px of tail', () => {
    render(<Wordmark />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark.className).toContain('text-[20px]')
    expect(wordmark.className).toContain('font-bold')
    expect(wordmark.className).toContain('uppercase')
    expect(wordmark.className).toContain('leading-[1.2]')
    expect(wordmark.className).toContain('py-[5px]')
    expect(wordmark.className).toContain('mr-4')
    // The margin the design never resets at any width — it is what makes the chrome row 78.4px.
    expect(wordmark.className).toContain('mb-[30px]')
    expect(wordmarkLineClass).toContain('text-[12px]')
    expect(wordmarkLineClass).toContain('text-black/30')
    expect(wordmarkLineClass).toContain('block')
  })
})
