import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  NAV_LINKS,
  HERO_SLIDES,
  PROGRAMS,
  SCHEDULE,
  TESTIMONIALS,
  COACHES,
  BLOG_POSTS,
  GALLERY,
} from './data'

describe('App', () => {
  it('sets the document title to the Flexly fitness & gym template', () => {
    render(<App />)

    expect(document.title).toBe('Flexly — Fitness & Gym')
  })

  it('composes all sections in the original order', () => {
    const { container } = render(<App />)

    // Navbar + hero.
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Hero slider' })).toBeInTheDocument()

    // Programs, schedule, coaches, blog, contact sections by id.
    for (const id of [
      'programs-section',
      'services-section',
      'schedule-section',
      'about-section',
      'coaches-section',
      'blog-section',
      'contact-section',
    ]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }

    // Content volumes.
    expect(container.querySelectorAll('img').length).toBeGreaterThan(
      HERO_SLIDES.length + SCHEDULE.length + TESTIMONIALS.length + COACHES.length + GALLERY.length,
    )
    expect(screen.getAllByRole('tab').length).toBe(PROGRAMS.length + SCHEDULE.length)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0)

    // Footer comes last.
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('renders the nav links and the footer Component Dock credit', () => {
    render(<App />)

    for (const link of NAV_LINKS) {
      const matches = screen.getAllByRole('link', { name: link.label, hidden: true })
      expect(matches.length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(BLOG_POSTS.length)
  })
})
