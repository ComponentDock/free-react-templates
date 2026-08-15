import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Properties } from './Properties'
import { properties } from '../data'

describe('Properties', () => {
  it('renders six property cards with title, location and price', () => {
    render(<Properties />)
    expect(screen.getByRole('region', { name: 'Properties' })).toBeInTheDocument()
    expect(properties).toHaveLength(6)
    const cards = screen.getAllByRole('link')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      expect(card.className).toContain('group')
    }
    expect(screen.getAllByText('HD17 19 Utica Ave.')).toHaveLength(6)
    expect(screen.getAllByText('New York - USA')).toHaveLength(6)
    expect(screen.getAllByText('$20,000,000')).toHaveLength(6)
  })

  it('lays out the black offset frame and sliding details for the hover effect', () => {
    const { container } = render(<Properties />)
    const frame = container.querySelector('[aria-hidden="true"]')
    expect(frame?.className).toContain('group-hover:block')
    expect(frame?.className).toContain('border-black')
    expect(container.querySelector('.group-hover\\:translate-x-\\[45px\\]')).not.toBeNull()
  })
})
