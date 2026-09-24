import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeddingAdventure } from './WeddingAdventure'

describe('WeddingAdventure', () => {
  it('renders the section heading', () => {
    render(<WeddingAdventure />)
    expect(screen.getByText('Wedding adventure')).toBeInTheDocument()
  })

  it('renders 2 large cards with description', () => {
    render(<WeddingAdventure />)
    const descriptions = screen.getAllByText(/It won't be a bigger problem/)
    expect(descriptions).toHaveLength(2)
  })

  it('renders 4 small cards in the sidebar', () => {
    render(<WeddingAdventure />)
    // Small cards have h3 elements with "Technical Support" text
    const smallCardLinks = screen.getAllByText('Technical Support 10 With Dealing With')
    // 2 large cards + 4 small cards = 6 total
    expect(smallCardLinks.length).toBeGreaterThanOrEqual(4)
  })
})
