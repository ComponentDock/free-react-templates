import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Focus — Photography Studio')
  })

  it('renders every section in the source order', () => {
    const { container } = render(<App />)
    const ids = [...container.querySelectorAll('main > section')].map((section) => section.id)
    expect(ids).toEqual(['home', 'about', 'services', 'work', 'testimonial', 'contact'])
    expect(
      screen.getByRole('heading', { level: 1, name: /We Make Something Great/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Focus is A Creative Direction/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Photography Services' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Selected Projects' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our satisfied customer says' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
  })

  it('includes the fixed dot navigation and the footer', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Section navigation' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
