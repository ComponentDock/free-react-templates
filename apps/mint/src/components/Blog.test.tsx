import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Our Blog Posts/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Architecture is ready to take the world/i }).length,
    ).toBeGreaterThanOrEqual(3)
  })
})
