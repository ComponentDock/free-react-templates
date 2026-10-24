import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the split block with the rotated experience strip', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Quality and Affordable Constructor',
    )
    expect(screen.getByText('Welcome to us')).toBeInTheDocument()
    expect(screen.getByText('38')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
    expect(container.innerHTML).toContain('rotate-[-90deg]')
    expect(screen.getByRole('img', { name: /foreman/i })).toBeInTheDocument()
  })

  it('renders four mini service cards in a grid', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('We Can Help You')
    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(4)
    expect(cards.map((card) => within(card).getByRole('heading', { level: 4 }).textContent)).toEqual([
      'Construction',
      'Architecture',
      'Consulting',
      'Mechanical',
    ])
  })
})
