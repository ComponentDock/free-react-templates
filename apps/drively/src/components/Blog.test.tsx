import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog/i })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: /The best car rent in the entire planet/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/July 17, 2019 by Admin/i)).toBeInTheDocument()
  })
})
