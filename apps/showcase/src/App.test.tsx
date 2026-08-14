import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Showcase — Personal Portfolio Template')
  })

  it('renders a skip link and all sections in the original order inside main', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()
    const main = screen.getByRole('main')
    // Unlinked decorative sections (partners/highlights/hire-me) carry no id.
    const ids = Array.from(main.querySelectorAll('section'))
      .map((section) => section.id)
      .filter(Boolean)
    expect(ids).toEqual([
      'home',
      'about-section',
      'resume-section',
      'services-section',
      'projects-section',
      'blog-section',
      'contact-section',
    ])
    expect(container.querySelector('footer')).toBeInTheDocument()
    // The header wraps the fixed navbar.
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})
