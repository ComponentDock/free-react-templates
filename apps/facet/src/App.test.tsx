import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Facet — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Facet')).toBeInTheDocument()

    const main = within(screen.getByRole('main'))
    expect(main.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 3, name: 'Perfectly Design' })).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: 'Be Part of our Business' }),
    ).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: 'Since we started work in 1980' }),
    ).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 2, name: 'Behind those Beautiful Works' }),
    ).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: 'Read Our Stories' })).toBeInTheDocument()
    expect(main.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
