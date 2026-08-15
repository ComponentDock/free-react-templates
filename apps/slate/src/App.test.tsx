import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Slate — Business Template')
  })

  it('composes all template sections in order', () => {
    const { container } = render(<App />)
    const headings = container.querySelectorAll('h1, h2')
    const order = Array.from(headings).map((h) => h.textContent)
    expect(order[0]).toBe('Business Websites, Simplified')
    expect(order).toContain('Everything Your Business Needs')
    expect(order).toContain('What Our Clients Say')
    expect(order).toContain('Get In Touch')
  })

  it('opens the mobile menu from the hero hamburger and closes it', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('renders the footer Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
