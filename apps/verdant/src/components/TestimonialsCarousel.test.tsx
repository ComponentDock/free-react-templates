import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { TestimonialsCarousel } from './TestimonialsCarousel'

describe('TestimonialsCarousel', () => {
  it('renders', () => {
    const { container } = render(<TestimonialsCarousel />)
    expect(container).toBeInTheDocument()
  })
})
