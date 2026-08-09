import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Bloom — Beauty Salon Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Bloom/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: 'Beauty Salon' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Beauty Experts' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Save up to 25% Off' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Work' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Beauty Pricing' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: 'Have A Questions?' }),
    ).toBeInTheDocument()
  })
})
