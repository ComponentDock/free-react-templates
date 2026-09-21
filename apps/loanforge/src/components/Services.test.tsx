import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)

    expect(screen.getByText(/Services that we are providing/i)).toBeInTheDocument()
    expect(screen.getByText(/High Performance Services/i)).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)

    const cards = screen.getAllByText(/Business Loan|Commercial Loans|Construction Loans/)
    expect(cards.length).toBeGreaterThanOrEqual(4)
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/Flexible financing solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive commercial lending/i)).toBeInTheDocument()
    expect(screen.getByText(/Short-term financing/i)).toBeInTheDocument()
    expect(screen.getByText(/Tailored loan packages/i)).toBeInTheDocument()
  })
})
