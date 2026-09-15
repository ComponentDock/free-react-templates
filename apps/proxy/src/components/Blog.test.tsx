import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog Post')
  })

  it('renders the lead paragraph', () => {
    render(<Blog />)
    expect(screen.getByText(/Stay informed with market insights/)).toBeInTheDocument()
  })

  it('renders three blog posts with titles and dates', () => {
    render(<Blog />)
    expect(screen.getByText('How to Pick the Right Realtor')).toBeInTheDocument()
    expect(screen.getByText("First-Time Buyer's Guide to Houston")).toBeInTheDocument()
    expect(screen.getByText('Market Trends: What to Expect This Spring')).toBeInTheDocument()
    expect(screen.getAllByText(/2024/)).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
