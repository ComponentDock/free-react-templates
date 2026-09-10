import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('DriveGo — Car Rental Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Rent a car/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Promo/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Car Listings/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What are you waiting for/i })).toBeInTheDocument()
  })
})
