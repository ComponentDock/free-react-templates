import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Hearth — Restaurant Template')

    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2')).map((h) => h.textContent)
    expect(headings).toEqual([
      'Eat Healthy and Natural Foods',
      'Welcome to Hearth Restaurant',
      'Our Menu',
      'Happy Customer',
      'Our Master Chef',
      'Make Reservation',
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
