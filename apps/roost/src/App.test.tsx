import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Roost' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Get your way home worldwide',
    )
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Our Property')).toBeInTheDocument()
    expect(screen.getByText('Choose Your Dream House')).toBeInTheDocument()
    expect(screen.getByText('Roost Real Estate Agency')).toBeInTheDocument()
    expect(screen.getAllByText('How it works').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Agents')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('What Client Says')).toBeInTheDocument()
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
