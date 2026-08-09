import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Snip — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Snip/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'Experienced and traditional stylish barber shop',
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Pricing List' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Expert Team' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
  })
})
