import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the quote text', () => {
    render(<Testimonial />)
    expect(screen.getByText(/I love that I was able to open a café/)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<Testimonial />)
    expect(screen.getByText('- Barb Dwyer')).toBeInTheDocument()
    expect(screen.getByText('CEO of Crest')).toBeInTheDocument()
  })
})
