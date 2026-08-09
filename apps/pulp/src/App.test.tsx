import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pulp — Magazine')
  })

  it('composes header, hero, editorial list, and footer in the original order', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Pulp' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(11)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('provides a skip link to the main content', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    )
  })

  it('opens the fullscreen menu from the header and closes it via the close control', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.querySelector('[data-state="closed"]')).not.toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(document.querySelector('[data-state="open"]')).not.toBeNull()
    expect(screen.getByRole('navigation', { name: 'Overlay' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.querySelector('[data-state="open"]')).toBeNull()
  })
})
