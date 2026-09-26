import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the full page', () => {
    render(<App />)
    expect(screen.getByText('ForgeHub')).toBeInTheDocument()
    expect(screen.getByText(/We Love To Build/)).toBeInTheDocument()
    expect(screen.getByText('Our Works')).toBeInTheDocument()
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Let's Get Started")).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('ForgeHub — Creative Agency & Portfolio Template')
  })
})
