import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('GalaFlow').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Business Conference')).toBeInTheDocument()
    expect(screen.getByText('About the Conference')).toBeInTheDocument()
    expect(screen.getByText('The New Era of Tech Companies')).toBeInTheDocument()
    expect(screen.getByText(/We have top executive/)).toBeInTheDocument()
    expect(screen.getByText('Program Details')).toBeInTheDocument()
    expect(screen.getByText('Our Speakers')).toBeInTheDocument()
    expect(screen.getByText('Book Your Seat')).toBeInTheDocument()
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
