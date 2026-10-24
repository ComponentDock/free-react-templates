import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { creditLabel, pageTitle, siteName, skipLabel } from './data'

describe('App', () => {
  it('composes every section in the reference order', () => {
    const { container } = render(<App />)
    const labels = Array.from(container.querySelectorAll('main section')).map((section) =>
      section.getAttribute('aria-label'),
    )
    expect(labels).toEqual([
      'Featured classes',
      'Member offers',
      'About Grithaus',
      'Coaching team',
      'Services',
      'Membership plans',
      'Opening hours and newsletter',
    ])
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('exposes a skip link to the main region', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })

  it('provides one page-level heading that names the template', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(siteName)
    expect(heading).toHaveClass('sr-only')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe(pageTitle)
  })

  it('keeps the Component Dock credit in the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: creditLabel })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
