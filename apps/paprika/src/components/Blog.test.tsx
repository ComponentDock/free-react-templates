import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders at least 3 blog cards', () => {
    render(<Blog />)
    const posts = [
      'The Art of Wood-Fired Cooking',
      'Behind the Kitchen: Our Chef Stories',
      'Seasonal Ingredients We Love',
    ]
    for (const post of posts) {
      expect(screen.getByText(post)).toBeInTheDocument()
    }
  })

  it('displays dates for posts', () => {
    render(<Blog />)
    expect(screen.getByText('Feb 11, 2025')).toBeInTheDocument()
  })
})
