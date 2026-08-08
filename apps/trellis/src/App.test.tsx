import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Trellis — Architecture Template')
  })

  it('composes every section in the page landmarks', () => {
    const { container } = render(<App />)
    const banner = within(container.querySelector('header') as HTMLElement)
    expect(banner.getByText('Trellis')).toBeInTheDocument()

    const main = within(screen.getByRole('main'))
    expect(main.getAllByRole('article')).toHaveLength(12)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/far far away/i)).toBeInTheDocument()
  })
})
