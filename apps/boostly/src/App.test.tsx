import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Boostly — Startup & SaaS Landing Template')
  })

  it('renders every major section of the template', () => {
    render(<App />)
    // Navbar + hero
    expect(screen.getAllByRole('link', { name: 'Boostly' }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 1, name: 'We give the power back to the user' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore Us' })).toBeInTheDocument()
    // Services + about + pricing
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services we provide' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3, name: 'Web Design' })).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: /Our\s*Philosophy/ })).toBeInTheDocument()
    expect(screen.getByText('Capcilena Hanry')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Affordable pricing plan' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started Now' })).toHaveLength(3)
    // Accordion + testimonials + blog
    expect(
      screen.getByRole('heading', { level: 2, name: /Some more features/ }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Show testimonial/ })).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 2, name: 'Our latest blog' })).toBeInTheDocument()
    // Footer attribution
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
