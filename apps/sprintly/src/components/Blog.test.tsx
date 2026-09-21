import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /5 Tips for Your First Crossfit Class/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /The Ultimate Pre-Workout Nutrition Guide/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Why Group Classes Keep You Motivated/i }),
    ).toBeInTheDocument()
  })

  it('shows Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read More/)
    expect(links).toHaveLength(3)
  })
})
