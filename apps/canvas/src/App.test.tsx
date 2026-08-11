import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { BLOG_POSTS, HERO_HEADLINE } from './data'

describe('App', () => {
  it('composes every section in the source order', () => {
    const { container } = render(<App />)

    // Navbar + brand.
    expect(screen.getAllByRole('link', { name: /^Canvas$/ })).toHaveLength(2)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    // Hero → portfolio → services → blog → clients inside <main>.
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1, name: HERO_HEADLINE })).toBeInTheDocument()
    const sections = Array.from(main.querySelectorAll('section')).map(
      (section) => section.id || section.getAttribute('aria-label'),
    )
    expect(sections).toEqual(['home', 'portfolio', 'services', 'blog', 'Our clients'])

    // Blog band shows the first page of posts.
    expect(within(main).getByText(BLOG_POSTS[0].title)).toBeInTheDocument()

    // Footer follows <main>.
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
