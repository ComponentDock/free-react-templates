import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    const headings = screen.getAllByText('Terravault')
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Villa 9721 Glen Creek')).toBeInTheDocument()
    expect(screen.getByText('Find Your Home')).toBeInTheDocument()
    expect(screen.getByText('How It Work')).toBeInTheDocument()
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
    expect(screen.getByText('Find The Perfect')).toBeInTheDocument()
    expect(screen.getByText('Top Properties')).toBeInTheDocument()
    expect(screen.getByText('Our Agents')).toBeInTheDocument()
    expect(screen.getByText('News Latest')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
