import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 7, 15))
  })

  it('renders the page heading', () => {
    render(<App />)
    expect(screen.getByText('Inline Date Picker')).toBeInTheDocument()
  })

  it('renders the result input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument()
  })

  it('renders the calendar grid', () => {
    render(<App />)
    expect(screen.getByText('August 2026')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders heading as h2', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Inline Date Picker')
  })
})
