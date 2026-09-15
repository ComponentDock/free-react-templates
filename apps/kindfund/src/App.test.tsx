import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Kindfund').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Get Started Today/)).toBeInTheDocument()
    expect(screen.getByText('Reason of Helping')).toBeInTheDocument()
    expect(screen.getByText('Popular Causes')).toBeInTheDocument()
    expect(screen.getByText('Our Volunteer')).toBeInTheDocument()
    expect(screen.getByText('News & Updates')).toBeInTheDocument()
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Kindfund — Charity Template')
  })
})
