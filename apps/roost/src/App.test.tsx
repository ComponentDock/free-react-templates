import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { AGENTS, BLOG_POSTS, PROPERTIES, SERVICES, TESTIMONIALS } from './data'

describe('App', () => {
  it('composes all sections in the original order inside main', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const sections = Array.from(main.querySelectorAll('section'))
    const labels = sections.map((section) => {
      const heading = section.querySelector('h1, h2, h3')
      return heading?.textContent ?? ''
    })

    // Navbar wordmark + links.
    expect(screen.getAllByRole('link', { name: /Roost/ }).length).toBeGreaterThanOrEqual(1)
    for (const link of ['Home', 'Agents', 'Property', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }

    // Hero content.
    expect(
      screen.getByRole('heading', { level: 1, name: 'Beautiful House In Australia' }),
    ).toBeInTheDocument()

    // Filter band.
    expect(screen.getByRole('tab', { name: 'For Rent' })).toBeInTheDocument()

    // Services.
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }

    // Properties.
    expect(screen.getByRole('heading', { name: 'Latest Properties' })).toBeInTheDocument()
    for (const property of PROPERTIES) {
      expect(screen.getAllByRole('link', { name: property.price }).length).toBeGreaterThanOrEqual(1)
    }

    // Agents (Josh Long also appears in testimonials).
    expect(screen.getByRole('heading', { name: 'Our Agents' })).toBeInTheDocument()
    for (const agent of AGENTS) {
      expect(screen.getAllByRole('heading', { name: agent.name }).length).toBeGreaterThanOrEqual(1)
    }

    // Testimonials (only the active slide is rendered; Josh Long also
    // appears in agents).
    expect(
      screen.getAllByRole('heading', { name: TESTIMONIALS[0]!.name }).length,
    ).toBeGreaterThanOrEqual(1)

    // Blog.
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }

    // Footer.
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    // Section order: hero → filter → services → properties → agents →
    // testimonials → blog (filter band has no heading, hence '').
    expect(labels[0]).toBe('Beautiful House In Australia')
    expect(labels[1]).toBe('')
    expect(labels[2]).toBe(SERVICES[0]!.title)
    expect(labels[3]).toBe('Latest Properties')
    expect(labels[4]).toBe('Our Agents')
    expect(labels[5]).toBe(TESTIMONIALS[0]!.name)
    expect(labels[6]).toBe('Blog Posts')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roost — Real Estate Website')
  })
})
