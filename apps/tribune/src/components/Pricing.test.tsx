import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Conference Ticket Pricing')).toBeInTheDocument()
  })

  it('renders three pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Personal')).toBeInTheDocument()
    expect(screen.getByText('Small Team')).toBeInTheDocument()
    expect(screen.getByText('Family Pack')).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$399')).toBeInTheDocument()
  })

  it('renders Buy Ticket buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /buy ticket/i })
    expect(buttons).toHaveLength(3)
  })

  it('shows feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('Single attendee')).toBeInTheDocument()
    expect(screen.getByText('Up to 5 attendees')).toBeInTheDocument()
    expect(screen.getByText('Up to 10 attendees')).toBeInTheDocument()
  })
})
