import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2, name: /Latest Blog/i })).toBeInTheDocument()
  })

  it('renders three blog posts with titles', () => {
    render(<BlogSection />)
    const headings = screen.getAllByRole('heading', {
      level: 4,
      name: /Fashion is about to your personality/i,
    })
    expect(headings).toHaveLength(3)
  })

  it('renders blog images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
