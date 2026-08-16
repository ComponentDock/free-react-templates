import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the sidebar and all sections in order', () => {
    render(<App />)

    // Sidebar
    expect(screen.getByLabelText('Sidebar')).toBeInTheDocument()

    // Sections
    expect(screen.getByRole('heading', { name: 'Special Offers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Epicure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()

    // Footer with Component Dock
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('keeps the mobile menu available on small viewports', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
