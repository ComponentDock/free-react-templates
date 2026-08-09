import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Buzz — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Buzz/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'Modern barber shop in center of the city',
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Pricing' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Barber' })).toBeInTheDocument()
    expect(within(main).getByRole('blockquote')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })
})
