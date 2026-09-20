import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section title', () => {
    render(<Pricing />)
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
  })

  it('renders all plan names', () => {
    render(<Pricing />)
    expect(screen.getByText('Small Team')).toBeInTheDocument()
    expect(screen.getByText('Family Pack')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$200')).toBeInTheDocument()
    expect(screen.getByText('$499')).toBeInTheDocument()
    expect(screen.getByText('$999')).toBeInTheDocument()
  })

  it('marks Family Pack as most popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders Buy Ticket buttons', () => {
    render(<Pricing />)
    const buyButtons = screen.getAllByRole('link', { name: /buy ticket/i })
    expect(buyButtons.length).toBe(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Day Conference')).toBeInTheDocument()
    expect(screen.getAllByText('All 4 Days').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('VIP Lounge Access').length).toBeGreaterThanOrEqual(1)
  })
})
