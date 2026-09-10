import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /modern restaurant/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /delicious food provider/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /delicious food menu/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what they said/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    // "Ravida" appears in both Navbar and Footer — use getAllByText
    const ravidaElements = screen.getAllByText('Ravida')
    expect(ravidaElements.length).toBeGreaterThanOrEqual(2)
  })

  it('sets page title', () => {
    render(<App />)
    expect(document.title).toBe('Ravida — Fine-Dining Restaurant Template')
  })
})
