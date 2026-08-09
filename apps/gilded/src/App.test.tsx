import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gilded — Hair Salon Template')
  })

  it('composes the navbar, sections and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /gilded/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /beautiful hair comes from a legendary/i,
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /the house of hair salon & spa/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our work/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /our experts/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: /make gilded your number one choice/i }),
    ).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: /opening times/i })).toBeInTheDocument()
  })
})
