import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { testimonial } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the quote card with photo, name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()

    expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: testimonial.name })).toBeInTheDocument()
    expect(screen.getByText(testimonial.name)).toBeInTheDocument()
    expect(screen.getByText(testimonial.role)).toBeInTheDocument()
  })
})
