import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText("Building Holy & Healthy Lives God's")).toBeInTheDocument()
    expect(screen.getByText('Finding Peace in a Busy World')).toBeInTheDocument()
    expect(screen.getByText('The Power of Community Prayer')).toBeInTheDocument()
  })

  it('renders Read more buttons', () => {
    render(<Blog />)
    const readMore = screen.getAllByText('Read more')
    expect(readMore.length).toBe(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const imgs = screen.getAllByRole('img') as HTMLImageElement[]
    const blogImgs = imgs.filter(
      (img) =>
        img.alt === "Building Holy & Healthy Lives God's" ||
        img.alt === 'Finding Peace in a Busy World' ||
        img.alt === 'The Power of Community Prayer',
    )
    expect(blogImgs.length).toBe(3)
  })

  it('renders meta information', () => {
    render(<Blog />)
    expect(screen.getAllByText('July 20, 2029').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
  })
})
