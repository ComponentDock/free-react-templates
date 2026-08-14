import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialsSection } from './TestimonialsSection'
import { TESTIMONIALS } from '../data'

describe('TestimonialsSection', () => {
  it('renders the heading and five quote cards with name and position', () => {
    const { container } = render(<TestimonialsSection />)

    expect(screen.getByRole('heading', { name: 'What Client Says' })).toBeInTheDocument()
    for (const item of TESTIMONIALS) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.position)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(TESTIMONIALS.length)
    expect(container.querySelectorAll('blockquote')).toHaveLength(TESTIMONIALS.length)
  })
})
