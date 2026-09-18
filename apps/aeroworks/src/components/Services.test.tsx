import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 4 service cards', () => {
    render(<Services />)
    const titles = ['Rental A Cars', 'Buying A Cars', 'Car Maintenance', 'Support 24/7']
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Flexible car rental plans/)).toBeInTheDocument()
    expect(screen.getByText(/Find your perfect car/)).toBeInTheDocument()
    expect(screen.getByText(/Professional maintenance services/)).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock customer support/)).toBeInTheDocument()
  })

  it('renders 4 cards with border styling', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('.border.border-border')
    expect(cards).toHaveLength(4)
  })
})
