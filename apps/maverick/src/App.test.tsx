import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section in the source order', () => {
    const { container } = render(<App />)
    const ids = [...container.querySelectorAll('main > [id]')].map((node) => node.id)
    expect(ids).toEqual([
      'home-section',
      'about-section',
      'resume-section',
      'services-section',
      'skills-section',
      'projects-section',
      'blog-section',
      'section-counter',
      'contact-section',
    ])
    expect(screen.getByRole('heading', { level: 1, name: "I'm Alex Maverick" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Me' })).toBeInTheDocument()
    /* "Services" appears twice — the section heading and the footer column. */
    expect(screen.getAllByRole('heading', { level: 2, name: 'Services' }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 2, name: "I'm Available for freelancing" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
  })

  it('exposes the header, main landmark, and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
