import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Blog/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /How to Build a Successful Brand/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /The Future of Web Development/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Design Trends That Will Dominate/i }),
    ).toBeInTheDocument()
  })

  it('renders Continue Reading links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Continue Reading')
    expect(links).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
