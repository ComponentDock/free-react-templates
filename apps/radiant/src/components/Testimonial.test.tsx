import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial quote, person name, and role', () => {
    render(<Testimonial />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('CEO, Co-Founder')).toBeInTheDocument()
  })

  it('displays the testimonial background image and person avatar', () => {
    render(<Testimonial />)

    expect(screen.getByAltText('Office background')).toBeInTheDocument()
    expect(screen.getByAltText('James Wilson')).toBeInTheDocument()
  })
})
