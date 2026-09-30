import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Upstart — Startup & Design Agency Template')
  })

  it('renders every major section of the template', () => {
    render(<App />)
    // Navbar + hero
    expect(screen.getAllByRole('link', { name: 'Upstart' }).length).toBeGreaterThan(0)
    expect(
      screen.getByText(
        'Design is not just what it looks like and feels like. Design is how it works.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hire Us Now' })).toBeInTheDocument()
    // Services + case studies + testimonials
    expect(
      screen.getByRole('heading', { level: 3, name: 'Mobile Application' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'kMix Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Dieter Rams' })).toBeInTheDocument()
    expect(screen.getAllByText('Co-Founder')).toHaveLength(3)
    // Footer attribution
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
