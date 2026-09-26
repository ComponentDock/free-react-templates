import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Good Story')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the featured blog post', () => {
    render(<Blog />)
    expect(screen.getByText(/Pictures of the year 2018/)).toBeInTheDocument()
  })

  it('renders side blog posts', () => {
    render(<Blog />)
    const posts = screen.getAllByText('Spirits in the sky over Northern Ireland lake')
    expect(posts.length).toBe(3)
  })

  it('renders author and date metadata', () => {
    render(<Blog />)
    const admins = screen.getAllByText('Admin')
    expect(admins.length).toBeGreaterThanOrEqual(1)
    const dates = screen.getAllByText('20/09/2018')
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    const blogImages = images.filter((img) => img.getAttribute('src')?.includes('lenscraft-blog'))
    expect(blogImages.length).toBe(4)
  })
})
