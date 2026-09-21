import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full template without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('The Venue').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('An Extraordinary Experience').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('The Menu')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('VenuePoint — Restaurant & Dining')
  })
})
