import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Thresh')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Thresh — Multiselect Dropdown')
  })

  it('renders the multiselect control', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Click to select an option')).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('uses the dark page background', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toHaveStyle({ background: '#343434' })
  })
})
