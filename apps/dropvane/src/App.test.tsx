import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('DropVane — Request A Quote Dropdown')
  })

  it('renders the DropdownShowcase heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown #10')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
