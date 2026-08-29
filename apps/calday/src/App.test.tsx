import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the heading "Calendar #03"', () => {
    render(<App />)
    expect(screen.getByText('Calendar #03')).toBeInTheDocument()
  })

  it('renders the heading as an h1', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Calendar #03')
  })

  it('renders two calendar instances', () => {
    render(<App />)
    const prevButtons = screen.getAllByRole('button', { name: /previous month/i })
    expect(prevButtons.length).toBe(2)
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })

  it('renders both calendars with the same initial month', () => {
    render(<App />)
    const now = new Date()
    const monthYear = now
      .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      .toUpperCase()
    const headings = screen.getAllByText(monthYear)
    expect(headings.length).toBe(2)
  })
})
