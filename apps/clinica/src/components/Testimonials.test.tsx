import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonial } from '../data'

describe('Testimonials', () => {
  it('renders the quote, founder attribution and photos', () => {
    render(<Testimonials />)
    expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
    expect(screen.getByText(testimonial.founder)).toBeInTheDocument()
    expect(screen.getByText(testimonial.role)).toBeInTheDocument()
    expect(screen.getByAltText(testimonial.avatarAlt)).toBeInTheDocument()
    expect(screen.getByAltText(testimonial.photoAlt)).toBeInTheDocument()
  })
})
