import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Ambulatory Care')).toBeInTheDocument()
    expect(screen.getByText('Laboratory')).toBeInTheDocument()
    expect(screen.getByText('Ambulance Service')).toBeInTheDocument()
    expect(screen.getByText('Radiology')).toBeInTheDocument()
    expect(screen.getByText('Emergency Care')).toBeInTheDocument()
    expect(screen.getByText('Pharmacy')).toBeInTheDocument()
  })

  it('renders See All Services button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /See All Services/ })).toBeInTheDocument()
  })
})
