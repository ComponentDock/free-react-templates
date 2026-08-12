import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Ivy — University Template')
  })

  it('composes all sections in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2, h3')).map((node) => node.textContent)
    const all = headings.join(' | ')
    expect(all).toContain('Education Needs Complete Solution')
    expect(all).toContain('What We Offer')
    expect(all).toContain('Ivy University')
    expect(all).toContain('Our Courses')
    expect(all).toContain('Request A Quote')
    expect(all).toContain('Upcoming Events')
    expect(all).toContain('Recent Blog')
    expect(all).toContain('Student Says About Us')
  })

  it('renders the footer and navbar landmarks', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
