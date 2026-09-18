import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText(/HireFlow/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/1500\+/)).toBeInTheDocument()
    expect(screen.getByText('Searching')).toBeInTheDocument()
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
    expect(screen.getByText('Featured Job Categories')).toBeInTheDocument()
    expect(screen.getByText('Recent Job Listings')).toBeInTheDocument()
    expect(screen.getByText('Join us today without any hesitation')).toBeInTheDocument()
    expect(screen.getByText(/HireFlow App Today!/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('HireFlow — Job Listing Template')
  })
})
