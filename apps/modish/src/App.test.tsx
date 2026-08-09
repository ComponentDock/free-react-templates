import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Modish — eCommerce Template')
  })

  it('composes the navbar, sections and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /modish/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /denim jackets/i,
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /fast secure payments/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /latest products/i })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /browse top selling products/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /striped shirts/i })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: /questions/i })).toBeInTheDocument()
  })
})
