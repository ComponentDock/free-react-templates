import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ContactNest — Contact Form Template')
  })

  it('renders the dark background container', () => {
    render(<App />)
    const bg = screen.getByText('Contact Us').closest('div')?.parentElement
    expect(bg).toHaveClass('bg-gray-900')
  })

  it('renders the Contact Us heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact Us')
  })

  it('renders the map background image', () => {
    render(<App />)
    const mapBg = document.querySelector('[aria-hidden="true"]')
    expect(mapBg).toBeInTheDocument()
  })

  it('renders the dark overlay', () => {
    render(<App />)
    const overlays = document.querySelectorAll('[aria-hidden="true"]')
    expect(overlays.length).toBeGreaterThanOrEqual(2)
  })
})
