import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toBe('Newsletter Footer')
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Loom — Newsletter Footer Template')
  })

  it('renders the Footer component', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('renders the main content area', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main.className).toContain('bg-gray-200')
  })

  it('applies min-h-screen to root container', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const container = main.parentElement
    expect(container).not.toBeNull()
    expect(container!.className).toContain('min-h-screen')
  })
})
