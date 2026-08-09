import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Clutch — Car Dealership Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: /Porsche Cayenne S/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What We Offers' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /We Are a Trusted Name In Auto/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Best Vehicle Offers' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Why People Choose Us' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Latest News Updates' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: 'Contact Us Now!' }),
    ).toBeInTheDocument()
  })
})
