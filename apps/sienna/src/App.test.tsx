import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sienna — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Sienna/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'We Specialize In All Phase Of Hair' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'We Are Artist, Hair Is My Canvas' }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Our Strength Is Your Smart Beauty' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'View Our Work' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Experience Staff Change Your Look' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
