import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the calendar region', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: 'Calendar' })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
