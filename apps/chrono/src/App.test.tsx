import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { siteName, skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — Select Your New Perfect Style`)
  })

  it('renders the skip link and every section', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)
    expect(headings.some((text) => text?.includes('Select Your New Perfect Style'))).toBe(true)
    expect(headings.some((text) => text?.includes('New Arrivals'))).toBe(true)
    expect(headings.some((text) => text?.includes('Popular Items'))).toBe(true)
    expect(headings.some((text) => text?.includes('Watch of Choice'))).toBe(true)
    expect(headings.some((text) => text?.includes('Free Shipping Method'))).toBe(true)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
