import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Chisel — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Chisel')).toBeInTheDocument()

    const main = within(screen.getByRole('main'))
    expect(main.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(main.getByRole('region', { name: /company stats/i })).toBeInTheDocument()
    expect(
      main.getByRole('heading', { level: 3, name: 'Construction Consultation' }),
    ).toBeInTheDocument()
    expect(main.getByText(/portfolio/i)).toBeInTheDocument()
    expect(main.getByText('James Anderson')).toBeInTheDocument()
    expect(main.getAllByRole('heading', { level: 3, name: /Separated they live in/ })).toHaveLength(
      4,
    )

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
