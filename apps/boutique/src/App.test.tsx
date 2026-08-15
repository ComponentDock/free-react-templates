import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteName, skipLabel } from './data'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — 2018 Summer Collection`)
  })

  it('renders the skip link and every section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings.some((text) => text?.includes('2018 summer collection'))).toBe(true)
    expect(headings.some((text) => text?.includes('Premium products'))).toBe(true)
    expect(headings.some((text) => text?.includes('From the blog'))).toBe(true)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
