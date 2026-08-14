import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the centered heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'What We Do' })).toBeInTheDocument()
  })

  it('renders six icon cards with title and copy', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(6)
    for (const service of services) {
      expect(screen.getAllByRole('heading', { name: service.title }).length).toBeGreaterThan(0)
      expect(screen.getAllByText(service.copy).length).toBeGreaterThan(0)
    }
    // Each card has the mint circle behind its icon.
    expect(container.querySelectorAll('.bg-mint')).toHaveLength(6)
  })
})
