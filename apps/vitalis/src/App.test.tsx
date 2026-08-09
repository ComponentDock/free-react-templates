import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vitalis — Medical & Cosmetic Surgery Template')
  })

  it('composes the navbar, sections and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /vitalis/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /take the world's best quality treatment/i,
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /consultation/i })).toBeInTheDocument()
    expect(within(main).getAllByRole('heading', { name: /offer for you/i })).toHaveLength(2)
    expect(within(main).getByRole('heading', { name: /our expert doctors/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /skin care tips/i })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: /subscribe/i })).toBeInTheDocument()
  })
})
