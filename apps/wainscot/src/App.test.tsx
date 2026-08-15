import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { blogTitle, newsTitle, offerTitle, projectsTitle, siteName, skipLabel } from './data'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe(`${siteName} — Furniture & Interior Design`)
  })

  it('renders the skip link and every section in order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading').map((heading) => heading.textContent)

    expect(headings.some((text) => text?.includes('Creativity'))).toBe(true)
    expect(headings.some((text) => text?.includes(newsTitle))).toBe(true)
    expect(headings.some((text) => text?.includes(offerTitle))).toBe(true)
    expect(headings.some((text) => text?.includes(projectsTitle))).toBe(true)
    expect(headings.some((text) => text?.includes(blogTitle))).toBe(true)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
