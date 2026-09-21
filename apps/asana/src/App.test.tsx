import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Asana')).toBeInTheDocument()
    expect(screen.getByText('A Yoga Studio')).toBeInTheDocument()
    expect(screen.getByText('Featured Classes')).toBeInTheDocument()
    expect(screen.getAllByText('Schedule').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Events').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Yoga Gallery')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Asana Studio')).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
