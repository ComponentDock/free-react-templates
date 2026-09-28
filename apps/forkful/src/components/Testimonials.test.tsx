import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and all 3 testimonial cards', () => {
    render(<Testimonials />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Customer/i)
    expect(heading.textContent).toMatch(/says/i)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()

    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/i)).toBeInTheDocument()
    expect(screen.getByText(/Even the all-powerful Pointing/i)).toBeInTheDocument()
  })

  it('displays star ratings for each testimonial', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByText('5 out of 5 stars')
    expect(ratings).toHaveLength(3)
  })
})
