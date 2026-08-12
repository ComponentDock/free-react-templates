import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { serviceVideoUrl } from '../data'

describe('Services', () => {
  it('renders the photo column with a circular play button', () => {
    render(<Services />)

    const play = screen.getByRole('link', { name: 'Watch the DJ set video' })
    expect(play).toHaveAttribute('href', serviceVideoUrl)
    expect(play).toHaveAttribute('target', '_blank')
  })

  it('renders the four tiles in zigzag order with alternating backgrounds', () => {
    const { container } = render(<Services />)

    const titles = screen.getAllByRole('heading', { level: 4 }).map((h) => h.textContent)
    expect(titles).toEqual(['Wedding', 'Clubs and bar', 'DJ lessons', 'Corporate events'])

    // Alternating deep / regular brand backgrounds (Wedding and DJ lessons deep).
    const tileClasses = Array.from(
      container.querySelectorAll<HTMLElement>('div[class*="h-[320px]"]'),
    ).map((tile) => tile.className)
    expect(tileClasses).toHaveLength(4)
    expect(tileClasses[0]).toContain('bg-brand-deep')
    expect(tileClasses[1]).toContain('bg-brand')
    expect(tileClasses[2]).toContain('bg-brand-deep')
    expect(tileClasses[3]).toContain('bg-brand')

    expect(screen.getByText(/tailor-made sets/i)).toBeInTheDocument()
  })
})
