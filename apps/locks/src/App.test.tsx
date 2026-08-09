import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Locks — Hair Salon Template')
  })

  it('composes the navbar, sections and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /locks/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', { level: 1, name: /we will make you stylish/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /plan & pricing/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our hair stylist/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /recent from blog/i })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: /have a questions/i }),
    ).toBeInTheDocument()
  })
})
