import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getByRole('textbox', { name: /search articles/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByLabelText(/category navigation/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/trending articles/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/latest posts/i)).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Headliner — Magazine & News Template')
  })
})
