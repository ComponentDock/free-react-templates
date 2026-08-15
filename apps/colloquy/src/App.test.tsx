import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteName, skipLabel } from './data'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — 2018 Public Policy Conference`)
  })

  it('renders the skip link and every section in order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings.some((text) => text?.includes('2018 Public Policy Conference'))).toBe(true)
    expect(headings.some((text) => text?.includes('Conference Program'))).toBe(true)
    expect(headings.some((text) => text?.includes('Choose a plan'))).toBe(true)
    expect(headings.some((text) => text?.includes('22 APRIL EVENTS CALENDAR'))).toBe(true)
    expect(headings.some((text) => text?.includes('Get your tickets now!'))).toBe(true)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
