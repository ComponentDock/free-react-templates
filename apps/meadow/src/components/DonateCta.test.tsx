import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DonateCta } from './DonateCta'
import { donateCards, donateEyebrow, donateTitle } from '../data'

describe('DonateCta', () => {
  it('shows the Become A Volunteer eyebrow and the Join Our Event heading', () => {
    render(<DonateCta />)
    expect(screen.getByText(donateEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: donateTitle })).toBeInTheDocument()
  })

  it('renders three link cards with blob icons and titles', () => {
    const { container } = render(<DonateCta />)
    for (const card of donateCards) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.donate-icon svg').length).toBe(donateCards.length)
  })
})
