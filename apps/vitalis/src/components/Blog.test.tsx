import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with author and date', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /skin care tips/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /here's how you can get a natural glow this party season/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /get better skin with these top 10 tips/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /8 ways to save your skin if you exercise outside this winter/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('John Doe')).toHaveLength(3)
    expect(screen.getAllByText('Dec 06, 2030')).toHaveLength(3)
    expect(screen.getByRole('link', { name: /view all news/i })).toHaveAttribute('href', '#blog')
  })
})
