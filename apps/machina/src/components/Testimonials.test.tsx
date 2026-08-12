import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { AVATAR_SEEDS, TESTIMONIALS_TITLE } from '../data'

describe('Testimonials', () => {
  it('shows the heading, first quote, stars, and attribution', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(TESTIMONIALS_TITLE)
    expect(screen.getByText(/Working in conjunction/)).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByText('- Micky Mouse, Business Man')).toBeInTheDocument()
  })

  it('switches quotes with the arrows', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/fabrication team rebuilt/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/Working in conjunction/)).toBeInTheDocument()
  })

  it('switches quotes with the avatar thumbnails', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /show testimonial/i })).toHaveLength(
      AVATAR_SEEDS.length,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByText(/Working in conjunction/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 4' }))
    expect(screen.getByText(/fabrication team rebuilt/)).toBeInTheDocument()
  })
})
