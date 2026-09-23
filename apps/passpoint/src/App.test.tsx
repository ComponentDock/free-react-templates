import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page with correct background', () => {
    const { container } = render(<App />)
    const root = container.firstElementChild as HTMLElement
    expect(root.className).toContain('bg-[var(--color-page)]')
  })

  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign in to passpoint/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Passpoint — Login Form Template')
  })

  it('renders the illustration on desktop', () => {
    render(<App />)
    expect(screen.getAllByRole('img', { name: /decorative illustration/i })).toHaveLength(2)
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})
