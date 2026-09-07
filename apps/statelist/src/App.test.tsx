import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Statelist')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Statelist — Multiselect Dropdown')
  })

  it('renders the dropdown control', () => {
    render(<App />)
    expect(screen.getByText('States')).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('uses the light page background', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toHaveStyle({ background: '#f8f9fd' })
  })
})
