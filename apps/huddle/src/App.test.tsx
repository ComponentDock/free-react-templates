import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/huddle/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('The Future of Innovation')).toBeInTheDocument()
    expect(screen.getByText('About The Conference')).toBeInTheDocument()
    expect(screen.getAllByText('Speakers').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Why Us?')).toBeInTheDocument()
    expect(screen.getAllByText('Sponsors').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Conference Events')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
