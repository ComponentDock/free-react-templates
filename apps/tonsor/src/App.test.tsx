import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tonsor — Barbershop')
  })

  it('composes every section in the original order inside the main landmark', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /HairStyle is a Must Try Fashion/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We Believe that Interior beauty Lasts Long' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What We Can Do for You' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Select Your Style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'We Have All Famous Barbers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Choose Your Package' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest From Blog' })).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('provides a skip link to the main content', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    )
  })
})
