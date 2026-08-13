import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full page with landmarks and a document title', () => {
    render(<App />)

    expect(document.title).toBe('Liftoff — Landing Page Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section headings in order.
    expect(
      screen.getByRole('heading', { level: 1, name: 'Grow Your Business Faster' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: 'Create interactive prototypes' }).length,
    ).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()

    // Footer attribution link (mandatory Component Dock).
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
