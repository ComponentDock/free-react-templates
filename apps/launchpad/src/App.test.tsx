import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Launchpad — SaaS Startup Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /All you want is here/i })).toBeInTheDocument()

    // Services
    expect(screen.getByRole('heading', { name: /Our Offered Services/i })).toBeInTheDocument()

    // About Video
    expect(
      screen.getByRole('heading', {
        name: /Watch tutorial video/i,
      }),
    ).toBeInTheDocument()

    // About Support
    expect(
      screen.getByRole('heading', {
        name: /A handy support system/i,
      }),
    ).toBeInTheDocument()

    // Portfolio
    expect(screen.getByRole('heading', { name: /Our Latest Projects/i })).toBeInTheDocument()

    // Call to Action
    expect(
      screen.getByRole('heading', {
        name: /Got impressed by our features/i,
      }),
    ).toBeInTheDocument()

    // Pricing
    expect(
      screen.getByRole('heading', {
        name: /Choose the Perfect Plan/i,
      }),
    ).toBeInTheDocument()

    // Testimonials
    expect(
      screen.getByRole('heading', {
        name: /Testimonials from our Clients/i,
      }),
    ).toBeInTheDocument()

    // Blog
    expect(screen.getByRole('heading', { name: /Latest News from our Blog/i })).toBeInTheDocument()
  })
})
