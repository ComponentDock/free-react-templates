import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Tally').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Financial Excellence For Your Business')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Tally — Accounting & Business Consulting Template')
  })
})
