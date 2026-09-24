import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Clients Testimonials')).toBeInTheDocument()
  })

  it('renders quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/The care and professionalism at Clinipoint/)).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<Testimonials />)
    expect(screen.getByText('Julia Smith')).toBeInTheDocument()
  })

  it('renders role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Patient')).toBeInTheDocument()
  })
})
