import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading with source bug text', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Dropdown #7')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Console — Dashboard Dropdown')
  })

  it('renders the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the dropdown trigger', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Dashboard/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
