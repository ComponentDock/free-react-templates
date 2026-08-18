import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TESTIMONIALS } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading with the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'What Client Says' })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.name)).toBeInTheDocument()
  })

  it('cycles through testimonials with the next and previous controls', () => {
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })

    fireEvent.click(next)
    expect(screen.getByText(TESTIMONIALS[1]!.quote)).toBeInTheDocument()
    expect(screen.queryByText(TESTIMONIALS[0]!.quote)).not.toBeInTheDocument()

    fireEvent.click(next)
    expect(screen.getByText(TESTIMONIALS[2]!.quote)).toBeInTheDocument()

    // Wraps forward to the first testimonial.
    fireEvent.click(next)
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()

    // Wraps backward to the last testimonial.
    fireEvent.click(prev)
    expect(screen.getByText(TESTIMONIALS[2]!.quote)).toBeInTheDocument()
  })
})
