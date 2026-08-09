import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Torquely — Car Repair Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Make your car last longer/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Are you ready\?/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our car services/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /45 years serving customer car/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Free Consultation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Happy Clients & Feedbacks/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest news from our blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Pricing$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Done Projects/i })).toBeInTheDocument()
  })
})
