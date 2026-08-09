import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Motorly — Garage Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Welcome To Motorly Garage/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What We Do\?/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /20 Years Of Experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Our Statistics/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Booking Repair/i })).toBeInTheDocument()
  })
})
