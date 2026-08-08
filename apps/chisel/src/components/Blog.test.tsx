import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and four post cards with meta', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Blog Posts' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 3, name: /Separated they live in/ }),
    ).toHaveLength(4)
    expect(screen.getAllByText(/Aug 4, 2020 by/i)).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Admin' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Architect' })).toHaveLength(4)
  })

  it('renders four post images', () => {
    render(<Blog />)
    expect(screen.getAllByRole('img', { name: /blog post/i })).toHaveLength(4)
  })
})
