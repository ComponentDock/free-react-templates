import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Featured Services')).toBeInTheDocument()
  })

  it('renders all six services', () => {
    render(<Services />)
    expect(screen.getByText('Free Checkups')).toBeInTheDocument()
    expect(screen.getByText('Screening Exams')).toBeInTheDocument()
    expect(screen.getByText('RMI Services')).toBeInTheDocument()
    expect(screen.getByText('Dentistry')).toBeInTheDocument()
    expect(screen.getByText('Neonatology')).toBeInTheDocument()
    expect(screen.getByText('Biochemistry')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Comprehensive health checkups/)).toBeInTheDocument()
    expect(screen.getByText(/Advanced screening examinations/)).toBeInTheDocument()
  })

  it('renders six service cards', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('.text-center.p-6')
    expect(cards).toHaveLength(6)
  })
})
