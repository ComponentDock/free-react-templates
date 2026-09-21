import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Zestly — Cooking & Recipe Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Chicken dish/)

    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.some((heading) => heading.textContent?.includes('Recipe videos'))).toBe(true)
    expect(
      headings.some((heading) => heading.textContent?.includes('Discover latest trending')),
    ).toBe(true)
    expect(
      headings.some((heading) => heading.textContent?.includes('Feedback From Customers')),
    ).toBe(true)
    expect(headings.some((heading) => heading.textContent?.includes('Download app'))).toBe(true)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
