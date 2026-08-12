import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the eyebrow and heading', () => {
    render(<Blog />)

    expect(screen.getByText('Recent News of Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Recent Blog' })).toBeInTheDocument()
  })

  it('renders three post cards with meta, title, excerpt, and Read More link', () => {
    render(<Blog />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    expect(screen.getByText('By Admin - October 27, 2032')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: '16 Easy Ideas to Use in Everyday' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Small, repeatable habits/)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'How to Measure What Really Matters' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'The Case for Slower, Smarter Hiring' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
