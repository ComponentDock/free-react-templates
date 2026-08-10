import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with meta', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Blog/ })).toBeInTheDocument()
    const cards = screen.getAllByRole('img', {
      name: /Even the all-powerful Pointing/,
    })
    expect(cards.length).toBe(3)
    expect(screen.getAllByText('Dec 6, 2018').length).toBe(3)
    expect(screen.getAllByText('Admin').length).toBe(3)
    expect(screen.getAllByText('3').length).toBe(3)
  })
})
