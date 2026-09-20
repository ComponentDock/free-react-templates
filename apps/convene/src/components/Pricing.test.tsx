import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
  })

  it('renders all three tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Day Pass')).toBeInTheDocument()
    expect(screen.getByText('Full Pass')).toBeInTheDocument()
    expect(screen.getByText('Group Pass')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('129')).toBeInTheDocument()
    expect(screen.getByText('199')).toBeInTheDocument()
    expect(screen.getByText('79')).toBeInTheDocument()
  })

  it('renders Get Ticket buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Ticket')
    expect(buttons.length).toBe(3)
  })
})
