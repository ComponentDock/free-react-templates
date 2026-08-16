import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Latest blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Latest blog/i })).toBeInTheDocument()
  })

  it('renders three dental-appropriate posts with photos and Read More links', () => {
    render(<Blog />)
    const titles = [
      'Why Regular Checkups Matter',
      'Invisalign vs Braces: What to Know',
      'A Guide to Painless Root Canals',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read More/i })).toHaveLength(3)
    expect(document.querySelectorAll('img')).toHaveLength(3)
    expect(document.querySelector('img')?.getAttribute('src')).toContain('picsum.photos')
  })

  it('sits on the pale mist band behind the heading', () => {
    render(<Blog />)
    const section = screen.getByRole('region', { name: 'Latest blog posts' })
    expect(section.className).toContain('bg-mist')
  })
})
