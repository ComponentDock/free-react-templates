import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonial quotes and authors', () => {
    render(<Testimonials />)
    // Check all three testimonials are present by author
    expect(screen.getByText('- Dr. Suzanne Holroyd -')).toBeInTheDocument()
    expect(screen.getByText('- Dr. James Mitchell -')).toBeInTheDocument()
    expect(screen.getByText('- Dr. Emily Carter -')).toBeInTheDocument()
    // Check avatar images
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
