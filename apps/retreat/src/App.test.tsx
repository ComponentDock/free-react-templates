import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Retreat').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Welcome To Retreat')).toBeInTheDocument()
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
    expect(screen.getByText('Transport')).toBeInTheDocument()
    expect(screen.getByText('Premium King Room')).toBeInTheDocument()
    expect(screen.getByText('Our Guests Love Us')).toBeInTheDocument()
    expect(screen.getByText('Our Resort Views')).toBeInTheDocument()
    expect(screen.getByText(/Latest News/)).toBeInTheDocument()
    expect(screen.getByText('Contact us now!')).toBeInTheDocument()
    expect(screen.getByText('Partner One')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
