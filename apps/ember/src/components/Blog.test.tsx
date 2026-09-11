import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
  })

  it('renders all four blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /New seasonal menu/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /The art of slow cooking/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Valentine/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Farm-to-table/i })).toBeInTheDocument()
  })

  it('renders blog images with accessible names', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: /New seasonal menu/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders Read More links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read More/i)
    expect(links).toHaveLength(4)
  })
})
