import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Taper — Barber Shop Template')
  })

  it('composes the navbar, all sections, and the footer in landmarks', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Taper/ })).toHaveAttribute('href', '#home')

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: 'Our Hair Style make your look elegance',
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: '52 Years Of Experience In Hair cut!' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Professional Services' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Professional Teams' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'our image gellary' })).toBeInTheDocument()
    expect(within(main).getByRole('blockquote')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'our recent news' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
  })
})
