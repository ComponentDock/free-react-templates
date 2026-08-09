import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Allure — Model Agency')
  })

  it('composes the header, sections, and footer in their landmarks', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /allure/i })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(
      within(main).getByRole('heading', {
        level: 1,
        name: /show stopper/i,
      }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /model management/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /see the models/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /model of the week/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /contact us/i })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText('Model Agency')).toBeInTheDocument()
  })
})
