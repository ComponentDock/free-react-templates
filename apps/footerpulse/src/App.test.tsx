import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Footer #10')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FooterPulse — Footer Template')
  })

  it('renders the contact cards section', () => {
    render(<App />)
    expect(screen.getByText('(+00) 1234 5678')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
