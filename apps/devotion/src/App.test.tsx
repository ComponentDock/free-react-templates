import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Devotion').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('December Camp Meeting').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Church Services')).toBeInTheDocument()
    expect(screen.getByText('Latest Sermon')).toBeInTheDocument()
    expect(screen.getByText('More Features')).toBeInTheDocument()
    expect(screen.getAllByText('Upcoming Events').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
