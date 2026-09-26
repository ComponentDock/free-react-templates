import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Pixelate').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/My name is Alex/)).toBeInTheDocument()
    expect(screen.getByText('My Expertise')).toBeInTheDocument()
    expect(screen.getByText('My Works')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Client Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
