import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Sidebarix — Profile Sidebar Template')
  })

  it('renders the profile sidebar', () => {
    render(<App />)
    expect(screen.getByRole('complementary', { name: 'Profile sidebar' })).toBeInTheDocument()
  })

  it('renders the close button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('renders blog posts in the grid', () => {
    render(<App />)
    expect(screen.getByText('Morning Light at the Park')).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(8)
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
