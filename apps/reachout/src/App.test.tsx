import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the main layout with two columns', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders contact info on the left', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /contact info/i })).toBeInTheDocument()
  })

  it('renders the form on the right', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
