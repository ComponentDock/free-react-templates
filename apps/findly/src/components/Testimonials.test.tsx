import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading, the first quote, and the founder row', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'People talking about' }),
    ).toBeInTheDocument()
    const first = TESTIMONIALS[0]
    expect(screen.getByText(first!.quote)).toBeInTheDocument()
    expect(screen.getByText(first!.name)).toBeInTheDocument()
    expect(screen.getByText(first!.role)).toBeInTheDocument()
    expect(screen.getByAltText(first!.name)).toBeInTheDocument()
  })

  it('advances to the second slide with the next arrow', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.quote)).toBeInTheDocument()
    expect(screen.queryByText(TESTIMONIALS[0]!.quote)).not.toBeInTheDocument()
  })

  it('wraps from the first slide back to the last with the prev arrow', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.quote)).toBeInTheDocument()
  })
})
