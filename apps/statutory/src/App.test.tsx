import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText("Don't Feel Helpless We Fight for Justice")).toBeInTheDocument()
    expect(screen.getAllByText('Expert Attorneys').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Why Put Your Trust In Our Law Firm')).toBeInTheDocument()
    expect(screen.getByText('Trusted Clients')).toBeInTheDocument()
    expect(screen.getByText('What We Cover')).toBeInTheDocument()
    expect(screen.getByText('Recent Case Studies')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('We Have Great Results')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
