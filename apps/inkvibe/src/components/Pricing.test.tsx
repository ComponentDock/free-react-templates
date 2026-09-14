import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /our pricing/i })).toBeInTheDocument()
  })

  it('renders all 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Silver')).toBeInTheDocument()
    expect(screen.getByText('Diamond')).toBeInTheDocument()
    expect(screen.getByText('Golden')).toBeInTheDocument()
  })

  it('displays the correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$52')).toBeInTheDocument()
    expect(screen.getByText('$125')).toBeInTheDocument()
    expect(screen.getByText('$95')).toBeInTheDocument()
  })

  it('renders feature lists for each tier', () => {
    render(<Pricing />)
    expect(screen.getByText(/small tattoo/i)).toBeInTheDocument()
    expect(screen.getByText(/free touch-up/i)).toBeInTheDocument()
    expect(screen.getByText(/small–medium tattoo/i)).toBeInTheDocument()
  })

  it('renders CTA buttons for each tier', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons).toHaveLength(3)
  })
})
