import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('IRONPULSE')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Iron/)
    expect(heading.textContent).toMatch(/Pulse/)
    expect(screen.getByText('Pricing For Courses')).toBeInTheDocument()
    expect(screen.getAllByText('Crossfit').length).toBeGreaterThan(0)
    expect(screen.getByText('5000+')).toBeInTheDocument()
    expect(screen.getByText('Our Coaches')).toBeInTheDocument()
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Recent From Our Blog')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 1')).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByText('About IronPulse')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('IronPulse — Crossfit & Fitness Template')
  })
})
