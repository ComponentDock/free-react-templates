import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and the first slide with founder row', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Successful Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nicole Scott' })).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText(/changed how I eat/)).toBeInTheDocument()
    expect(document.querySelectorAll('img').length).toBe(2) // photo side + avatar
  })

  it('advances and goes back one slide with wrap-around and dot state', () => {
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })

    fireEvent.click(next)
    expect(screen.getByRole('heading', { name: 'David Renshaw' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    expect(screen.getByRole('heading', { name: 'Amara Okafor' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Wrap forward back to slide 1
    fireEvent.click(next)
    expect(screen.getByRole('heading', { name: 'Nicole Scott' })).toBeInTheDocument()

    // Wrap backward to the last slide
    fireEvent.click(previous)
    expect(screen.getByRole('heading', { name: 'Amara Okafor' })).toBeInTheDocument()
  })

  it('jumps to a slide via its dot', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { name: 'David Renshaw' })).toBeInTheDocument()
  })
})
