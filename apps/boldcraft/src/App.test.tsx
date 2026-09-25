import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getAllByText(/Marcus Cole/).length).toBeGreaterThan(0)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('BoldCraft').length).toBeGreaterThan(0)
    expect(screen.getByText('My Expertise')).toBeInTheDocument()
    expect(screen.getByText('My Works')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Client Testimonial')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })
})
