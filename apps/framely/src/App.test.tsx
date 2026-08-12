import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Framely — Photography Studio')
  })

  it('composes the header, hero slider, and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(
      within(banner).getByText(
        (_, element) => element?.tagName === 'P' && element.textContent === 'Framely',
      ),
    ).toBeInTheDocument()
    expect(within(banner).getByRole('link', { name: /home/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(within(main).getByText('Photography')).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
