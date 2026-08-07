import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

const featureTitles = ['Relaxing Massage', 'Candle', 'Bathrobe', 'Hot Stones'] as const

describe('Features', () => {
  it('shows the heading "Spa Features" in white with a peach underline bar', () => {
    render(<Features />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Spa Features' })
    expect(heading.className).toContain('text-white')
    const bar = heading.parentElement?.querySelector('.h-1')
    expect(bar).toHaveClass('bg-brand')
  })

  it('lists four feature cards with the reference titles', () => {
    render(<Features />)

    for (const title of featureTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows a peach icon and a muted description in each card', () => {
    const { container } = render(<Features />)

    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText(/treatments/i).length).toBeGreaterThan(0)
  })

  it('lightens the card background on hover', () => {
    render(<Features />)

    const cards = screen.getAllByRole('heading', { level: 3 })
    const card = cards[0]?.closest('div[class*="border-white/20"]')
    expect(card?.className).toContain('hover:bg-white/10')
  })
})
