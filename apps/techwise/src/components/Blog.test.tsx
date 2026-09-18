import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Post/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /The Future of Web Design Trends/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Building Scalable Applications/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Branding Strategies for Digital/i }),
    ).toBeInTheDocument()
  })

  it('renders blog post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('15 Jan, 2024')).toBeInTheDocument()
    expect(screen.getByText('Admin')).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: 'Read more' })
    expect(links).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
