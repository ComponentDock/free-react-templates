import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cosyhaus — Interior Design Template')
  })

  it('renders the navbar and all main sections', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /Cosyhaus/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Modern Interior/)).toBeInTheDocument()
    expect(screen.getByText(/Best Interior Services/)).toBeInTheDocument()
    expect(screen.getByText(/Our Recent News/)).toBeInTheDocument()
  })
})
