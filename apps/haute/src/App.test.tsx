import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Haute — Fashion')
  })

  it('composes the header, sections, and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /haute/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /style is forever/i,
      }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { level: 2, name: /footwear one can rule/i }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /recent posts/i })).toBeInTheDocument()
    expect(within(main).getAllByRole('link', { name: 'See More' })).toHaveLength(6)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: /useful links/i })).toBeInTheDocument()
  })
})
