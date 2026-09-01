import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TestimonialCard } from './TestimonialCard'

describe('TestimonialCard', () => {
  it('renders avatar with correct src and alt', () => {
    render(<TestimonialCard name="John Doe" text="Great work!" />)
    const img = screen.getByRole('img', { name: 'John Doe' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/john-doe/80/80')
  })

  it('renders the person name', () => {
    render(<TestimonialCard name="Jane Smith" text="Excellent!" />)
    expect(screen.getByRole('heading', { name: 'Jane Smith' })).toBeInTheDocument()
  })

  it('renders the testimonial text', () => {
    render(<TestimonialCard name="Test Person" text="Wonderful service." />)
    expect(screen.getByText('Wonderful service.')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <TestimonialCard name="Test Person" text="Hi" className="custom-class" />,
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
