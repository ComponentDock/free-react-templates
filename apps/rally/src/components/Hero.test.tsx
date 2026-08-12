import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the event headline, blurb and ghost CTA over the photo', () => {
    const { container } = render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'International Digital Business Event' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View More Details' })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/id/453'),
    )
  })
})
