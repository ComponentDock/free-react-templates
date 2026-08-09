import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mane — Hair Salon Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Mane/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'We are professional care for your hair',
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Services Menu' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Makeup Artist' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our gallery' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Prices' })).toBeInTheDocument()
    expect(within(main).getByRole('blockquote')).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Links' })).toBeInTheDocument()
  })
})
