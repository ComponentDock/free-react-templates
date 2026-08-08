import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with tags, titles, and dates', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent From Our Blog/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: /Designing for Natural Light/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/January 31, 2018/i)).toHaveLength(3)
    expect(screen.getAllByText(/Architecture/i).length).toBeGreaterThan(0)
  })
})
