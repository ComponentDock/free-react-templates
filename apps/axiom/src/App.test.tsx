import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the source order', () => {
    render(<App />)

    expect(document.title).toMatch(/Axiom/)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((node) => node.textContent?.trim())

    expect(headings).toEqual([
      'Our Works',
      'We\u2019re a full-service UX design agency, We build digital products and brands',
      'We Help you to Build your Product and Brand For Big or Small',
      'Quick Fact',
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'We are Design and Development Agency based on California',
    )
    expect(within(main).getByRole('link', { name: 'Play the agency video' })).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Visit Our Work' })).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Address' })).toBeInTheDocument()
  })
})
