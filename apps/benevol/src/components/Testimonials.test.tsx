import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS, TESTIMONIAL_HEADING } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: TESTIMONIAL_HEADING })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(TESTIMONIALS[0]!.quote.slice(0, 20)))).toBeInTheDocument()
  })

  it('cycles forward through all testimonials and wraps', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.name)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
  })

  it('wraps backward from the first testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[TESTIMONIALS.length - 1]!.name)).toBeInTheDocument()
  })
})
