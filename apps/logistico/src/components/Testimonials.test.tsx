import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Client Testimonials/i)
  })

  it('renders three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Supply Chain Manager')).toBeInTheDocument()
    expect(screen.getByText('Import/Export Director')).toBeInTheDocument()
    expect(screen.getByText('Operations Lead')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our shipping operations/i)).toBeInTheDocument()
    expect(screen.getByText(/Outstanding customer support/i)).toBeInTheDocument()
    expect(screen.getByText(/dashboard makes managing/i)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
