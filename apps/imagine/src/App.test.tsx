import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the source order', () => {
    render(<App />)

    expect(document.title).toMatch(/Imagine/)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((node) => node.textContent?.trim())

    expect(headings).toEqual([
      'Latest News from all categories',
      'We can be your digital Problems Solution Partner',
      'Latest Project on the go',
      'Our Fields of Expertness',
      'About Creative Agency Team',
      'Latest From Our Blog',
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Provide Solutions that Brings Joy',
    )

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
  })
})
