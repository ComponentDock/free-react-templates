import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'
import { SITE_NAME, SITE_TAGLINE } from '../lib/site'
import { wordmarkClass, wordmarkLineClass } from '../lib/styles'

describe('Wordmark — the two-line lockup', () => {
  it('prints the name and its second line as one link to the top of the page', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(link).toHaveAttribute('href', '#top')
    expect(link).toHaveTextContent(SITE_NAME)
    expect(link).toHaveTextContent(SITE_TAGLINE)
    expect(link.querySelectorAll('span')).toHaveLength(2)
  })

  it('keeps the design’s own box: 20px on a single line, inside 5px 0 of padding', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(link.className).toContain('text-[20px]')
    expect(link.className).toContain('leading-none')
    expect(link.className).toContain('py-[5px]')
    expect(link.className).toContain('font-bold')
    expect(link.className).toContain('uppercase')
    expect(link.className).toContain('text-black')
    expect(link.className).toContain('mr-4')
    expect(link.className).toContain('max-md:mb-5')
    expect(wordmarkClass).toContain('hover:text-accent')
  })

  it('sets its second line at 12px, weight 500, on its own line in the same black', () => {
    render(<Wordmark />)

    const line = screen.getByText(SITE_TAGLINE)

    expect(line.className).toBe(wordmarkLineClass)
    expect(line.className).toContain('block')
    expect(line.className).toContain('text-[12px]')
    expect(line.className).toContain('font-medium')
    expect(line.className).toContain('text-black')
  })

  it('is never pinned and never carries a source string', () => {
    render(<Wordmark />)

    const link = screen.getByRole('link', { name: SITE_NAME })

    expect(link.className).not.toMatch(/sticky|fixed/)
    expect(link.textContent).toBe(`${SITE_NAME}${SITE_TAGLINE}`)
  })
})
