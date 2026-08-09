import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Slick — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Slick/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: "WE'RE THE LAST OF BREED." }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'ABOUT Our STORY' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'OUR TOP PRICES' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'All We Do for You' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Customers Say About Us' }),
    ).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
  })
})
