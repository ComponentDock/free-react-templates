import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /you'll never want to leave/i })).toBeInTheDocument()
  })

  it('renders all 5 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Friendly Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Breakfast' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Transfer Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Suites & Spa' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cozy Rooms' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/warm, attentive service/i)).toBeInTheDocument()
    expect(screen.getByText(/complimentary gourmet breakfast/i)).toBeInTheDocument()
  })
})
