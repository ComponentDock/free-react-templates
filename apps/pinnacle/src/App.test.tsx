import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pinnacle — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Pinnacle')).toBeInTheDocument()

    const main = within(screen.getByRole('main'))
    expect(main.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(main.getByRole('region', { name: /company stats/i })).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: /We've been creating Awesome Since 1992/ }),
    ).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: /Latest Completed Projects/ }),
    ).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: /Get to Know Project Estimate/ }),
    ).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: /What People Say About Us/ }),
    ).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
