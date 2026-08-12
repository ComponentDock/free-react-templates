import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading, portrait, quote and author for both slides', () => {
    const { container } = render(<Testimonial />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()

    // Both slides are stacked; each shows an image, quote and author.
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getAllByText('— Craig Stephen')).toHaveLength(2)
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(2)
  })
})
