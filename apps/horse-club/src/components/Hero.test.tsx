import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the eyebrow, the level-1 headline, and the Book Consultancy CTA', () => {
    render(<Hero />)

    expect(screen.getByText('Introducing Horse Club')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Inter relation Between Horse & Rider/)
    expect(screen.getByRole('link', { name: 'Book Consultancy' })).toHaveAttribute(
      'href',
      '#consultancy',
    )
  })
})
