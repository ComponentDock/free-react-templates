import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Maven — Creative Agency Template')

    const main = screen.getByRole('main')
    const sections = within(main)
      .getAllByRole('region')
      .map((region) => region.getAttribute('aria-label'))
    expect(sections).toEqual([
      'Hero',
      'Features',
      'Services',
      'About',
      'Recent work',
      'Stats',
      'Review',
      'Team intro',
      'Team',
      'Blog',
    ])

    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent('Think Creative')

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the main section headings', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent)
    expect(headings).toEqual([
      'Building brands with purpose',
      '25 Years Working Experience',
      'Make the customer the hero of your story',
      'Creative work for client',
      'Creative work for client',
      'Creative work for client',
      'We Have True Story',
    ])
  })
})
