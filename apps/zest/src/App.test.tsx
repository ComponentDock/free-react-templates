import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Zest — App Landing Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /Zest is a SaaS & App Landing Startups Template/,
    )
    expect(
      within(main).getByRole('heading', { name: /Choose your favorite demo/i }),
    ).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'CREATE YOUR OWN WEBSITE TODAY !' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
