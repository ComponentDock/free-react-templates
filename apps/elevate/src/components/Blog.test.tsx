import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /latest insights/i })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /5 habits of highly effective coaches/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /how to set goals that actually stick/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /the power of active listening/i }),
    ).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
  })
})
