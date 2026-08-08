import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tessera — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Tessera')).toBeInTheDocument()

    const main = within(screen.getByRole('main'))
    expect(
      main.getByRole('heading', { level: 1, name: /We Love Modern Designs/ }),
    ).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: /Our Services/ })).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: /Featured Projects/ })).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: /Our Architect Team/ })).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: /Newsletter/ })).toBeInTheDocument()
  })
})
