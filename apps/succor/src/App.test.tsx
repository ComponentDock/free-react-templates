import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Succor branding', () => {
    render(<App />)

    expect(document.title).toBe('Succor — Charity & Nonprofit Template')
  })

  it('renders all sections in the source order (1:1)', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('main section')
    expect(sections).toHaveLength(5)
    expect(sections[0]?.getAttribute('id')).toBe('home')
    expect(sections[1]?.getAttribute('id')).toBe('about')
    expect(sections[2]?.getAttribute('aria-label')).toBe('Services')
    expect(sections[3]?.getAttribute('id')).toBe('causes')
    expect(sections[4]?.getAttribute('id')).toBe('stories')

    // Navbar (nav) renders above the main content; footer after it.
    expect(container.querySelector('nav')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders no extra sections beyond the source structure', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('section')).toHaveLength(5) // hero + volunteer + services + causes + stories
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})
