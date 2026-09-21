import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say' }),
    ).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()
    expect(screen.getByText(/first consultation/)).toBeInTheDocument()
  })

  it('renders client photos', () => {
    render(<Testimonials />)
    const photos = screen.getAllByRole('img')
    expect(photos.length).toBeGreaterThanOrEqual(2)
  })
})
