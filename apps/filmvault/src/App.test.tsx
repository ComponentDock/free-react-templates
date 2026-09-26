import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    const filmvaultLinks = screen.getAllByRole('link', { name: /filmvault/i })
    expect(filmvaultLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Photography/)
    expect(screen.getByText(/capture daily life/)).toBeInTheDocument()
    expect(screen.getByText(/Exceed Expectations/)).toBeInTheDocument()
    expect(screen.getByText(/Creating Experiences/)).toBeInTheDocument()
    expect(screen.getByText(/Choose a plan/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('FilmVault — Photography Portfolio')
  })
})
