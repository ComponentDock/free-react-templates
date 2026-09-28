import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the registration form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
