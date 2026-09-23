import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonial />)
    expect(
      screen.getByText(/I am at an age where I just want to be fit and healthy/),
    ).toBeInTheDocument()
  })

  it('renders the founder name and role', () => {
    render(<Testimonial />)
    expect(screen.getByText('Margaret Lawson')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('renders dot navigation indicators', () => {
    const { container } = render(<Testimonial />)
    const dots = container.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThanOrEqual(3)
  })
})
