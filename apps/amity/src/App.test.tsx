import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in order', () => {
    const { container } = render(<App />)
    const sections = container.querySelectorAll('[data-section]')
    const labels = Array.from(sections).map((s) => s.getAttribute('data-section'))
    expect(labels).toEqual([
      'header',
      'hero',
      'icon-boxes',
      'welcome',
      'events',
      'causes',
      'milestones',
      'footer',
    ])
  })

  it('renders the key content across all sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Donate' })).toBeInTheDocument()
    expect(screen.getAllByText('Become a Volunteer').length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: 'Welcome to our Charity' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Causes' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We love to help all the children/ }),
    ).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('links every footer column', () => {
    render(<App />)
    expect(screen.getByLabelText('About')).toBeInTheDocument()
    expect(screen.getByLabelText('Useful Links')).toBeInTheDocument()
    expect(screen.getByLabelText('Latest News')).toBeInTheDocument()
    expect(screen.getByLabelText('Contact')).toBeInTheDocument()
  })
})
