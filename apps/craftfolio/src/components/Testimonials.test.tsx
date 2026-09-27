import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders all testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByText('James Whitfield')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    const svgs = document.querySelectorAll('svg.fill-brand')
    expect(svgs.length).toBe(15)
  })

  it('renders brand logos', () => {
    render(<Testimonials />)
    const brandImages = screen.getAllByAltText(/Brand partner/)
    expect(brandImages).toHaveLength(5)
  })
})
