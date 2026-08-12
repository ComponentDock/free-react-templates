import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the source order', () => {
    render(<App />)

    expect(document.title).toMatch(/Forge/)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((node) => node.textContent?.trim())

    expect(headings).toEqual([
      'We Are Design Agency That Bring Your Ideas Alive',
      'Latest Work',
      'The Services That We Are Providing',
      'Testimonial',
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Are Creative Agency',
    )
    expect(
      within(main).getByRole('heading', {
        level: 3,
        name: /Do You Have An Awesome Project In Mind/,
      }),
    ).toBeInTheDocument()

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'About Forge' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
  })
})
