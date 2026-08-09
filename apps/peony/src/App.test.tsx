import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Peony — Beauty Salon Template')
  })

  it('composes the navbar, sections and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /peony/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /get pretty look/i,
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /a world class beauty salon company/i }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /the beauty is not luxurious imagination/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /make an appointment/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /stylist/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /working on a salon/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our prices/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /happy customer/i })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(
      within(contentinfo).getByRole('heading', { name: /have a questions/i }),
    ).toBeInTheDocument()
  })
})
