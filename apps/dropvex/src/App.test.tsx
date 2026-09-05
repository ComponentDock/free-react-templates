import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page with heading and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown Navbar')
    expect(screen.getByText('DropVex')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('DropVex — Split-Button Dropdown Navbar')
  })

  it('links footer to componentdock.com', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the brand name', () => {
    render(<App />)
    expect(screen.getByText('Splash')).toBeInTheDocument()
  })

  it('renders the hamburger button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toBeInTheDocument()
  })
})
