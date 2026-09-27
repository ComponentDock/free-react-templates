import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Regnest — Booking Ticket Registration')
  })

  it('renders the booking form and footer', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /booking tickets/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
