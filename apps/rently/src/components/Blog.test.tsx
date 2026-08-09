import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Why Lead Generation is Key for Business Growth/i })
        .length,
    ).toBe(3)
  })

  it('renders a Read more link on every post', () => {
    render(<Blog />)
    expect(screen.getAllByRole('link', { name: /Read more/i }).length).toBe(3)
  })
})
