import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Latest Blog Posts/i }),
    ).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Web Development in 2025')).toBeInTheDocument()
    expect(screen.getByText('How to Boost Your SEO Rankings')).toBeInTheDocument()
    expect(screen.getByText('Design Trends Shaping Digital Products')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read more')
    expect(links.length).toBe(3)
  })
})
