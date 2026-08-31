import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the carousel and footer', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the carousel section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /featured destinations/i })).toBeInTheDocument()
  })

  it('renders the Ravello brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Ravello').length).toBeGreaterThanOrEqual(1)
  })
})
