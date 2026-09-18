import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Student Success Stories')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Marcus Lee')).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/web development bootcamp/i)).toBeInTheDocument()
    expect(screen.getByText(/ux design masterclass/i)).toBeInTheDocument()
    expect(screen.getByText(/career changer/i)).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Junior Developer at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Lead Product Designer')).toBeInTheDocument()
    expect(screen.getByText('Data Analyst at GlobalFinance')).toBeInTheDocument()
  })
})
