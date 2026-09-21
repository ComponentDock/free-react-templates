import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('PISTON')).toBeInTheDocument()
    expect(screen.getByText('We Are The Piston Gym')).toBeInTheDocument()
    expect(screen.getAllByText('10-367-5501').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Welcome to Piston')).toBeInTheDocument()
    expect(screen.getByText('Our Process')).toBeInTheDocument()
    expect(screen.getByText('Fitness Programs')).toBeInTheDocument()
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('Our Coaches')).toBeInTheDocument()
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Our Packages')).toBeInTheDocument()
    expect(screen.getByText('Recent From Our Blog')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 1')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByText('About Piston')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Piston — Gym & Fitness Template')
  })
})
