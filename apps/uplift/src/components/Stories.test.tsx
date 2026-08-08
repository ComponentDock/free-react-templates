import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stories } from './Stories'

describe('Stories', () => {
  it('shows the section heading', () => {
    render(<Stories />)

    expect(screen.getByRole('heading', { level: 2, name: 'Lives Transformed' })).toBeInTheDocument()
    expect(screen.getByText(/Real stories from the people/)).toBeInTheDocument()
  })

  it('shows three testimonial cards with authors and avatars', () => {
    render(<Stories />)

    expect(screen.getByText(/The scholarship program changed everything/)).toBeInTheDocument()
    expect(screen.getByText(/The clean water well in our village/)).toBeInTheDocument()
    expect(screen.getByText(/I started a small tailoring business/)).toBeInTheDocument()

    for (const name of ['Maria Gonzalez', 'James Otieno', 'Sarah Kim']) {
      expect(screen.getByText(name)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${name}` })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/uplift-'),
      )
    }
  })
})
