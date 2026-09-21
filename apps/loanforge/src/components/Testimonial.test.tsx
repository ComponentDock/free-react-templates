import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the first testimonial by default', () => {
    render(<Testimonial />)

    expect(screen.getByText(/Loanforge made the entire loan process seamless/i)).toBeInTheDocument()
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    expect(screen.getByText('Co Founder')).toBeInTheDocument()
  })

  it('has founder avatar image', () => {
    render(<Testimonial />)
    expect(screen.getByAltText('Jessya Inn')).toBeInTheDocument()
  })

  it('renders three navigation dots', () => {
    render(<Testimonial />)
    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('has quote icon', () => {
    render(<Testimonial />)
    expect(screen.getByText(/Loanforge made/i)).toBeInTheDocument()
  })
})
