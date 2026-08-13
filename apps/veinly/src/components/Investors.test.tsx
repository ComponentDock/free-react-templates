import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Investors } from './Investors'
import { investors } from '../data'

describe('Investors', () => {
  it('renders two photo tiles, the heading, paragraph and outline CTA', () => {
    render(<Investors />)

    const section = screen.getByTestId('investors')
    expect(section).toHaveAttribute('id', 'investors-section')

    const tiles = screen.getAllByTestId('investors-tile')
    expect(tiles).toHaveLength(2)
    for (const tile of tiles) {
      expect(tile.className).toContain('bg-cover')
      expect(tile.style.backgroundImage).toContain('picsum.photos/seed/veinly-invest')
    }

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(investors.heading)
    expect(screen.getByText(investors.paragraph)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get in touch' })
    expect(cta).toHaveAttribute('href', '#contact-section')
    expect(cta.className).toContain('border-brand')
  })
})
