import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders four feature cards with title and copy', () => {
    render(<Features />)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
    // The source repeats the same Lorem copy on every card.
    expect(screen.getAllByText(features[0]!.copy)).toHaveLength(features.length)
  })

  it('renders an icon image per card on a surface card with hover lift', () => {
    const { container } = render(<Features />)
    const cards = container.querySelectorAll('div.rounded-\\[5px\\]')
    expect(cards).toHaveLength(features.length)
    expect(container.querySelectorAll('svg')).toHaveLength(features.length)
    expect(cards[0]).toHaveClass('bg-surface-alt')
    expect(cards[0]).toHaveClass('hover:bg-white')
    expect(cards[0]).toHaveClass('hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)]')
  })
})
