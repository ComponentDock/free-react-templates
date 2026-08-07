import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog cards with meta and titles', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/i })).toBeInTheDocument()

    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(3)

    for (const meta of ['August 12, 2018', 'Admin', '3']) {
      expect(screen.getAllByText(meta).length).toBeGreaterThan(0)
    }

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /Pointing has no control about the blind texts/i,
      }),
    ).toBeInTheDocument()
  })
})
