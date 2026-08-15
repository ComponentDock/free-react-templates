import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { siteName, skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — Travel Template`)
  })

  it('renders the skip link and every section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings.some((text) => text?.includes('Best way to tour'))).toBe(true)
    expect(headings.some((text) => text?.includes('Amazing tour'))).toBe(true)
    expect(headings.some((text) => text?.includes('Most Popular place'))).toBe(true)
    expect(headings.some((text) => text?.includes('tour package'))).toBe(true)
    expect(headings.some((text) => text?.includes('our blog'))).toBe(true)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
