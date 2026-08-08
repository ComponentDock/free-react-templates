import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the blog section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Posts from our blog/ })).toBeInTheDocument()
  })

  it('renders three post cards with category, date, and read details links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Read Details' })
    expect(links).toHaveLength(3)
    expect(screen.getAllByText('Travel').length).toBeGreaterThanOrEqual(3)
  })
})
