import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/forum/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Year End Conference')).toBeInTheDocument()
    expect(screen.getByText('We Telecast our Coffee Making Live')).toBeInTheDocument()
    expect(screen.getAllByText('Speakers').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Schedule').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Huge Transaction in last Week')).toBeInTheDocument()
    expect(screen.getAllByText('Component Dock').length).toBeGreaterThanOrEqual(1)
  })
})
