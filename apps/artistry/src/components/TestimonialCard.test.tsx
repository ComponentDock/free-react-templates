import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialCard } from './TestimonialCard'

describe('TestimonialCard', () => {
  it('displays the quote', () => {
    render(<TestimonialCard quote="Amazing work!" avatar="avatar.jpg" name="John Doe" role="CEO" />)
    expect(screen.getByText(/Amazing work!/)).toBeInTheDocument()
  })

  it('displays the author name', () => {
    render(<TestimonialCard quote="Great!" avatar="avatar.jpg" name="John Doe" role="CEO" />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('displays the author role', () => {
    render(<TestimonialCard quote="Great!" avatar="avatar.jpg" name="John Doe" role="CEO" />)
    expect(screen.getByText('CEO')).toBeInTheDocument()
  })

  it('renders the avatar as a circular image', () => {
    render(<TestimonialCard quote="Great!" avatar="avatar.jpg" name="John Doe" role="CEO" />)
    const img = screen.getByRole('img', { name: 'John Doe' })
    expect(img).toHaveClass('rounded-full')
    expect(img).toHaveAttribute('src', 'avatar.jpg')
  })
})
