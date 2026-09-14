import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our client says')).toBeInTheDocument()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Daniel Hart')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Project Manager, Nestle')).toBeInTheDocument()
    expect(screen.getByText('Director, Wanderlust Co')).toBeInTheDocument()
    expect(screen.getByText('CEO, TravelNow')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Also made from. Give may saying meat/)).toBeInTheDocument()
  })

  it('renders testimonial avatars', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Daniel Hart')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Cooper')).toBeInTheDocument()
  })
})
