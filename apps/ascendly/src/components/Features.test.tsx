import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards with icons, blurbs and links', () => {
    const { container } = render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Financial Analysis' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Marketing Plans' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Optimize Solutions' }),
    ).toBeInTheDocument()

    const links = screen.getAllByRole('link', { name: 'View Our Services' })
    expect(links).toHaveLength(3)

    // Each card carries an icon (svg) and a blurb paragraph.
    expect(container.querySelectorAll('article svg')).toHaveLength(3)
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(3)
  })

  it('marks the middle card as active with the indigo border', () => {
    const { container } = render(<Features />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    expect(cards[0]).toHaveClass('bg-cream')
    expect(cards[1]).toHaveClass('border-brand')
    expect(cards[2]).toHaveClass('bg-cream')
  })
})
