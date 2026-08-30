import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the Timely heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Timely - Advanced Calendar & Scheduling',
    )
  })

  it('renders the calendar widget', () => {
    render(<App />)
    // Month label should show the default (December 2020)
    expect(screen.getByText('DECEMBER - 2020')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})
