import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the first slide with avatar, quote mark, quote and author', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
    const first = TESTIMONIALS[0]
    expect(screen.getByRole('img', { name: first.name })).toBeInTheDocument()
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    // The author line renders name + " - " + role in one paragraph text.
    expect(screen.getByText(new RegExp(first.name))).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
    // The decorative Playfair quote mark is present.
    expect(screen.getByText('“')).toBeInTheDocument()
  })

  it('cycles slides forward and wraps around', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1].quote)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[2].quote)).toBeInTheDocument()
    // Wraps back to the first slide.
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()
  })

  it('cycles slides backwards and wraps around', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[2].quote)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1].quote)).toBeInTheDocument()
  })
})
