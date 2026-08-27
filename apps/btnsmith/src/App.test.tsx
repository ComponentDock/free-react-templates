import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Button #07/)
    expect(screen.getByRole('heading', { level: 2, name: /Solid & Filled/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Outline & Border/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Pill & Square/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Sizes & States/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Icon Buttons/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Interactive Playground/ }),
    ).toBeInTheDocument()
  })

  it('renders the footer with Component Dock attribution', () => {
    render(<App />)
    const componentDockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(componentDockLinks.length).toBeGreaterThanOrEqual(1)
    const footerLink = componentDockLinks[componentDockLinks.length - 1]!
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the navigation bar', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
