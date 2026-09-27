import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByText('Propwell').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/Find your place with our/)).toBeInTheDocument()
    expect(screen.getByText(/Recent Properties/)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/)).toBeInTheDocument()
    expect(screen.getByText(/Featured Listings/)).toBeInTheDocument()
    expect(screen.getByText(/Looking Property/)).toBeInTheDocument()
    expect(screen.getAllByText(/Popular Places/).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/What Our Clients Say/)).toBeInTheDocument()
    expect(screen.getByText(/Latest News/)).toBeInTheDocument()
    expect(screen.getByText(/Our Partners/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
