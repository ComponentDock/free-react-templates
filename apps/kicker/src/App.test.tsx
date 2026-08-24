import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('KICKER').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(
      screen.getAllByText("The world's first fitness influencer was a Victorian strongman").length,
    ).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Arts & Culture').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Science Update').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Video Gallery')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to the newsletter')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText((content) => content.includes('Component Dock'))).toBeInTheDocument()
  })

  it('has a sticky header', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('sticky')
  })
})
