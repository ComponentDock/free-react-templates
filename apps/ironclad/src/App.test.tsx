import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/We Build/)).toBeInTheDocument()
    expect(screen.getByText('Quality Construction')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Ironclad')).toBeInTheDocument()
    expect(screen.getByText('We Offer Services')).toBeInTheDocument()
    expect(screen.getByText('Best Provider for Industrial Services')).toBeInTheDocument()
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
    expect(screen.getByText(/it's always a joy/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
