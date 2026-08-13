import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'dream home.' })).toBeInTheDocument()
    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(headings[0]).toBe('Find your next')
    expect(headings[1]).toBe('Hotel Rooms')
    expect(headings[2]).toContain('Join our mailing')
    expect(headings[3]).toContain('Why choose homes?')
    expect(headings[4]).toContain("Don't forget to follow us on Instagram @habitat")
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const dockLinks = screen.getAllByRole('link', {
      name: /This template is made with ♥ at Component Dock/,
    })
    expect(dockLinks).toHaveLength(1)
    expect(dockLinks[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
