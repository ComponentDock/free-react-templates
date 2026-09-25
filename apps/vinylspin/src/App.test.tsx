import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('Vinylspin').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Love is all around')).toBeInTheDocument()
    expect(screen.getByText('Featured Album')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Shows')).toBeInTheDocument()
    expect(screen.getByText('The Artist')).toBeInTheDocument()
    expect(screen.getByText('Get your tickets now!')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Vinylspin — Music Band Landing Template')
  })
})
