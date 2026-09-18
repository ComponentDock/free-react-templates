import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders two blog post titles', () => {
    render(<Blog />)
    const titles = screen.getAllByText(/David Droga/i)
    expect(titles.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Read more links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(2)
  })

  it('renders date metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText(/November 24, 2020/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders category metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText(/Manufacturing/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders blog images from picsum', () => {
    render(<Blog />)
    const imgs = screen.getAllByRole('img')
    imgs.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
