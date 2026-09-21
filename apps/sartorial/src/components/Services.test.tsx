import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Perfect Body Measurements')).toBeInTheDocument()
    expect(screen.getByText('Premium Style Cutting')).toBeInTheDocument()
    expect(screen.getByText('Restoration with Sincerity')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/precision measurements/)).toBeInTheDocument()
    expect(screen.getByText(/classic cuts/)).toBeInTheDocument()
    expect(screen.getByText(/restore and alter/)).toBeInTheDocument()
  })
})
