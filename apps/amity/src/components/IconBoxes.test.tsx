import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconBoxes } from './IconBoxes'

describe('IconBoxes', () => {
  it('renders the three cards with titles and blurbs', () => {
    render(<IconBoxes />)
    for (const title of ['Become a Volunteer', 'Dance & Music', 'Online Conference']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getByText(/Lend a hand/)).toBeInTheDocument()
    expect(screen.getByText(/Creative after-school/)).toBeInTheDocument()
    expect(screen.getByText(/virtual gatherings/)).toBeInTheDocument()
  })

  it('highlights the first card with the orange gradient', () => {
    const { container } = render(<IconBoxes />)
    const cards = container.querySelectorAll('[data-icon-card]')
    expect(cards).toHaveLength(3)
    expect(cards[0]!.className).toContain('from-brand')
    expect(cards[0]!.className).toContain('text-white')
    expect(cards[1]!.className).toContain('bg-light')
  })

  it('renders an icon in every card', () => {
    const { container } = render(<IconBoxes />)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
