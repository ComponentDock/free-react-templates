import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Satisfied Guests Says')).toBeInTheDocument()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Alysha Myers')).toBeInTheDocument()
    expect(screen.getByText('James Fisher')).toBeInTheDocument()
    expect(screen.getByText('Jacob Webb')).toBeInTheDocument()
  })

  it('displays locations', () => {
    render(<Testimonials />)
    expect(screen.getByText('Miami Florida, USA')).toBeInTheDocument()
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
    expect(screen.getByText('Athens, Greece')).toBeInTheDocument()
  })

  it('has proper aria label', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
  })
})
