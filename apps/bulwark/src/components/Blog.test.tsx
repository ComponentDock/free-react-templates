import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section title', () => {
    render(<Blog />)
    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()
  })

  it('renders four blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Cybersecurity Threats in 2024')).toBeInTheDocument()
    expect(screen.getByText('Building a Resilient Security Strategy')).toBeInTheDocument()
    expect(screen.getByText('The Future of Cloud Security')).toBeInTheDocument()
    expect(screen.getByText('Why Security Awareness Training Matters')).toBeInTheDocument()
  })

  it('renders blog excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Explore the most prevalent/i)).toBeInTheDocument()
    expect(screen.getByText(/Learn how to create/i)).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<Blog />)
    expect(screen.getAllByText('15').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('22').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('08').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('30').length).toBeGreaterThanOrEqual(1)
  })

  it('renders likes and comments counts', () => {
    render(<Blog />)
    expect(screen.getByText('32')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
  })

  it('renders blog images with picsum URLs', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
    images.forEach((img) => {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/bulwark-blog-')
    })
  })
})
