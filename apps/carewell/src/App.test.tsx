import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the Navbar with brand name', () => {
    render(<App />)
    expect(screen.getByText('Carewell')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Together We Can/)).toBeInTheDocument()
    expect(screen.getByText('Total Donation')).toBeInTheDocument()
    expect(screen.getByText('Our Major Causes')).toBeInTheDocument()
    expect(screen.getByText('Make a Donation Today')).toBeInTheDocument()
    expect(screen.getByText('Support a Campaign or Fundraiser')).toBeInTheDocument()
    expect(screen.getByText(/Experience How Your/)).toBeInTheDocument()
    expect(screen.getByText('Create Fundraising Today')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Carewell — Nonprofit & Charity Template')
  })
})
