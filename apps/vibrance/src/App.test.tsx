import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getAllByText('Vibrance').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/vibrance design/i)).toBeInTheDocument()
    expect(screen.getByText(/follow us on social media/i)).toBeInTheDocument()
    expect(screen.getByText('Event Calendar')).toBeInTheDocument()
    expect(screen.getByText(/brand experts with \+10y/i)).toBeInTheDocument()
    expect(screen.getByText('Design Inspiration')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vibrance — Design Studio')
  })
})
