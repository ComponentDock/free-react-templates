import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { featuredPosts, newsletterHeading } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Flamingo — Blog Template')
  })

  it('composes the header, main and footer landmarks with sections in order', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = Array.from(container.querySelectorAll('h3, h4')).map((h) =>
      h.textContent?.trim(),
    )
    expect(headings[0]).toBe(featuredPosts[0]!.headline)
    expect(headings).toContain('Popular Posts')
    expect(headings).toContain('Post Categories')
    expect(headings).toContain('Tag Clouds')
    expect(headings).toContain('About Us')
    expect(headings).toContain('Instagram Feed')
    expect(headings).toContain('Let us be social')
    expect(headings).toContain(newsletterHeading)
  })
})
