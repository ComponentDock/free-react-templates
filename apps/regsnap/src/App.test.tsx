import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the sr-only heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /regsnap/i, hidden: true })).toBeInTheDocument()
  })

  it('renders the registration form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /registration info/i })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /registration/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
