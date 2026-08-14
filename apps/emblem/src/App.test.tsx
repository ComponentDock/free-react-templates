import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { navLinks, newsItems } from './data'

describe('App', () => {
  it('renders the page in the reference section order', () => {
    const { container } = render(<App />)
    const sections = Array.from(container.querySelectorAll('main section, header, footer')).map(
      (el) => el.getAttribute('aria-label') ?? el.tagName.toLowerCase(),
    )
    expect(sections).toEqual([
      'header',
      'Introduction',
      'Features',
      'Skills',
      'Get ready to start your exciting journey. Our agency is here to help.',
      'Company numbers',
      'News and events',
      'More services',
      'Testimonials',
      'Quality Services',
      'Blog',
      'footer',
    ])
  })

  it('renders the primary hero headline and nav', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Digital Agency with Excellent Services/ }),
    ).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('renders every news card in the carousel', () => {
    render(<App />)
    for (const item of newsItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
  })
})
