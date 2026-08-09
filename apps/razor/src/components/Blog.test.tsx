import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the blog heading and post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Post' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Beginners Guide to Hair Styling' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
})
