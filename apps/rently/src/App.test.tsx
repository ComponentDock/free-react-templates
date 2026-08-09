import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rently — Car Rental Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Fast & Easy Way To Rent A Car/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Make your trip/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Feeatured Vehicles/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Welcome to Rently/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Latest Services/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Do You Want To Earn With Us\? So Don't Be Late\./i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
  })
})
