import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Career').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Find Your Dream Job')).toBeDefined()
    expect(screen.getByText('Popular Categories')).toBeDefined()
    expect(screen.getByText('Recent Jobs')).toBeDefined()
    expect(screen.getByText('Featured Jobs')).toBeDefined()
    expect(screen.getByText('Testimonials')).toBeDefined()
    expect(screen.getByText(/Your Dream Job is Waiting/)).toBeDefined()
    expect(screen.getByText(/Component Dock/)).toBeDefined()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Careerly — Job Board Template')
  })
})
