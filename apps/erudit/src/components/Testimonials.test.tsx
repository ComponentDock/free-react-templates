import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Students Say')).toBeInTheDocument()
  })

  it('renders 5 testimonial cards', () => {
    render(<Testimonials />)
    const names = [
      'Dave Henderson',
      'Sarah Johnson',
      'James Wilson',
      'Emily Davis',
      'Michael Brown',
    ]
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders quote text', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/Far far away, behind the word mountains/).length).toBe(5)
  })
})
