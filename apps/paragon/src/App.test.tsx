import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { HERO_CTA } from './data'

describe('App', () => {
  it('composes every section in the reference order', () => {
    const { container } = render(<App />)

    // Navbar brand (navbar logo + footer logo) and split navigation.
    expect(screen.getAllByRole('link', { name: /^Paragon$/ })).toHaveLength(2)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Secondary' })).toBeInTheDocument()

    // Hero → intro → services → projects → testimonials → blog inside <main>.
    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'Welcome to Paragon.' }),
    ).toBeInTheDocument()
    const sections = Array.from(main.querySelectorAll('section')).map(
      (section) => section.id || section.getAttribute('aria-label'),
    )
    expect(sections).toEqual(['home', 'about', 'services', 'projects', 'Testimonials', 'blog'])

    // Hero CTA renders inside <main>; the footer follows it.
    expect(within(main).getByRole('link', { name: HERO_CTA })).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders the section heading hierarchy', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading').map((heading) => heading.tagName)
    expect(headings).toContain('H1')
    expect(headings).toContain('H2')
    expect(headings).toContain('H3')
  })
})
