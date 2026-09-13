import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /client says me/i })).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Stephen McMilan')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('David Park')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Executive, ACI Group')).toBeInTheDocument()
    expect(screen.getByText('CTO, NovaSpark')).toBeInTheDocument()
    expect(screen.getByText('Product Lead, Elevate')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/this platform transformed/i)).toBeInTheDocument()
    expect(screen.getByText(/we evaluated a dozen/i)).toBeInTheDocument()
    expect(screen.getByText(/outstanding support team/i)).toBeInTheDocument()
  })

  it('renders profile images', () => {
    render(<Testimonials />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(3)
  })
})
