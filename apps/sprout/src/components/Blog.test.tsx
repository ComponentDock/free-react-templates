import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /latest blog posts/i })).toBeInTheDocument()
    expect(screen.getByText(/finding peace in daily devotions/i)).toBeInTheDocument()
    expect(screen.getByText(/the importance of community/i)).toBeInTheDocument()
    expect(screen.getByText(/serving others with love/i)).toBeInTheDocument()
  })

  it('renders read more links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links).toHaveLength(3)
  })

  it('displays date overlays for each post', () => {
    render(<Blog />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('08')).toBeInTheDocument()
    // Check month text exists using normalizer
    const spans = document.querySelectorAll('span.text-sm')
    const monthTexts = Array.from(spans).filter((s) => s.textContent?.includes('Sep'))
    expect(monthTexts.length).toBeGreaterThanOrEqual(1)
  })
})
